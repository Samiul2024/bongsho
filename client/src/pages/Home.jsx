import React, { useState } from "react";

import AddPersonForm from "../components/AddPersonForm";

import FamilyTree from "../components/FamilyTree";

const Home = () => {

  const [refreshKey, setRefreshKey] =
    useState(0);



  const refreshTree = () => {
    setRefreshKey((prev) => prev + 1);
  };



  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Bongsho
        </h1>

        <p className="text-slate-400 mb-8">
          Interactive Family Tree Platform
        </p>



        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-1">

            <AddPersonForm
              refreshTree={refreshTree}
            />

          </div>



          <div className="lg:col-span-2">

            <FamilyTree
              refreshKey={refreshKey}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;