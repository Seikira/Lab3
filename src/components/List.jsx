import React from "react";
import Card from "./Card";

function List({ travels }) {
  return (
    <div className="list">
      {travels.map((travel) => (
        <Card key={travel.id} travel={travel} />
      ))}
    </div>
  );
}

export default List;
