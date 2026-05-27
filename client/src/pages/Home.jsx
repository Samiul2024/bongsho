import React, { useState } from "react";
import SEO from "../components/SEO";
import AddPersonForm from "../components/AddPersonForm";

import FamilyTree from "../components/FamilyTree";
import Footer from "../components/Footer";
import {
  useAuth,
} from "../context/AuthContext";
import Navbar from "../components/Navbar";


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
        title="
  Mollick Family Tree | Mollick Para Nowapara | Mollick Family
  "

        description="
  Explore the Mollick Family genealogy and family tree from Mollick Para, Nowapara through Mollick Family — an interactive Bengali ancestry and heritage platform.
  "

        keywords="
  Mollick family,
  Mollick para,
  Mollick bari,
  Mollick family tree,
  Mollick para nowapara,
  Nowapara family,
  Bengali genealogy,
  family tree Bangladesh,
  Mollick Family,
  ancestry platform,
  Mollick lineage,
  Mollick family Bangladesh,
  Mollick Mollick Family
  "

        image="https://Mollick Family.vercel.app/preview.png"

        url="https://Mollick Family.vercel.app/"
      />
      <div className="min-h-screen bg-slate-950 text-white p-6">

        <Navbar />
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-2">
            Mollick Family
          </h1>
          <h2 className="sr-only">
            Mollick Family Tree of Mollick Para Nowapara Bangladesh
          </h2>
          <p className="text-slate-300 max-w-3xl leading-relaxed mb-6">
            Mollick Family is an interactive digital family tree platform representing the
            Mollick Family of Mollick Para, Nowapara, Bangladesh. Explore ancestry,
            genealogy, lineage, and family relationships through a modern visual
            experience built for preserving family heritage across generations.
          </p>



          <div className="grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-1">

              {(
                user?.role === "admin" ||
                user?.role === "owner"
              ) && (
                  <AddPersonForm
                    refreshTree={refreshTree}
                  />
                )}

            </div>



            <div className="lg:col-span-2">

              <FamilyTree
                refreshKey={refreshKey}
              />

            </div>

          </div>

        </div>
        <div className="hidden md:block mt-16 text-slate-500 text-sm leading-7">

          <h2 className="text-xl font-semibold mb-3">
            Mollick Family Heritage
          </h2>

          <p>
            The Mollick Family of Mollick Para, Nowapara has a long family lineage
            connected through generations. Mollick Family helps preserve the genealogy,
            ancestry, and historical relationships of the Mollick Bari and related
            family members in Bangladesh.
          </p>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;