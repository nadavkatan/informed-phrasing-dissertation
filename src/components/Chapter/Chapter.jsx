import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextBox } from "../TextBox/TextBox";
import { GestaltPrinciple } from "../GestaltPrinciple/GestaltPrinciple";
import { MIPGPrinciple } from "../MIPGPrinciple/MIPGPrinciple";
import { List } from "../List/List";
import { Navbar } from "../Navbar/Navbar";
import { chapters } from "../../data/chapters";
import { ReferenceList } from "../ReferenceList/ReferenceList";
import DOMPurify from "dompurify";
import "./styles.css";

export const Chapter = () => {
  const [chapterData, setChapterData] = useState({});
  const { id } = useParams();

  const screenHeight = window.innerHeight;

  useEffect(() => {
    if (id) {
      const chapter = chapters.find(
        (chapter) => chapter.chapter === parseInt(id)
      );
      setChapterData(chapter);
    }
  }, [id]);
  return chapterData?.content?.length && chapterData.chapter !== 6 ? (
    <div className="page-wrapper">
      <div className="chapter-container">
        <h1 className="chapter-title">{chapterData.title}</h1>
        {chapterData.content.map((data) =>
          data.type === "heading-md" ? (
            <div className="heading-md">
              {" "}
              <h2
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.content),
                }}
              />
            </div>
          ) : data.type === "heading-sm" ? (
            <div className="heading-sm">
              {" "}
              <h3
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.content),
                }}
              />
            </div>
          ) : data.type === "text" ? (
            <TextBox text={data.content} />
          ) : data.type === "gestalt-principle" ? (
            <GestaltPrinciple principle={data} />
          ) : data.type === "ordered-list" || data.type === "unordered-list" ? (
            <List ordered={data.type === "ordered-list"} items={data.items} />
          ) : data.type === "MIPG-principle" ? (
            <MIPGPrinciple principle={data} />
          ) : data.type === "figure" ? (
            <div className="figure-wrapper">
              <div className="figure-container">
                <img src={data.src} alt="figure" />
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.text),
                  }}
                />
              </div>
            </div>
          ) : data.type === "notes" ? (
            <ReferenceList references={data.content} />
          ) : null
        )}
      </div>
      <div className="sidebar" style={{ top: screenHeight / 5 }}>
        <Navbar />
      </div>
    </div>
  ) : chapterData.chapter === 6 ? (
    <div className="chapter-6-container">
      <iframe src={chapterData.content[0].src} title={chapterData.title} />
      <div className="sidebar" style={{ top: screenHeight / 5 }}>
        <Navbar />
      </div>
    </div>
  ) : (
    <div>Chapter {id}</div>
  );
};
