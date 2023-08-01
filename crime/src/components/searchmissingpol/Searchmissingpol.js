import React, { useState } from "react";
import Table from "./Table";
import NavbarPolice from "../NavbarPolice";

const Searchmissingpol = () => {
  const [pdata, sdata] = useState({
    property: "name", // Default property to search
    value: ""
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
    const { property, value } = pdata;

    try {
      const response = await fetch(`http://localhost:5000/api/police/getmissing?${property}=${value}`);
      const data = await response.json();

      if (data.myMissingPerson.length > 0) {
        // User with the matching property value found
        setUsers(data.myMissingPerson);
      } else {
        // No user found with the matching property value, return all missing users
        setUsers(data.allMissingPersons);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="relative w-full h-screen backdrop-blur">
      <NavbarPolice />
      <div className='flex justify-center items-center '>
        <form className='max-w-[600px] w-full max-h-[900px] mx-auto bg-white p-8 mt-8 mb-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Search Missing Person</h2>
          <div className='flex flex-col mb-4'>
            <label>Value</label>
            <input className='border relative bg-gray-100 p-2' placeholder='Search by value' type="text" onChange={adddata} value={pdata.value} name="value" />
          </div>
          <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={fetchUserData}>Search</button>
        </form>
      </div>
      {users.length > 0 ? <Table data={users} /> : null}
    </div>
  );
};

export default Searchmissingpol;
