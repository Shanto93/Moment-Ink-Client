import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const BlogDetailsLayout = ({ blo }) => {
    const { _id, title, photo, short_des, category, time, long_des } = blo;
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://moment-ink-server.onrender.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users);

    const handleComment = (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const owner = form.owner.value;
        const image = form.image.value;
        const username = form.username.value;
        const newUser = { comment, owner, image, username };
        console.log(newUser);

        // if (_id === postId) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'You cannot comment on your own post!',
        //     });
        //     return;
        // }
            fetch('https://moment-ink-server.onrender.com/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Comments information has been stored Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        form.reset();
                    }
                })

    }

    return (
        <div>
            <div className="md:flex">
                <div className="flex-1 justify-center">
                    <img className=" md:p-8" src={photo} alt="" />

                    {/* Comment Section */}
                    <div className="ml-16 mb-10">
                        <h2 className="text-3xl font-bold mb-5">Write comment here</h2>
                        <form onSubmit={handleComment} className="space-y-3">
                            <textarea name="comment" placeholder="Comment Here" cols="50" rows="3" className="border"></textarea>

                            <input type="text" name="owner" placeholder="Name" className="border-2 py-2 px-7 text-base rounded-xl" />
                            <br />
                            <input type="text" name="image" className="border-2 py-2 px-7 text-base rounded-xl" placeholder="Photo URl" />
                            <br />
                            <input type="text" name="username" className="border-2 py-2 px-7 text-base rounded-xl" placeholder="Username" />
                            <br />
                            <input type="submit" value="Submit" className="btn my-7 bg-[#e74c3c] text-white font-bold" />
                        </form>
                    </div>
                </div>
                <div className="flex-1 p-8 space-y-4">
                    <h2 className="text-2xl font-bold">{title} </h2>
                    <h2 className="text-xl"> <span className="text-xl font-bold">Blog Time:</span> {time} </h2>
                    <h2 className="text-xl"> <span className="text-xl font-bold">Category:</span> {category}</h2>
                    <h2 className="text-xl"> <span className="text-xl font-bold">Short Description:</span > {short_des} </h2>
                    <p className="text-lg"> <span className="text-xl font-bold">Long Description:</span> {long_des} </p>
                    <Link to={`/update/${_id}`}><button className="btn w-full my-7 bg-[#e74c3c] text-white font-bold">Update</button></Link>
                    <h2 className="text-3xl font-bold mt-5">Comments</h2>
                    <div>
                        {
                            users.map((user, x) => 
                                <div key={x}  className="hero bg-base-200">
                                <div className="hero-content flex-col lg:flex-row justify-start">
                                  <img src={user.image} className="h-20 w-20 rounded-full shadow-2xl" />
                                  <div>
                                    <h1 className="text-2xl font-bold">{user.owner}</h1>
                                    <p className="py-6">{user.comment}</p>
                                  </div>
                                </div>
                              </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetailsLayout;


