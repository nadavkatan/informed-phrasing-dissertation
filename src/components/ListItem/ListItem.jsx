import React from "react";
import DOMPurify from "dompurify";

export const ListItem = ({ item, id }) => {
  const sanitizedItem = DOMPurify.sanitize(item);

  return (
    <li
      className="list-item"
      id={id}
      dangerouslySetInnerHTML={{ __html: sanitizedItem }}
    />
  );
};
