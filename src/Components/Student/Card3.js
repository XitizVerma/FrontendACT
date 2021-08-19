import React from "react";

function Card3() {
  return (
    <div>
      <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-4">
        <img
          class="object-cover w-full h-48 rounded-t-md"
          src="https://www.einfochips.com/blog/wp-content/uploads/2018/11/how-to-develop-machine-learning-applications-for-business-featured.jpg"
          alt="IMAGES"
        />
        <div class="px-4 py-4">
          <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            Machine Learning
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Introduction to Machine Learning
          </p>
        </div>

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Borrow
          </button>
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card3;
