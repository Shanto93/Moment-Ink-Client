import { useLoaderData, useParams } from "react-router-dom";
import BlogDetailsLayout from "./BlogDetailsLayout";


const BlogDetails = () => {
    const blogs = useLoaderData();
    // console.log(blog);
    const { _id } = useParams();
    const blog = blogs.filter(blog => blog._id === _id);
    return (
        <div>
            {
                blog.map(blo => <BlogDetailsLayout blo={blo} key={blo._id}></BlogDetailsLayout>)
            }
        </div>
    );
};

export default BlogDetails;