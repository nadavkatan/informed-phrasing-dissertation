import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./styles.css";

export const ListItem = ({ item, id }) => {
  const purifyConfig = {
    ADD_ATTR: ["target", "el"],
    ADD_TAGS: ["a"],
  };
  const sanitizedItem = DOMPurify.sanitize(item, purifyConfig);
  const [nestedItem, setNestedItem] = useState(false);

  useEffect(() => {
    if (item.includes("---")) {
      setNestedItem(true);
    }
  }, []);

  return (
    <li
      className={`${nestedItem ? "nested-item" : "list-item"}`}
      id={id}
      dangerouslySetInnerHTML={{ __html: sanitizedItem }}
    />
  );
};
