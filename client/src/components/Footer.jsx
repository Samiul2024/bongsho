import React from "react";

import {
  Globe,
  Heart,
  TreePine,
  Link,
  User,
} from "lucide-react";

const Footer = () => {

  return (

    <footer
      className="
      mt-14
      border-t
      border-slate-800
      bg-slate-950
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        "
      >

        {/* TOP */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
          gap-10
          "
        >

          {/* LEFT */}
          <div className="max-w-md">

            <div className="flex items-center gap-3">

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-blue-600/20
                flex
                items-center
                justify-center
                border
                border-blue-500/20
                "
              >

                <TreePine className="w-6 h-6 text-blue-400" />

              </div>

              <div>

                <h2
                  className="
                  text-2xl
                  font-bold
                  text-white
                  "
                >
                  Bongsho
                </h2>

                <p
                  className="
                  text-sm
                  text-slate-400
                  "
                >
                  Interactive Family Tree Platform
                </p>

              </div>

            </div>



            <p
              className="
              mt-5
              text-slate-400
              leading-relaxed
              "
            >

              Bongsho is a modern genealogy
              platform designed to preserve
              family lineage, ancestry,
              heritage, and generational
              history through interactive
              visualization and scalable
              digital architecture.

            </p>

          </div>



          {/* CENTER */}
          <div>

            <h3
              className="
              text-white
              font-semibold
              mb-4
              text-lg
              "
            >
              Developer
            </h3>

            <div className="space-y-3">

              {/* PORTFOLIO */}
              <a
                href="https://mdsamiullahossen.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                text-slate-400
                hover:text-white
                transition
                "
              >

                <Globe className="w-5 h-5" />

                <span>
                  Portfolio Website
                </span>

              </a>



              {/* GITHUB */}
              <a
                href="https://github.com/Samiul2024"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                text-slate-400
                hover:text-white
                transition
                "
              >

                <Link className="w-5 h-5" />

                <span>
                  GitHub Profile
                </span>

              </a>



              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/md-samiulla-hossen"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                text-slate-400
                hover:text-white
                transition
                "
              >

                <User className="w-5 h-5" />

                <span>
                  LinkedIn
                </span>

              </a>

            </div>

          </div>



          {/* RIGHT */}
          <div className="max-w-sm">

            <h3
              className="
              text-white
              font-semibold
              mb-4
              text-lg
              "
            >
              Project Vision
            </h3>

            <p
              className="
              text-slate-400
              leading-relaxed
              "
            >

              Building a digital archive for
              Bengali family heritage,
              genealogy, and generational
              storytelling with MERN Stack,
              graph visualization, and
              AI-assisted engineering.

            </p>

          </div>

        </div>



        {/* DIVIDER */}
        <div
          className="
          border-t
          border-slate-800
          my-8
          "
        />



        {/* BOTTOM */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-sm
          "
        >

          <p className="text-slate-500">

            © {new Date().getFullYear()}
            {" "}
            Bongsho.
            All rights reserved.

          </p>



          <div
            className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            text-slate-500
            "
          >

            <span>
              Crafted by
            </span>

            <span
              className="
              text-slate-300
              font-medium
              "
            >
              MD. Samiulla Hossen
            </span>

            <Heart
              className="
              w-4
              h-4
              text-red-400
              "
            />

            <span>
              using
            </span>

            <span
              className="
              text-blue-400
              "
            >
              MERN Stack
            </span>

            <span>
              &
            </span>

            <span
              className="
              text-emerald-400
              "
            >
              AI-assisted engineering
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;