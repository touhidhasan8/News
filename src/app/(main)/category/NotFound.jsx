import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="text-center max-w-xl">
                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-700">
                   Data Not Found
                </h2>
                {/* Description */}
                <p className="mt-4 text-slate-500 text-lg">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p> 
            </div>
        </div>
    );
};

export default NotFound;