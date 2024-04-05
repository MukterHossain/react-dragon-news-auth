import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url , details, _id } = news;
    return (
        <div className="card  bg-base-100 shadow-xl mb-16 ">
            <img className="px-8" src={image_url} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 
                    ? <p>{details.slice(0, 200)} <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>Read more</Link></p>
                    : <p>{details}</p>
                }
               
                
            </div>
        </div>
    );
};

export default NewsCard;