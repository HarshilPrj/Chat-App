import React from "react";

const Reciver = () => {
    return (
        <>
            <div className="flex" id="reciver">
                {/* <p className="flex justify-center items-center h-10 w-10 text-white bg-[#d9d9d9] rounded-full text-xl font-bold">
                                    {selectedData[0]}
                                </p> */}
                <div className="flex flex-col bg-[#d9d9d9] p-3 m-2 rounded w-auto max-w-[28rem]">
                    {/* <p className="text-black font-bold pl-2">
                                        {selectedData}
                                    </p> */}
                    <p className="p-2 text-wrap">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <p className="flex self-end text-[11px] font-light">10:10 AM</p>
                </div>
            </div>
        </>
    );
};

export default Reciver;
