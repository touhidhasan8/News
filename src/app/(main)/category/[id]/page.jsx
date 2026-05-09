import AllCategory from '@/components/allcategory/page';
import SocialPage from '@/components/social/page';
import React from 'react';
import NotFound from '../NotFound';
import { getCategory, getNews } from '@/lib/data';
import News from '@/components/NewsPage/News';




const NewsPage = async ({ params }) => {
    const { id } = await params
    console.log(id);

    const category = await getCategory();
    const news = await getNews(id)
    console.log(news);


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-8 gap-4 p-4">

                {/* Left Sidebar */}
                <div className="md:col-span-2  p-4 rounded-xl">
                    <h1 className="text-xl font-bold mb-4">All Category</h1>

                    <ul className="space-y-3">
                        {category.map((cat) => (<AllCategory key={cat.category_id} cat={cat} activeId={id}></AllCategory>

                        ))}
                    </ul>
                </div>

                {/* Main News */}
                <div className="md:col-span-4 bg-gray-50 p-4 rounded-xl ">
                    <h1 className="text-xl font-bold">News Page</h1>
                    <ul >
                        {
                            news.length > 0 ?
                                news.map(n => <News key={n._id} n={n}></News>) :
                                <NotFound></NotFound>
                        }
                    </ul>
                </div>

                {/* Right Sidebar */}
                <div className="md:col-span-2 p-4 rounded-xl">
                    <SocialPage></SocialPage>

                </div>
            </div>
        </div>
    );
};

export default NewsPage;