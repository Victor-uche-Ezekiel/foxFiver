import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <div className="h-screen text-center py-8">
        <header className="max-w-screen-md w-full mx-auto mb-40">
          <h3 className="border border-blue-500 rounded-md p-3 mb-2">
            join or create a squad
          </h3>
          <p className="mb-2">silver league</p>
          <h1 className="text-5xl">🦊577199</h1>
        </header>

        <main className="max-w-screen-md mx-auto mb-40">
          <span className="text-9xl">🦊</span>
        </main>

        <section className="max-w-screen-md w-full mx-auto p-3 rounded-lg bg-[#636060]">
          <div className="bg-blue-600 h-4 rounded-lg mb-3"></div>
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-[0.8rem]">time to crack</p>
              <h3 className="text-3xl">05:33:14</h3>
            </div>
            <div className="">
              <p className="text-[0.8rem]">$cfi per hour</p>
              <h3 className="text-3xl">300/h</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
