import React from "react";

const WorkArea = ({ selectedData }) => {
    return (
        <>
            {selectedData ? (
                <div className="flex flex-col flex-[0.7]">
                    <div className="m-6 p-4 rounded-lg bg-white">
                        <div className="flex gap-4">
                            <div className="rounded-full text-[2rem] font-bold bg-[#d9d9d9]">
                                <p className="flex justify-center items-center h-14 w-14 text-white">
                                    {selectedData[0]}
                                </p>
                            </div>
                            <div className="mt-0">
                                <p className="font-bold">{selectedData}</p>
                                <p className="text-slate-500">Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex m-6 p-4 rounded-lg bg-white h-full overflow-y-scroll mt-0"></div>
                </div>
            ) : (
                <div className="flex-[0.7] flex justify-center items-center">
                    <img src="./icons/live-chat.png" alt="" />
                </div>
            )}
        </>
    );
};

export default WorkArea;
