import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FeaturedVideos from "./FeaturedVideos";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>
            <FeaturedVideos></FeaturedVideos>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;