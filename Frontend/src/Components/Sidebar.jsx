import React from "react";
import { FaRegUserCircle, FaRegMoon } from "react-icons/fa";
import { AiOutlineUsergroupAdd, AiOutlineUserAdd } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const Sidebar = ({ onDataSelect }) => {
    let data = [
        "Harshil",
        "Bhautik",
        "Bhavik",
        "Mihir",
        "Karan",
        "Keyur",
        "Jaydeep",
        "Mihil",
        "Avesh",
        "Mohmad Margub",
    ];

    return (
        <div className="flex flex-[0.3] flex-col">
            {/* icon div */}
            <div className="flex justify-between bg-white m-6 p-4 rounded-lg">
                <div className="cursor-pointer">
                    <FaRegUserCircle className="text-2xl text-slate-700" />
                </div>
                <div className="flex gap-4 cursor-pointer">
                    <AiOutlineUserAdd className="text-2xl text-slate-700" />
                    <AiOutlineUsergroupAdd className="text-2xl text-slate-700" />
                    <FiPlusCircle className="text-2xl text-slate-700" />
                    <FaRegMoon className="text-2xl text-slate-700" />
                </div>
            </div>
            {/* search div */}
            <div className="flex gap-3 bg-white m-6 mt-0 p-3 rounded-lg border-none">
                <IoIosSearch className="text-2xl text-slate-700" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none grow"
                />
            </div>
            {/* list div */}
            <div className="flex flex-col h-full overflow-y-scroll bg-white m-6 p-3 rounded-lg mt-0">
                {data.map((item, index) => {
                    return (
                        <div
                            className="flex gap-4 p-4 cursor-pointer"
                            onClick={() => onDataSelect(item)}
                        >
                            <div className="rounded-full text-[2rem] font-bold bg-[#d9d9d9]">
                                {/* <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8cTn1-RRcQ_T4-cf40vYi4sjFEADIdog1TqwvXO3kw&s"
                                    alt="icon"
                                    className="text-sm h-10 w-10"
                                /> */}
                                <p className="flex justify-center items-center h-14 w-14 text-white">
                                    {item[0]}
                                </p>
                            </div>
                            <div className="mt-0">
                                <p className="font-bold">{item}</p>
                                <p className="text-slate-500">How Are You ?</p>
                            </div>
                            <p className="flex items-end ml-auto text-slate-500 right-0">
                                {`${index === 0 ? "Online" : `${index} hour ago`}`}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
