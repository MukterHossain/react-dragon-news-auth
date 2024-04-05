import { Link } from "react-router-dom";


const Career = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            
            <h2 className="text-2xl">This is Career Page</h2>
            <Link to='/' className="btn">Home</Link>
        </div>
    );
};

export default Career;