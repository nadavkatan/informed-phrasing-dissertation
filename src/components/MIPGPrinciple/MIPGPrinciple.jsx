import React from "react";
import DOMPurify from "dompurify";
import "./styles.css";

export const MIPGPrinciple = ({ principle }) => {
  const sanitizedPrinciple = DOMPurify.sanitize(principle.principle);
  return (
    <div className="mipg-principle-container">
      <h3 className="mipg-principle">{principle.principle}</h3>
      <div className="mipg-principle-components">
        {principle.components.length > 0 &&
          principle.components.map((component, i) =>
            i === principle.components.length - 1 ? (
              <div key={`principle-component-${i}`} className="mipg-component">
                <p>{component}</p>
              </div>
            ) : (
              <div key={`principle-component-${i}`} className="mipg-component">
                <p>{component}</p>
                <p className="connecting-component">And,</p>
              </div>
            )
          )}
      </div>
      {principle.videos.length > 0 && (
        <div className="principle-videos">
          {principle.videos.map((video, i) => (
            <iframe
              key={`principle-video-${i}`}
              src={video.src}
              title={video.src}
            />
          ))}
        </div>
      )}
      {principle.figures.length > 0 && (
        <div className="principle-figures">
          {principle.figures.map((figure, i) => (
            <img
              key={`principle-figure-${i}`}
              src={figure.src}
              alt=""
              width={figure.width}
            />
          ))}
        </div>
      )}
    </div>
  );
};
