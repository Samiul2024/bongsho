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
      className="bg-slate-800 border border-slate-600 rounded-xl p-4 min-w-[190px] shadow-lg cursor-pointer hover:border-blue-500 transition"
    >

      <Handle
        type="target"
        position={Position.Top}
      />

      <div className="flex flex-col items-center">

        <div className="w-16 h-16 rounded-full bg-slate-600 mb-3 overflow-hidden" />

        <h2 className="font-bold text-lg text-center">
          {data.name}
        </h2>

        <p className="text-sm text-slate-300">
          {data.profession || "Unknown"}
        </p>

        <p className="text-xs text-slate-400 mt-1">
          {data.village}
        </p>

      </div>

      <Handle
        type="source"
        position={Position.Bottom}
      />

    </div>
  );
};

export default PersonNode;