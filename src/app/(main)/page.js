import Image from "next/image";

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );

  const data = await res.json();

  return data.data.news_category;
};

export default async function Home() {
  const category = await getCategory();

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4 p-4">

      {/* Left Sidebar */}
      <div className="md:col-span-2 bg-gray-400 p-4 rounded-xl">
        <h1 className="text-xl font-bold mb-4">All Category</h1>

        <ul className="space-y-3">
          {category.map((cat) => (
            <li
              className="bg-slate-200 rounded-lg p-2 hover:bg-slate-300 transition"
              key={cat.category_id}
            >
              {cat.category_name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main News */}
      <div className="md:col-span-4 bg-gray-200 p-4 rounded-xl">
        <h1 className="text-xl font-bold">News Page</h1>
      </div>

      {/* Right Sidebar */}
      <div className="md:col-span-2 bg-amber-300 p-4 rounded-xl">
        <h1 className="text-xl font-bold">Social Icons</h1>
      </div>
    </div>
  );
}