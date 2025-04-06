import React from "react";
import "react-quill/dist/quill.snow.css";
import BlogTable from "./BlogTable";

const Blogs: React.FC = () => {

  return (
    <div>
        {/* <AddBlogPost/> */}
        <BlogTable/>
    </div>
   
  );
};

export default Blogs;
