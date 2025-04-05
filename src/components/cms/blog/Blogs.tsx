import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import AddBlogPost from "./AddBlogPost";
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
