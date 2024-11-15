import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        author,
        title,
        published_date,
        thumbnail_url,
        rating,
        image_url,
        total_view,
        details,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md p-5 rounded-lg">
            {/* Author Info */}
            <div className="flex items-center mb-4">
                <img src={author.img} alt="Author" className="w-12 h-12 rounded-full mr-3" />
                <div>
                    <h4 className="text-lg font-semibold">{author.name}</h4>
                    <p className="text-sm text-gray-500">
                        {new Date(author.published_date).toLocaleDateString()}
                    </p>
                </div>
                <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{title}</h3>

            {/* Thumbnail */}
            <img src={image_url} alt="Thumbnail" className="w-full  object-cover rounded-lg mb-4" />

            {/* Details */}
            <p className="text-gray-700 mb-4">
                {details.slice(0, 100)}...
                <span className="text-blue-500 cursor-pointer">Read More</span>
            </p>

            {/* Ratings and Views */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <span className="ml-2 text-lg font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye />
                    <span className="ml-2">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
