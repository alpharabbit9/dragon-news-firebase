import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-3 bg-base-200 p-2">
            <p className="bg-[#D72050] text-white rounded-none py-2 px-5 ">Latest</p>
            <Marquee className="space-x-3 font-semibold " pauseOnHover={true}>
                <Link to={'/news'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, esse.</Link>
                <Link to={'/news'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, esse.</Link>
                <Link to={'/news'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, esse.</Link>
                <Link to={'/news'}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, esse.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;