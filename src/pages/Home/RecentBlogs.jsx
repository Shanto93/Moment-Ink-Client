import RecentBlogsLayout from "./RecentBlogsLayout";
import { useEffect, useState } from "react";

const RecentBlogs = () => {
   
    const [sorted, setSorted] = useState([]);
    const [isSorting, setIsSorting] = useState(false); 

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5000/blog')
            .then((res) => res.json())
            .then((data) => setSorted(data));
    };

    const sortDescending = () => {
        setIsSorting(true); 

        
        setTimeout(() => {
            let data = [...sorted];
            if (data.length > 0) {
                let result = data.sort((a, b) => a.time.localeCompare(b.time));
                setSorted(result);
                setIsSorting(false); 
            }
        }, 1000); 
    };

    const sortAscending = () => {
        setIsSorting(true); 

        
        setTimeout(() => {
            let data = [...sorted];
            if (data.length > 0) {
                let result = data.sort((a, b) => b.time.localeCompare(a.time));
                setSorted(result);
                setIsSorting(false); 
            }
        }, 1000);
    };

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-10">Posts</h2>

            <button className="btn ml-12 mr-7 bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]" onClick={sortAscending} disabled={isSorting}>Recent Post</button>
            <button className="btn bg-[#e74c3c] text-white font-bold hover:bg-[#e67e22]" onClick={sortDescending} disabled={isSorting}>Old Post</button>
            

            
            {isSorting && <span className="loading loading-spinner text-error"></span>}

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {sorted.slice(0, 6).map((blog) => (
                    <RecentBlogsLayout blog={blog} key={blog._id}></RecentBlogsLayout>
                ))}
            </div>
        </div>
    );
};

export default RecentBlogs;
