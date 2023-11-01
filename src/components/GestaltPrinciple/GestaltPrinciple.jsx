import React from "react";
import DOMPurify from "dompurify";
import "./styles.css";

export const GestaltPrinciple = ({ principle }) => {
  const sanitizedPrinciple = DOMPurify.sanitize(principle.principle);
  return (
    <div className="principle-container">
      <p
        className="principle"
        dangerouslySetInnerHTML={{ __html: sanitizedPrinciple }}
      />
      {principle.parameters.length > 0 && (
        <ul className="principle-params-list">
          {principle.parameters.map((param, i) => (
            <li key={i} className="principle-param">
              {param}
            </li>
          ))}
        </ul>
      )}
      {principle.figures.length > 0 &&
        principle.figures.map((figure, i) => (
          <div className="principle-figures">
            <img src={figure.src} alt="figure" width={figure.width} />
            <p>{figure.text}</p>
          </div>
        ))}
    </div>
  );
};
