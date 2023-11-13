import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlogDetails = () => {
    const loadedBlog = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const owner = form.owner.value;
        const owner_photo = form.owner_photo.value;
        const time = form.time.value;
        const category = form.category.value;
        const short_des = form.short_des.value;
        const long_des = form.long_des.value;

        const updateBlog = {title, photo, owner, owner_photo, category, time, short_des, long_des};
        fetch(`https://moment-ink-server.onrender.com/blog/${loadedBlog._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateBlog)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully data updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="min-h-screen flex w-full justify-center">

            <form onSubmit={handleUpdate} className="flex justify-center items-center w-full">
                <div className="w-3/4">
                    <h2 className="text-center text-4xl font-bold mb-5">Update Blog Details</h2>
                    {/* Title and Image Column */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={loadedBlog.title} className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={loadedBlog.photo} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Owner Name and Owner Image Column */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Owner Name</span>
                            </label>
                            <input type="text" name="owner" defaultValue={loadedBlog.owner} className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Owner Image URL</span>
                            </label>
                            <input type="text" name="owner_photo" defaultValue={loadedBlog.owner_photo} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Category and Date Column */}
                    <div className="md:flex gap-5">

                        <div className=" md:w-1/2">
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select className="select w-full select-bordered" name="category" defaultValue={loadedBlog.category}>
                                <option>Lifestyle</option>
                                <option>Business</option>
                                <option>Arts and Entertainment</option>
                                <option>Education</option>
                                <option>News and Politics</option>
                            </select>
                        </div>

                        <div className="md:w-1/2">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="date" name="time" defaultValue={loadedBlog.time} className="input w-full input-bordered" required />

                        </div>
                    </div>
                    {/* Long Description Description Column */}
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="short_des" defaultValue={loadedBlog.short_des} className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <input type="text" name="long_des" defaultValue={loadedBlog.long_des} className="input input-bordered" required />
                    </div>
                    <input className="btn w-full mt-7 bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]" type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default UpdateBlogDetails;