import Swal from "sweetalert2";

const ContactUs = () => {
    const handleContact = () => {
        Swal.fire("Your information has been recorded. We will contact you soon.");
    }
    return (
        <div className="mx-12">
            <h2 className="text-4xl font-bold text-center">Contact us</h2>
            <h2 className="text-2xl font-semibold mb-3">Leave a comment</h2>
            <p className="mb-5">Your email address will not be published.</p>

            <div>
            <form onSubmit={handleContact} className="flex justify-center items-center w-full">
                <div className="w-full">
                    
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="title" placeholder="First Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name="photo" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="photo" placeholder="Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <textarea name="Message" placeholder="Message" className="mt-5 border w-full" id="" cols="30" rows="10"></textarea>

                    <input className="btn mb-10 w-full mt-7 bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]" type="submit" value="Submit" />
                </div>

            </form>
            </div>
        </div>
    );
};

export default ContactUs;