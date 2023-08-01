import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarPolice from '../NavbarPolice';
// import Uploadimg from './Uploadimg';


export default function Firpage() {
    const navigate = useNavigate();

    const [logdata, setdata] = useState({
        State: "",
        District: "",
        PoliceStation: "",
        FIRno: "",
        Date: "",
        Acts: "",
        OccurenceDay: "",
        OccurenceDate: "",
        OccurenceTime: "",
        InformationReceivedDate: "",
        InformationReceivedDay: "",
        InformationReceivedTime: "",
        DiaryReferenceEntryNo: "",
        DiaryReferenceTime: "",
        DirectionAndDistancefromPS: "",
        BeatNo: "",
        Address: "",
        ComplainantName: "",
        ComplainantFatherorHusbandName: "",
        ComplainantDateOfBirth: "",
        ComplainantNationality: "",
        ComplainantOccupation: "",
        ComplainantPassportNo: "",
        ComplainantDateofIssue: "",
        ComplainantPlaceOfIssue: "",
        ComplainantAddress: "",
        DetailsOfSuspected: "",
        cadre:"",
        ReasonsforDelay: "",
        ParticularsOfPropertiesStolenInvolved: "",

    })
    const adddata = (e) => {
        const { name, value } = e.target;
        setdata(() => {
            return {
                ...logdata,
                [name]: value
            }

        })
    }
    const senddata = async (e) => {

        e.preventDefault();
        console.log("I am here")
        const {State, District, PoliceStation, FIRno, Date, Acts, OccurenceDay, OccurenceDate, OccurenceTime, InformationReceivedDate, InformationReceivedDay, InformationReceivedTime, DiaryReferenceEntryNo, DiaryReferenceTime, DirectionAndDistancefromPS, BeatNo, Address, ComplainantName, ComplainantFatherorHusbandName, ComplainantDateOfBirth, ComplainantNationality, ComplainantOccupation, ComplainantPassportNo, ComplainantDateofIssue, ComplainantPlaceOfIssue, ComplainantAddress, DetailsOfSuspected, cadre, ReasonsforDelay, ParticularsOfPropertiesStolenInvolved } = logdata;
        const res = await fetch("http://localhost:5000/api/police/registerfir", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                State, District, PoliceStation, FIRno, Date, Acts, OccurenceDay, OccurenceDate, OccurenceTime, InformationReceivedDate, InformationReceivedDay, InformationReceivedTime, DiaryReferenceEntryNo, DiaryReferenceTime, DirectionAndDistancefromPS, BeatNo, Address, ComplainantName, ComplainantFatherorHusbandName, ComplainantDateOfBirth, ComplainantNationality, ComplainantOccupation, ComplainantPassportNo, ComplainantDateofIssue, ComplainantPlaceOfIssue, ComplainantAddress, DetailsOfSuspected, cadre, ReasonsforDelay, ParticularsOfPropertiesStolenInvolved,
            })
        })
        const data = await res.json();
        console.log(data);
        localStorage.setItem("firdata", JSON.stringify(data));
        if (res.status === 400 || !data) {
            console.log("invalid details");
            toast.warn("invalid details", {
                position: 'top-center'
            })
        } else {
            console.log("data valid")
            // setAccount(data)
            toast.success("login done successfully", {
                position: "top-center"
            })
            setdata({
                ...logdata,
                State: "",
                District: "",
                PoliceStation: "",
                FIRno: "",
                Date: "",
                Acts: "",
                OccurenceDay: "",
                OccurenceDate: "",
                OccurenceTime: "",
                InformationReceivedDate: "",
                InformationReceivedDay: "",
                InformationReceivedTime: "",
                DiaryReferenceEntryNo: "",
                DiaryReferenceTime: "",
                DirectionAndDistancefromPS: "",
                BeatNo: "",
                Address: "",
                ComplainantName: "",
                ComplainantFatherorHusbandName: "",
                ComplainantDateOfBirth: "",
                ComplainantNationality: "",
                ComplainantOccupation: "",
                ComplainantPassportNo: "",
                ComplainantDateofIssue: "",
                ComplainantPlaceOfIssue: "",
                ComplainantAddress: "",
                DetailsOfSuspected: "",
                cadre:"",
                ReasonsforDelay: "",
                ParticularsOfPropertiesStolenInvolved: "",
            });
            toast.success("FIR submitted successfully", {
                position: "top-center",
                autoClose: 2000, // Auto close after 3 seconds (3000 milliseconds)
            });
            setTimeout(() => {
                navigate("/signin/police/login/policepage");
              }, 2000);
        }
    }
    return (
        <div className='relative w-full h-full backdrop-blur-sm'>
            {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src="" alt="/" /> */}
            <NavbarPolice/>
        


            <div className='flex flex-row justify-center items-center h-full '>
            <div className='flex'>
                <form className='max-w-[1020px] w-full max-h-[fit-content] mx-auto bg-white p-8 mt-8 mb-8 firformclass'>
                
                    <h2 className='text-4xl font-bold text-center py-4'>F.I.R.</h2>
                    
                    <div className='flex flex-row firform'>
                        <div className='flex flex-col mr-12'>
                            <div className='flex flex-col mb-2 w-72'>
                                <label>State</label>
                                <input className='border relative bg-gray-100 p-2 ' placeholder='State' type="text" onChange={adddata} value={logdata.State} name="State" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>District</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='District' type="text" onChange={adddata} value={logdata.District} name="District" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>PoliceStation</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='PoliceStation' type="text" onChange={adddata} value={logdata.PoliceStation} name="PoliceStation" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>FIRno</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='FIRno' type="text" onChange={adddata} value={logdata.FIRno} name="FIRno" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>Date</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='Date' type="text" onChange={adddata} value={logdata.Date} name="Date" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>Acts</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='Acts' type="text" onChange={adddata} value={logdata.Acts} name="Acts" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>OccurenceDay</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='OccurenceDay' type="text" onChange={adddata} value={logdata.OccurenceDay} name="OccurenceDay" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>OccurenceDate</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='OccurenceDate' type="text" onChange={adddata} value={logdata.OccurenceDate} name="OccurenceDate" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>OccurenceTime</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='OccurenceTime' type="text" onChange={adddata} value={logdata.OccurenceTime} name="OccurenceTime" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>InformationReceivedDate</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='InformationReceivedDate' type="text" onChange={adddata} value={logdata.InformationReceivedDate} name="InformationReceivedDate" />
                            </div>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <div className='flex flex-col mb-2 w-72'>
                                <label>InformationReceivedDay</label>
                                <input className='border relative bg-gray-100 p-2 ' placeholder='InformationReceivedDay' type="text" onChange={adddata} value={logdata.InformationReceivedDay} name="InformationReceivedDay" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>InformationReceivedTime</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='InformationReceivedTime' type="text" onChange={adddata} value={logdata.InformationReceivedTime} name="InformationReceivedTime" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>DiaryReferenceEntryNo</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='DiaryReferenceEntryNo' type="text" onChange={adddata} value={logdata.DiaryReferenceEntryNo} name="DiaryReferenceEntryNo" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>DiaryReferenceTime</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='DiaryReferenceTime' type="text" onChange={adddata} value={logdata.DiaryReferenceTime} name="DiaryReferenceTime" />
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label>DirectionAndDistancefromPS</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='DirectionAndDistancefromPS' type="text" onChange={adddata} value={logdata.DirectionAndDistancefromPS} name="DirectionAndDistancefromPS" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>BeatNo</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='BeatNo' type="text" onChange={adddata} value={logdata.BeatNo} name="BeatNo" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>Address</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='Address' type="text" onChange={adddata} value={logdata.Address} name="Address" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantName</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantName' type="text" onChange={adddata} value={logdata.ComplainantName} name="ComplainantName" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantFatherorHusbandName</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantFatherorHusbandName' type="text" onChange={adddata} value={logdata.ComplainantFatherorHusbandName} name="ComplainantFatherorHusbandName" />
                            </div>


                            <div className='flex flex-col mb-2'>
                                <label>ComplainantDateOfBirth</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantDateOfBirth' type="text" onChange={adddata} value={logdata.ComplainantDateOfBirth} name="ComplainantDateOfBirth" />
                            </div>
                        </div>
                        <div className='flex flex-col mr-12'>
                            <div className='flex flex-col mb-2 w-72'>
                                <label>ComplainantNationality</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantNationality' type="text" onChange={adddata} value={logdata.ComplainantNationality} name="ComplainantNationality" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantOccupation</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantOccupation' type="text" onChange={adddata} value={logdata.ComplainantOccupation} name="ComplainantOccupation" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantPassportNo</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantPassportNo' type="text" onChange={adddata} value={logdata.ComplainantPassportNo} name="ComplainantPassportNo" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantDateofIssue</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantDateofIssue' type="text" onChange={adddata} value={logdata.ComplainantDateofIssue} name="ComplainantDateofIssue" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantPlaceofIssue</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantPlaceOfIssue' type="text" onChange={adddata} value={logdata.ComplainantPlaceOfIssue} name="ComplainantPlaceOfIssue" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ComplainantAddress</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ComplainantAddress' type="text" onChange={adddata} value={logdata.ComplainantAddress} name="ComplainantAddress" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>DetailsOfSuspected</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='DetailsOfSuspected' type="text" onChange={adddata} value={logdata.DetailsOfSuspected} name="DetailsOfSuspected" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ReasonsforDelay</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ReasonsforDelay' type="text" onChange={adddata} value={logdata.ReasonsforDelay} name="ReasonsforDelay" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>ParticularsOfPropertiesStolenInvolved</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='ParticularsOfPropertiesStolenInvolved' type="text" onChange={adddata} value={logdata.ParticularsOfPropertiesStolenInvolved} name="ParticularsOfPropertiesStolenInvolved" />
                            </div>

                            <div className='flex flex-col mb-2'>
                                <label>Cadre</label>
                                <input className='border relative bg-gray-100 p-2' placeholder='Cadre' type="text" onChange={adddata} value={logdata.cadre} name="cadre" />
                            </div>
                        </div>
                    </div>
                    
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 text-white' onClick={senddata}>Submit</button>
                    
                </form>
                </div>
        
            </div>
            <ToastContainer />
        </div>
    );
}