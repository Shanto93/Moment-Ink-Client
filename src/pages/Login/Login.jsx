import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Location in login page", location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        // const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();

                // // update profile
                // updateProfile(result.user, {
                //     displayName: name, 
                //     photoURL: photo
                // })
                // .then()
                // .catch()
                // Navigate after Login
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

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
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary mt-2">Login</button>
                        </div>
                        <p className='text-center'>Do not have account?Please <Link to='/register' className='underline text-blue-600'>register</Link> </p>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary mx-8 mb-5">
                        <FcGoogle className='text-3xl'></FcGoogle>Google Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;