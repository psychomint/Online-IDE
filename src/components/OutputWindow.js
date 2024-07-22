import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // Compilation error
      return (
        <pre className="px-4 py-2 text-xs text-red-400 bg-red-900 rounded-md">
          {outputDetails?.compile_output || "No compilation output"}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-4 py-2 text-xs text-green-400 bg-green-900 rounded-md">
          {outputDetails.stdout || "No standard output"}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-4 py-2 text-xs text-yellow-400 bg-yellow-900 rounded-md">
          Time Limit Exceeded
        </pre>
      );
    } else {
      return (
        <pre className="px-4 py-2 text-xs text-red-400 bg-red-900 rounded-md">
          {outputDetails?.stderr || "No error output"}
        </pre>
      );
    }
  };

  return (
    <div className="w-full h-64 md:h-80 bg-gray-800 rounded-lg shadow-md p-4 overflow-y-auto">
      <h1 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
        Output
      </h1>
      {outputDetails ? getOutput() : <p className="text-gray-400">No output available</p>}
    </div>
  );
};

export default OutputWindow;
