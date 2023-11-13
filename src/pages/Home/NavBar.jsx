import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/assets/logo/MomentInk.png'
// import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })

    }
    const links = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-[#e74c3c] text-white ml-3 font-bold hover:bg-[#e67e22] btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink></li>
        <li><NavLink to='/addBlog' className={({ isActive }) => isActive ? 'btn bg-[#e74c3c] text-white ml-3 font-bold hover:bg-[#e67e22] btn-sm' : 'btn btn-ghost btn-sm'}>Add Blog</NavLink></li>
        <li><NavLink to='/allBlogs' className={({ isActive }) => isActive ? 'btn bg-[#e74c3c] text-white ml-3 font-bold hover:bg-[#e67e22] btn-sm' : 'btn btn-ghost btn-sm'}>All blogs</NavLink></li>
        <li><NavLink to='/featuredBlogs' className={({ isActive }) => isActive ? 'btn bg-[#e74c3c] text-white ml-3 font-bold hover:bg-[#e67e22] btn-sm' : 'btn btn-ghost btn-sm'}>Featured Blogs</NavLink></li>
        <li><NavLink to='/wishList' className={({ isActive }) => isActive ? 'btn bg-[#e74c3c] text-white ml-3 font-bold hover:bg-[#e67e22] btn-sm' : 'btn btn-ghost btn-sm'}>Wishlist</NavLink></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src={logo} className="md:w-56" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="md:navbar-end">
                {
                    user ?
                        <p className="invisible md:visible">{user.displayName}</p> :
                        ''
                }

                {
                    user ?
                        <img className="w-12 h-12 ml-3 rounded-full mt-0 " src={user.photoURL} alt="" /> :
                        ''
                }

                {
                    user ? <button onClick={handleSignOut} className="btn bg-[#e74c3c] text-white md:ml-3 font-bold hover:bg-[#e67e22]">Logout</button> :
                        <Link to='/login'><button className="btn bg-[#e74c3c] text-white font-bold">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;