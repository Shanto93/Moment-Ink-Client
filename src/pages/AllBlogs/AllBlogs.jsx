import { useLoaderData } from "react-router-dom";
import AllBlogsLayout from "./AllBlogsLayout";
import { useState } from "react";
// import { useEffect, useState } from "react";

const AllBlogs = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const data = useLoaderData();
    // console.log(search);
    console.log(filter);
    // console.log("Count = ", data.length)
    // const [blogs, setBlogs] = useState([]);
    // const [itemPerPage, setItemPerPage] = useState(5);
    // const [currentPage, setCurrentPage] = useState(0);
    // const numberOfPages = Math.ceil(data.length / itemPerPage);

    // const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);

    // const handleItemsPerPage = e => {
    //     const val = parseInt(e.target.value);
    //     setItemPerPage(val);
    //     setCurrentPage(0);
    // }

    // useEffect(() => {
    //     fetch(`https://moment-ink-server.onrender.com/blog/page=${currentPage}&size={itemPerPage}`)
    //     .then(res => res.json())
    //     .then(data => setBlogs(data))
    // },[currentPage,itemPerPage])

    // const handlePrevPage = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }

    // const handleNextPage = () => {
    //     if (currentPage < pages.length -    1) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }


    return (
        <div>
            <div className="md:flex md:justify-between items-center md:mt-5 md:mb-5">
                <div className="md:ml-12">
                    <form onChange={(e) => setSearch(e.target.value)}>
                        <input type="text" name="search" placeholder="Search Here" className="border py-2 px-5 rounded-xl" />
                        {/* <input type="submit" value="Search" className="btn bg-[#e74c3c] rounded-lg text-white"/> */}
                    </form>
                </div>
                <div>
                    <select onChange={(e) => setFilter(e.target.value)} className="select select-bordered" name="category">
                        <option defaultValue>All</option>
                        <option>Lifestyle</option>
                        <option>Business</option>
                        <option>Arts and Entertainment</option>
                        <option>Education</option>
                        <option>News and Politics</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    data.filter((item) => {
                        // Filter by search and category at the same time
                        const matchesSearch = search.toLowerCase() === '' || item.title.toLowerCase().includes(search);
                        const matchesCategory = filter === 'All' || item.category.includes(filter);

                        // Return true only if both conditions are met
                        return matchesSearch && matchesCategory;
                    }).map((dat) => <AllBlogsLayout dat={dat} key={dat._id}></AllBlogsLayout>)
                }

            </div>
            {/* <div className="text-center">
                <button onClick={handlePrevPage} className="btn bg-amber-500 text-white font-bold">Prev</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} key={page} className={currentPage === page ? 'btn bg-[#e74c3c] text-white font-bold mt-10 mb-5 hover:bg-[#e67e22] mx-2' : 'btn mx-2 bg-black text-white'}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn bg-amber-500 text-white font-bold">Next</button>
                <select value={itemPerPage} name="" onChange={handleItemsPerPage} id="">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">5</option>
                    <option value="20">5</option>
                </select>
            </div> */}
        </div>

    );
};

export default AllBlogs;