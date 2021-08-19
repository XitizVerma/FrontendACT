import React from "react";

function Card2() {
  return (
    <div>
      <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-4">
        <img
          class="object-cover w-full h-48 rounded-t-md"
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80"
          alt="IMAGES"
        />
        <div class="px-4 py-4">
          <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            Journal
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            The Daily Journal
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

export default Card2;
