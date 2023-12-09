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
import { Drawer } from "../Drawer/Drawer";
import { useDrawerContext } from "../../context/Context";

export const Chapter = () => {
  const [chapterData, setChapterData] = useState({});
  const { id } = useParams();
  const { drawerOpen, toggleDrawer } = useDrawerContext();

  const screenHeight = window.innerHeight;

  useEffect(() => {
    const activeDrawer = window.localStorage.getItem("activeDrawer");
    if (activeDrawer) {
      toggleDrawer(JSON.parse(activeDrawer));
    }
  }, []);

  useEffect(() => {
    if (id) {
      const chapter = chapters.find((chapter) => chapter.chapter == id);
      setChapterData(chapter);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  return chapterData?.content?.length && chapterData.chapter !== 5 ? (
    <div className="page-wrapper">
      <div
        className="chapter-container"
        style={{ width: drawerOpen.open ? "60%" : "80%" }}
      >
        <h1 className="chapter-title">{chapterData.title}</h1>
        {chapterData.content.map((data, i) =>
          data.type === "heading-md" ? (
            <div
              className="heading-md"
              key={`chapter-${chapterData.chapter}-medium-heading-${i}`}
            >
              {" "}
              <h2
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.content),
                }}
              />
            </div>
          ) : data.type === "heading-sm" ? (
            <div
              className="heading-sm"
              key={`chapter-${chapterData.chapter}-small-heading-${i}`}
            >
              {" "}
              <h3
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.content),
                }}
              />
            </div>
          ) : data.type === "text" ? (
            <TextBox
              text={data.content}
              key={`chapter-${chapterData.chapter}-text-box-${i}`}
            />
          ) : data.type === "gestalt-principle" ? (
            <GestaltPrinciple
              principle={data}
              key={`chapter-${chapterData.chapter}-gestalt-principle-${i}`}
            />
          ) : data.type === "ordered-list" || data.type === "unordered-list" ? (
            <List
              ordered={data.type === "ordered-list"}
              items={data.items}
              key={`chapter-${chapterData.chapter}-list-${i}`}
            />
          ) : data.type === "MIPG-principle" ? (
            <MIPGPrinciple
              principle={data}
              key={`chapter-${chapterData.chapter}-mipg-principle-${i}`}
            />
          ) : data.type === "figure" ? (
            <div
              className="figure-wrapper"
              key={`chapter-${chapterData.chapter}-figure-${i}`}
            >
              <div className="figure-container">
                <img src={data.src} alt="figure" width={data.width} />
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.text),
                  }}
                />
              </div>
            </div>
          ) : data.type === "notes" ? (
            <ReferenceList
              references={data.content}
              key={`chapter-${chapterData.chapter}-notes-${i}`}
            />
          ) : data.type === "video" ? (
            <div className="video-container" key={data.title}>
              <iframe
                title={data.title}
                src={data.src}
                className="video"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              />
            </div>
          ) : null
        )}
      </div>
      {/* <div className="sidebar" style={{ top: screenHeight / 10 }}>
        <Navbar />
      </div> */}
      <Drawer
        isOpen={drawerOpen.open}
        title={drawerOpen.toggle}
        drawerItems={drawerOpen.items}
      />
    </div>
  ) : chapterData?.content?.length && chapterData.chapter === 5 ? (
    <div className="chapter-5-container">
      <Drawer
        isOpen={drawerOpen.open}
        title={drawerOpen.toggle}
        drawerItems={drawerOpen.items}
      />
      <iframe src={chapterData.content[0].src} title={chapterData.title} />
      {/* <div className="sidebar" style={{ top: screenHeight / 10 }}>
        <Navbar />
      </div> */}
    </div>
  ) : null;
};
