import React from "react";

const OutputDetails = ({ outputDetails }) => {
    return (
        <div className="metrics-container mt-4 flex flex-col space-y-3 bg-gray-800 p-4 rounded-lg shadow-md text-gray-100">
            <p className="text-sm md:text-base">
                Status:{" "}
                <span className="font-semibold px-3 py-1 rounded-md bg-green-500 text-gray-100">
                    {outputDetails?.status?.description || "N/A"}
                </span>
            </p>
            <p className="text-sm md:text-base">
                Memory:{" "}
                <span className="font-semibold px-3 py-1 rounded-md bg-blue-500 text-gray-100">
                    {outputDetails?.memory || "N/A"}
                </span>
            </p>
            <p className="text-sm md:text-base">
                Time:{" "}
                <span className="font-semibold px-3 py-1 rounded-md bg-purple-500 text-gray-100">
                    {outputDetails?.time || "N/A"}
                </span>
            </p>
        </div>
    );
};

export default OutputDetails;
