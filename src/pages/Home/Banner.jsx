import banner from './../../../public/assets/logo/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to a World of Knowledge and Inspiration! Explore our diverse range of articles, from lifestyle tips to the latest news. Discover valuable insights and expert opinions, all in one place. Start your journey with us today.</p>
                    <button className="btn bg-[#e74c3c] text-white font-bold border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;