import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const WishlistLayout = ({ cart, myCartData, setMyCartData }) => {
    // console.log("Wishlists: ",wishlists);
    const { _id, title, photo, category, short_des } = cart;

    const handleDelete = _id => {
        // console.log("Delete :",_id )
        fetch(`https://moment-ink-server.onrender.com/wishlist/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const remaining = myCartData.filter(data => data._id !== _id)
                    setMyCartData(remaining);
                }
            });
    }

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h2>{category}</h2>
                <p>{short_des}</p>
                <div className="card-actions">
                    <Link to={`/blog/${_id}`} > <button className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Details</button></Link>

                    <button onClick={() => handleDelete(_id)} className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistLayout;