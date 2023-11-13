import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const AllBlogsLayout = ({dat}) => {
    const { _id,category, title, photo, short_des} =dat;

    const handleWishlist = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added to Wishlist',
            showConfirmButton: false,
            timer: 1500
        })
        fetch('https://moment-ink-server.onrender.com/wishlist', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(dat),
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h2>{category}</h2>
                <p>{short_des}</p>
                <div className="card-actions">
                <Link to={`/blog/${_id}`} > <button className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Details</button></Link>

                    <button onClick={handleWishlist} className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default AllBlogsLayout;