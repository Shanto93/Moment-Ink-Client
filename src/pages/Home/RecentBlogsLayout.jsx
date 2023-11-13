import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion"
import { useState } from "react";

/* eslint-disable react/prop-types */
const RecentBlogsLayout = ({ blog }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { _id, title, photo, short_des, long_des } = blog;

    const handleWishlist = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added to Wishlist',
            showConfirmButton: false,
            timer: 1500
        })
        fetch('https://moment-ink-server.onrender.com/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <motion.div
            style={{
                borderRadius: "1rem",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
            }}
            transition={{
                layout: {
                    duration: 1,
                    type: "spring"
                }
            }}
            layout
            className="card md:w-96 bg-base-100 shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
        >
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl h-56" />
            </figure>
            {
                isOpen &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    layout="position"
                    className="card-body items-center text-center"
                >
                    <h2 className="card-title">{title}</h2>
                    <p>{short_des}</p>
                    <p>{
                        long_des.length > 20 ?
                            <p>{long_des.slice(0, 20)} <span>more...</span></p> : ''
                    }</p>
                    <div className="card-actions">
                        <Link to={`/blog/${_id}`} > <button className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Details</button></Link>

                        <button onClick={handleWishlist} className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]">Wishlist</button>
                    </div>
                </motion.div>
            }
        </motion.div>
    );
};

export default RecentBlogsLayout;