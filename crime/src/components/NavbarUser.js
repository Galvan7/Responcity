import React, { useState } from "react";

const NavbarUser = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 border-solid border-b-4 border-white sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-white to-green-400 transition-all">
      <div className=" items-center flex-shrink-0 text-white mr-6 text-3xl font-bold">
        <a href="/signin/users/login/verifyOtp/userspage" style={{ color: "black" }}>RESPONCITY</a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`${isExpanded ? `block  togglebar` : `hidden absolute right-16` } w-full block flex-grow lg:flex lg:items-center lg:w-auto `}>
        <div className="text-lg font-semibold lg:flex-grow ">
          <a href="/signin/users/reportacrime" style={{ color: "black" }} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0B2447] mr-5">
            Report Crime
          </a>
          <a href="/signin/users/searchfir" style={{ color: "black" }} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0B2447]  mr-5">
            F.I.R.
          </a>
          <a href="/signin/users/searchmissing" style={{ color: "black" }} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0B2447]  mr-5">
            Missing Person Bureau
          </a>
          <a href="/" style={{ color: "black" }} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0B2447]  mr-5">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
