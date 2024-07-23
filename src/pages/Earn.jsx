import React from "react";
import Navigation from "../components/Navigation";
import Task from "../components/Task";

const Earn = () => {
  return (
    <div className="text-center min-h-screen py-8">
      <div className="mb-3">
        <h3 className="text-3xl">complete the mission</h3>
        <h3 className="text-3xl">earn the commission</h3>
      </div>

      <div className="mb-12">
        <p>
          Upon completing each task, you'll be instantly awarded points as a
          reward
        </p>
      </div>

      <section>
        <Task />
      </section>
    </div>
  );
};

export default Earn;
