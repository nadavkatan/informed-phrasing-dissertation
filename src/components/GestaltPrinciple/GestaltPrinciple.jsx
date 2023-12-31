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
            <li
              key={`principle-param-${i}`}
              className="principle-param"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(param) }}
            />
          ))}
        </ul>
      )}
      {principle.figures.length > 0 &&
        principle.figures.map((figure, i) => (
          <div className="principle-figures" key={`principle-figures-${i}`}>
            <img src={figure.src} alt="figure" width={figure.width} />
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(figure.text),
              }}
            />
          </div>
        ))}
    </div>
  );
};
