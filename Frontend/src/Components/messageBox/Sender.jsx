import React from "react";

const Sender = () => {
    return (
        <>
            <div id="sender" className="flex justify-end">
                <div className="flex flex-col bg-[#63d7b0] p-3 m-2 rounded w-auto max-w-[28rem]">
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

export default Sender;
