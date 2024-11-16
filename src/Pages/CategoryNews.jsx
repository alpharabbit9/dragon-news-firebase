import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {

    const {data : news} = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className="font-semibold">Dragon news home</h2>
            <p className="text-gray-400">
                news count : {news.length}
            </p>

            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews.category_id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;