import React from "react";
import ImageUpload from "./ImageUpload";
import ImageUpload2 from "./ImageUpload2";
import ImageUpload3 from "./ImageUpload3";
function AdminComponent() {
  return (
    <div>
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 p-20 bg-gradient-to-r from-blue-100">
          <p className="mb-5 text-xl uppercase tracking-widest">
            {" "}
            <span className="text-blue-400 text-5xl">Admin Portal</span> <br />
            <br />
            <br />
            Librarian Dashboard <br />
          </p>
          <p className="mb-7 text-sm leading-snug text-black">
            Easily Manage Users, Books, Newsletters etc. from a Powerful
            Dashboard! Enter the Book/Journal/Newsletter:
          </p>
          <a href={"http://mbaactlibrary.s3.amazonaws.com/"}>
          <button class="px-4 py-2 mb-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
          Click for MBA books List
          </button>
          </a>
          <a href={"http://computerscienceactlibrary.s3.amazonaws.com/"}>
          <button class="px-4 py-2 mb-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
            Click for Computer Science Books List
          </button>
          </a>
          <a href={"http://artsactlibrary.s3.amazonaws.com/"}>
          <button class="px-4 py-2 mb-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
          Click for Arts Books List
          </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <ImageUpload/>
          <ImageUpload2/>
          <ImageUpload3/>
        </div>
      </div>
    </div>
  );
}

export default AdminComponent;
