import React, {
  useEffect,
  useState,
  useCallback,
} from "react";

import dagre from "dagre";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import API from "../api/personApi";

import PersonNode from "./PersonNode";

import PersonModal from "./PersonModal";

import {
  useAuth,
} from "../context/AuthContext";


// CUSTOM NODE TYPES
const nodeTypes = {
  personNode: PersonNode,
};


// DAGRE GRAPH
const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(() => ({}));


// NODE SIZE
const nodeWidth = 220;
const nodeHeight = 140;



// AUTO LAYOUT FUNCTION
const getLayoutedElements = (
  nodes,
  edges
) => {

  dagreGraph.setGraph({
    rankdir: "TB",
    nodesep: 80,
    ranksep: 120,
  });

  nodes.forEach((node) => {

    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  edges.forEach((edge) => {

    dagreGraph.setEdge(
      edge.source,
      edge.target
    );
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map(
    (node) => {

      const nodeWithPosition =
        dagreGraph.node(node.id);

      return {
        ...node,

        position: {
          x:
            nodeWithPosition.x -
            nodeWidth / 2,

          y:
            nodeWithPosition.y -
            nodeHeight / 2,
        },
      };
    }
  );

  return {
    nodes: layoutedNodes,
    edges,
  };
};




const FamilyTree = ({
  refreshKey,
}) => {

  const { user } = useAuth();

  const [nodes, setNodes] = useState([]);

  const [edges, setEdges] = useState([]);

  const [selectedPerson, setSelectedPerson] =
    useState(null);



  const canEdit =
    user?.role === "owner" ||
    user?.role === "admin";



  const fetchPeople = useCallback(async () => {

    try {

      const res = await API.get("/persons");

      const people = res.data.data;



      // CREATE NODES
      const generatedNodes = people.map(
        (person) => ({
          id: person._id,

          type: "personNode",

          position: {
            x: 0,
            y: 0,
          },

          data: {
            person,

            name: `${person.firstName} ${person.lastName}`,

            profession: person.profession,

            village: person.village,

            photo: person.photo,

            canEdit,

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

            type: "smoothstep",

            animated: false,
          });
        }

        // MOTHER EDGE
        if (person.mother?._id) {

          generatedEdges.push({
            id: `mother-${person.mother._id}-${person._id}`,

            source: person.mother._id,

            target: person._id,

            type: "smoothstep",

            style: {
              strokeDasharray: "5 5",
            },
          });
        }
      });



      // AUTO LAYOUT
      const layouted =
        getLayoutedElements(
          generatedNodes,
          generatedEdges
        );



      setNodes(layouted.nodes);

      setEdges(layouted.edges);

    } catch (error) {

      console.log(error);
    }

  }, [canEdit]);




  useEffect(() => {
    fetchPeople();
  }, [fetchPeople, refreshKey]);




  return (
    <>
      <div
        className="
        w-full
        h-[78vh]
        md:h-[85vh]
        bg-slate-950
        rounded-2xl
        overflow-hidden
        border
        border-slate-700
        "
      >

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView

          fitViewOptions={{
            padding: 0.35,
          }}

          minZoom={0.2}
          maxZoom={1.5}
          defaultZoom={0.55}

          panOnScroll
          panOnDrag

          proOptions={{
            hideAttribution: true,
          }}
        >

          <Background />

          <Controls />

          <MiniMap />

        </ReactFlow>

      </div>



      {canEdit && (
        <PersonModal
          selectedPerson={selectedPerson}
          closeModal={() =>
            setSelectedPerson(null)
          }
          refreshTree={fetchPeople}
        />
      )}
    </>
  );
};

export default FamilyTree;