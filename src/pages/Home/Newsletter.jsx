import Swal from "sweetalert2";

const Newsletter = () => {
    const handleNewsletter = () => {
        Swal.fire("Thank you for subscribing newsletter");
    }
    return (
        <div className="my-14 md:px-16">
            <div className="flex flex-col justify-center items-center h-[250px] bg-[#e74c3c] rounded-lg text-white font-bold">
                <h2 className="text-center mt-5 text-4xl">Newsletter</h2>
                <div>
                    <form onSubmit={handleNewsletter}>
                    <div className="form-control md:w-full">
                        <input type="email" name="email" placeholder="Email" className="input text-base text-black font-normal input-bordered mt-5" required />
                        </div>
                        <br />
                        <input className=" mb-7 py-2 w-full rounded-xl bg-white text-center text-black " type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;