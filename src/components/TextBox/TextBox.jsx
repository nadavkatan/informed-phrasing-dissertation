import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import "./styles.css";

export const TextBox = ({ text }) => {
  const purifyConfig = {
    ADD_ATTR: ["target", "el"],
    ADD_TAGS: ["a"],
  };

  const sanitizedText = DOMPurify.sanitize(text, purifyConfig);

  const scrollToFootnote = (footnoteId) => {
    const footnoteElement = document.getElementById(footnoteId);
    if (footnoteElement) {
      footnoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const footnoteSpans = document.querySelectorAll(".footnote");

    footnoteSpans.forEach((span, i) => {
      span.addEventListener("click", () => {
        scrollToFootnote(`footnote${i + 1}`);
      });
    });
  });

  return (
    <div className="text-box">
      <p className="text" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </div>
  );
};
