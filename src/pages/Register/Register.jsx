import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password);

        // eslint-disable-next-line no-constant-condition
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Z\d@$!%*#?&]{8,}$/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Minimum six characters, at least one capital letter and one special character',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

        // Create User
        createUser(email, password)
            .then(result => {
                result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your account has been registered Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then()
                    .catch()
                form.reset();
            })
            .catch(error => {
                console.error(error);

                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'auth/email-already-in-use',
                })

            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary mt-2">Register</button>
                        </div>
                        <p className='text-center'>Already have account?Please <Link to='/login' className='underline text-blue-600'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;