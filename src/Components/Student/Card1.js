import React from "react";

function Card1() {
  
  return (
    <div>
      <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-4">
        <img
          class="object-cover w-full h-48 rounded-t-md"
          alt ="DevOps" src="https://azurecomcdn.azureedge.net/cvt-c44be12aeff87cc0fdbb9696f05719779a17cfe91cb62dc62f5939aa7426cc77/images/page/services/devops/hero-images/index-hero.jpg"
        />
        <div class="px-4 py-4">
          <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            DevOps
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Development and Operations Essentials
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

export default Card1;
