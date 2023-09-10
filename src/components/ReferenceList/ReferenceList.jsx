import React from "react";
import { List } from "../List/List";
import "./styles.css";

export const ReferenceList = ({ references }) => {
  return (
    <div className="reference-list-container">
      <div className="reference-list-title-container">
        <h2>Notes</h2>
      </div>
      <div className="references-container">
        <List items={references} ordered={true} referenceList />
      </div>
    </div>
  );
};
