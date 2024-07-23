import React from "react";

const Task = () => {
  return (
    <div className="rounded-lg mb-3 bg-[#636060] py-3 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <p>🦊</p>
        <div className="flex flex-col text-start">
          <span>crypto security</span>
          <span>100000</span>
        </div>
      </div>
      <p>✔</p>
    </div>
  );
};

export default Task;
