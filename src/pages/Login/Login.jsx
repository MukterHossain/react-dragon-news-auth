import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
        console.log(form.get('password'))

    }



    return (
        <div>
            <Navbar></Navbar>
            <div className=" ">
                <div className="text-center mt-10 ">
                    <h1 className="text-5xl font-bold ">Login now!</h1>
                </div>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-5">Do not have an account <Link className="text-blue-600 font-bold " to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;