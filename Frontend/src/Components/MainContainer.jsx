import React, { useState } from "react";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";

const MainContainer = () => {
    const [selectedData, setSelectedData] = useState(null);

    const handleDataSelect = (data) => {
        setSelectedData(data);
    };

    return (
        <div className="flex bg-[#f4f5f8] h-[90vh] w-[90vw] rounded-lg">
            <Sidebar onDataSelect={handleDataSelect} />
            <WorkArea selectedData={selectedData} />
        </div>
    );
};

export default MainContainer;
