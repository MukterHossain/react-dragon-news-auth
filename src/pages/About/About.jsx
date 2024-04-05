import { Link } from "react-router-dom";


const About = () => {
    return (
        <div  className="max-w-6xl mx-auto mt-10">
            <h2 className="text-3xl">This is About Page</h2>
            <Link to='/' className="btn">Home</Link>
        </div>
    );
};

export default About;