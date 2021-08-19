import React from "react";
import { Link } from "react-router-dom";

export default function Card({ blog }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className=" min-w-screen bg-white flex items-center justify-center mb-12"
      key={blog.id}
    >
      <div>
        <div className="flex flex-col max-w-md bg-white px-8 py-5 rounded-xl space-y-5 items-center  border ">
          <h3 className="font-serif font-bold text-gray-900 text-xl">
            {blog.topic_name}
          </h3>
          <img className="w-full rounded-md" src={blog.imageUrl} alt="" />
          <p className="text-center leading-relaxed">{blog.description}</p>
          <span className="text-center">{blog.author}</span>
          <Link to={`/`} onClick={scrollToTop}>
            <button className="px-24 py-4 bg-gradient-to-r from-blue-400 to-indigo-700 rounded-md text-white text-sm focus:border-transparent">
              Read
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
