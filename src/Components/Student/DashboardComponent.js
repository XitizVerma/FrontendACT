import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";


function DashboardComponent() {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const handleFirst = (e) => {
    e.preventDefault();
    setfirst(!first);
  };

  const handleSecond = (e) => {
    e.preventDefault();
    setsecond(!second);
  };

  const handleThird = (e) => {
    e.preventDefault();
    setthird(!third);
  };
  const popupDevOps=(e)=>{
    e.preventDefault();
    alert("Shareable Link is https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg")
  }
  const popupJournals=(e)=>{
    e.preventDefault();
    alert("Shareable Link is https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg")
  }
  const popupML=(e)=>{
    e.preventDefault();
    alert("Shareable Link is https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg")
  }
  return (
    <div>
      <div className="flex flex-wrap mb-20">
        <div className="md:w-1/2 p-20 bg-gradient-to-r from-blue-100">
          <p className="mb-5 text-xl uppercase tracking-widest">
            {" "}
            <span className="text-blue-400 text-5xl"></span> Student Dashboard
            <br />
          </p>
          <p className="mb-7 text-sm leading-snug text-black">
            Easily Manage Users, Books, Newsletters etc. from a Powerful
            Dashboard! Enter the Book/Journal/Newsletter:
          </p>
          <div>
            <input
              type="email"
              class="h-11 rounded-full bg-transparent border-blue-500 border w-2/4 outline-none"
            />
            <button class="bg-gradient-to-r from-blue-300 to-blue-500 h-11 w-20 rounded-full text-white -m-12">
              {" "}
              &#62;{" "}
            </button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <a target="_blank" rel="noreferrer"
                    href={"https://integratedonlineedigitallibraryact.s3.ap-south-1.amazonaws.com/DevOps+Roadmap.jpg"}>
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
                                  <button
                                    onClick={handleFirst}
                                    class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                                    Borrow
                                  </button>
                                  <button 
                                  onClick={popupDevOps} class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                                    Share
                                  </button>
                                </div>
                      </div>
              </a>
            </div>
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
                  <button
                    onClick={handleSecond}
                    class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                  >
                    Borrow
                  </button>
                  <button
                  OnClick={popupJournals} class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    Share
                  </button>
                </div>
              </div>
            </div>
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
                  <button
                    onClick={handleThird}
                    class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                  >
                    Borrow
                  </button>
                  <button
                  onClick={popupML} class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="md:text-4xl text-xl font-bold py-4">
            Borrowed Books
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div>{first ? <Card1 /> : null}</div>
            <div>{second ? <Card2 /> : null}</div>
            <div>{third ? <Card3 /> : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
