import React, { useState } from "react";
import Table from "./Table";
import NavbarUser from "../NavbarUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Searchfir = () => {
  const [pdata, sdata] = useState({
    FIRno: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    sdata((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const [users, setUsers] = useState([]);

  const fetchUserData = async (e) => {
    e.preventDefault();
    const { FIRno } = pdata;

    try {
      const response = await fetch(`https://responcity.onrender.com/api/users/getfir?FIRno=${FIRno}`);
      const data = await response.json();

      if (data.length === 0) {
        // FIR number not found, show toast message
        toast.error("FIR number doesn't exist", {
          position: "top-center",
          autoClose: 3000, // Auto close after 3 seconds (3000 milliseconds)
        });
        return; // Exit the function without setting the users state
      }

      setUsers(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen backdrop-blur">
        <NavbarUser />
        <div className="flex justify-center items-center ">
          <form className="max-w-[500px] w-full max-h-[500px] mx-auto bg-white p-8 mt-8 mb-8">
            <h2 className="text-4xl font-bold text-center py-4">Search F.I.R.</h2>
            <div className="flex flex-col mb-4">
              <label>FIRno</label>
              <input
                className="border relative bg-gray-100 p-2"
                placeholder="Enter FIR no."
                type="text"
                onChange={adddata}
                value={pdata.FIRno}
                name="FIRno"
              />
            </div>
            <button
              className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
              onClick={fetchUserData}
            >
              Search
            </button>
          </form>
        </div>
        {users?.length !== 0 && <Table data={users} />}
        <ToastContainer />
      </div>
    </>
  );
};

export default Searchfir;
