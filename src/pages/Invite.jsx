import React from "react";
import Friend from "../components/Friend";

const Invite = () => {
  return (
    <div className="text-center min-h-screen py-8">
      <section className="mb-12">
        <h3>invite friends!</h3>
        <p>you and your friend will receive bonouses</p>
      </section>

      <section>
        <div className="mb-5 bg-[#636060] py-4 rounded-2xl hover:cursor-pointer">
          <h3 className="uppercase text-white tracking-widest">
            invite friends
          </h3>
        </div>

        <div className="mb-3 text-start flex justify-between">
          <h3>your friends</h3>
          <span>🔃</span>
        </div>
        <Friend />
      </section>
    </div>
  );
};

export default Invite;
