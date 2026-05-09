import Link from "next/link";
import React from "react";


const AllCategory = ({ cat, activeId }) => {
    return (
        <div >
            <Link
                href={`/category/${cat.category_id}`}
                className={`${activeId === cat.category_id && "bg-slate-200"}  block mt-4 rounded-lg p-2 hover:bg-slate-300 transition`}
            >  {cat.category_name}
            </Link>
        </div>
    );
};

export default AllCategory;

