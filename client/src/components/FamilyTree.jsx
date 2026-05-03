import React, {
  useEffect,
  useState,
  useCallback,
} from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import API from "../api/personApi";

import PersonNode from "./PersonNode";

import PersonModal from "./PersonModal";


// OUTSIDE COMPONENT
const nodeTypes = {
  personNode: PersonNode,
};


const FamilyTree = ({
  refreshKey,
}) => {

  const [nodes, setNodes] = useState([]);

  const [edges, setEdges] = useState([]);

  const [selectedPerson, setSelectedPerson] =
    useState(null);



  const fetchPeople = useCallback(async () => {

    try {

      const res = await API.get("/persons");

      const people = res.data.data;



      // CREATE NODES
      const generatedNodes = people.map(
        (person, index) => ({
          id: person._id,

          type: "personNode",

          position: {
            x: (index % 4) * 260,
            y: Math.floor(index / 4) * 220,
          },

          data: {
            person,

            name: `${person.firstName} ${person.lastName}`,

            profession: person.profession,

            village: person.village,

            photo: person.photo,

            onPersonClick: (personData) =>
              setSelectedPerson(personData),
          },
        })
      );



      // CREATE EDGES
      const generatedEdges = [];



      people.forEach((person) => {

        // FATHER EDGE
        if (person.father?._id) {

          generatedEdges.push({
            id: `father-${person.father._id}-${person._id}`,

            source: person.father._id,

            target: person._id,

            animated: true,
          });
        }



        // MOTHER EDGE
        if (person.mother?._id) {

          generatedEdges.push({
            id: `mother-${person.mother._id}-${person._id}`,

            source: person.mother._id,

            target: person._id,

            animated: true,

            style: {
              strokeDasharray: "5 5",
            },
          });
        }
      });



      setNodes(generatedNodes);

      setEdges(generatedEdges);

    } catch (error) {

      console.log(error);
    }

  }, []);



  useEffect(() => {
    fetchPeople();
  }, [fetchPeople, refreshKey]);



  return (
    <>
      <div className="w-full h-[85vh] bg-slate-950 rounded-2xl overflow-hidden border border-slate-700">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
        >

          <Background />

          <Controls />

          <MiniMap />

        </ReactFlow>

      </div>



      <PersonModal
        selectedPerson={selectedPerson}
        closeModal={() =>
          setSelectedPerson(null)
        }
        refreshTree={fetchPeople}
      />
    </>
  );
};

export default FamilyTree;