import React from "react";
import "./styles.css";
import { ListItem } from "../ListItem/ListItem";

export const List = ({ ordered, referenceList, items }) => {
  return (
    <div className="list">
      {ordered ? (
        <ol>
          {items.length > 0 &&
            items.map((item, i) => (
              <ListItem
                key={item}
                item={item}
                id={referenceList ? `footnote${i + 1}` : null}
              />
            ))}
        </ol>
      ) : (
        <ul>
          {items.length > 0 &&
            items.map((item) => <ListItem key={item} item={item} />)}
        </ul>
      )}
    </div>
  );
};
