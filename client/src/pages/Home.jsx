import React, { useState } from "react";
import SEO from "../components/SEO";
import AddPersonForm from "../components/AddPersonForm";

import FamilyTree from "../components/FamilyTree";
import Footer from "../components/Footer";
import {
  useAuth,
} from "../context/AuthContext";


const Home = () => {

  const { user } = useAuth();
  const [refreshKey, setRefreshKey] =
    useState(0);



  const refreshTree = () => {
    setRefreshKey((prev) => prev + 1);
  };



  return (
    <>
      <SEO
        title="Bongsho - Interactive Family Tree Platform"

        description="
    Explore genealogy, family lineage,
    ancestry, and heritage through
    Bongsho — an interactive Bengali
    family tree platform.
    "

        keywords="
    bongsho,
    family tree,
    genealogy,
    Bengali genealogy,
    ancestry,
    family lineage,
    Bangladeshi family tree,
    heritage platform,
    Mollick family,
    Nowapara
    "

        image="https://bongsho.vercel.app//preview.png"

        url="https://bongsho.vercel.app/"
      />
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

              {(
                user?.role === "admin" ||
                user?.role === "owner"
              ) && (
                  <AddPersonForm />
                )}

            </div>



            <div className="lg:col-span-2">

              <FamilyTree
                refreshKey={refreshKey}
              />

            </div>

          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;