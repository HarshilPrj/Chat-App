import React from "react";
import { MdAddToPhotos } from "react-icons/md";

const CreateGroup = () => {
    return (
        <>
            <div className="flex-[0.7] self-center p-6 bg-white rounded-lg m-4 flex justify-between gap-6">
                <input
                    type="text"
                    placeholder="Enter The Group Name"
                    className="w-full outline-none"
                />
                <MdAddToPhotos className="text-2xl text-slate-700 cursor-pointer" />
            </div>
        </>
    );
};

export default CreateGroup;
