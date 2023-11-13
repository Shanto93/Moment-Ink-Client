import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const res = await axios.get('https://moment-ink-server.onrender.com/blog');
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateWordCount = (text) => {
    const words = text.split(' ');
    return words.length;
  };

  const columns = [
    {
      name: "SL no",
      selector: (row, index) => index + 1,
    },
    {
      name: "Blog Title",
      selector: (row) => row.title,
    },
    {
      name: "Blog Owner",
      selector: (row) => row.owner,
    },
    {
      name: "Profile Picture",
      selector: (row) => <img className="w-20 h-20 rounded-full" src={row.owner_photo} alt="" />,
    },
  ];

  useEffect(() => {
    getComments();
  }, []);

  // Calculate word count and sort data
  const sortedData = comments.slice().sort((a, b) => {
    const wordCountA = calculateWordCount(a.long_des);
    const wordCountB = calculateWordCount(b.long_des);
    return wordCountB - wordCountA;
  });

  // Display top 10 posts
  const top10Data = sortedData.slice(0, 10);

  return (
    <div>
      <DataTable columns={columns} data={top10Data} pagination fixedHeader fixedHeaderScrollHeight="470px" highlightOnHover>
      </DataTable>
    </div>
  );
};

export default FeaturedBlogs;
