import React from "react";
import { MdDelete } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import Sender from "./messageBox/Sender";
import Reciver from "./messageBox/Reciver";
import Welcome from "./Welcome";

const WorkArea = ({ selectedData, setSelectedData }) => {
    return (
        <>
            {selectedData ? (
                <div className="flex flex-col flex-[0.7]">
                    {/* Name Header  */}
                    <div className="m-6 p-4 rounded-lg bg-white">
                        <div className="flex gap-4">
                            <div className="rounded-full text-[2rem] font-bold bg-[#d9d9d9]">
                                <p className="flex justify-center items-center h-14 w-14 text-white">
                                    {selectedData[0]}
                                </p>
                            </div>
                            <div className="mt-0">
                                <p className="font-bold">{selectedData}</p>
                                <p className="text-green-600">Online</p>
                            </div>
                            <div
                                className="flex self-center ml-auto cursor-pointer"
                                onClick={() => setSelectedData(null)}
                            >
                                <MdDelete className="text-2xl text-slate-700" />
                            </div>
                        </div>
                    </div>
                    {/* Chat Area  */}
                    <div className="bg-white rounded m-6 p-2 h-full mt-0 overflow-y-scroll mb-2">
                        <Reciver />
                        <Sender />
                        <Reciver />
                        <Sender />
                        <Reciver />
                        <Sender />
                        <Reciver />
                        <Sender />
                        <Reciver />
                        <Sender />
                        <Reciver />
                        <Sender />
                    </div>
                    {/* Message Input  */}
                    <div className="flex flex-col m-6 p-2 rounded-lg bg-white mt-0">
                        <div className="flex w-full p-2 gap-4 justify-between items-end">
                            <input
                                type="text"
                                placeholder="Type a Message..."
                                className="w-full outline-none"
                            />
                            <IoSend className="text-2xl text-green-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
            ) : (
                <Welcome />
            )}
        </>
    );
};

export default WorkArea;
