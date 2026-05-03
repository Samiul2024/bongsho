import React from "react";

import {
  Handle,
  Position,
} from "reactflow";

const PersonNode = ({
  data,
}) => {

  return (
    <div
      onClick={() =>
        data.onPersonClick(data.person)
      }
      className="
      bg-slate-800
      border
      border-slate-600
      rounded-2xl
      p-4
      min-w-[220px]
      shadow-xl
      cursor-pointer
      hover:border-blue-500
      transition
      relative
      "
    >

      {/* TOP HANDLE */}
      <Handle
        type="target"
        position={Position.Top}
      />



      <div className="flex flex-col items-center">

        {/* AVATAR */}
        <div
          className="
          w-20
          h-20
          rounded-full
          bg-slate-600
          mb-3
          overflow-hidden
          border-4
          border-slate-700
          "
        />



        {/* NAME */}
        <h2 className="font-bold text-lg text-center">

          {data.name}

        </h2>



        {/* PROFESSION */}
        <p className="text-sm text-slate-300">

          {data.profession || "Unknown"}

        </p>



        {/* VILLAGE */}
        <p className="text-xs text-slate-400 mt-1">

          {data.village}

        </p>

      </div>



      {/* BOTTOM HANDLE */}
      <Handle
        type="source"
        position={Position.Bottom}
      />

    </div>
  );
};

export default PersonNode;