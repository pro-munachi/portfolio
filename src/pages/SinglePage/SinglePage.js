import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SingleStyle } from "./style";
import all from "../../assets/File/AllList";
import Contact from "../../components/Contact/Contact";

const SinglePage = () => {
  const [pro, setPro] = useState([]);

  let project = useParams();

  useEffect(() => {
    for (let i = 0; i < all.length; i++) {
      if (project.project === all[i].head) {
        setPro(all[i]);
      }
    }
  }, [project]);

  return (
    <SingleStyle>
      <h1>
        {pro.head} <span>:=</span>
      </h1>

      <div className="first">
        <h2>
          Pẹlẹ o!! <span>Care to know more about this project?</span>
        </h2>

        <p href={pro.web} className="link">
          {pro.head}
        </p>

        <div className="img">
          <img src={pro.second} alt={pro.head} />
          <img src={pro.third} alt={pro.head} />
        </div>
      </div>

      <div className="second">
        <h2>
          <span>let</span> About <span>= [</span>
        </h2>
        <p>{pro.body}</p>
        <h2>
          <span>]</span>
        </h2>
      </div>

      <div className="third">
        <h2>
          <span>let</span> Stack <span>= [</span>
        </h2>
        <div className="tab">
          {pro.arsenal &&
            pro.arsenal.map((item) => (
              <div className="language" key={item.name}>
                <img src={item.img} alt={item.name} />
                <b>{item.name}</b>
              </div>
            ))}
        </div>
        <h2>
          <span>]</span>
        </h2>
      </div>

      <div className="fourth">
        <h2>
          <span>let</span> Links <span>= [</span>
        </h2>
        <div>
          <div className="web">
            {pro.links &&
              pro.links.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <button style={{ cursor: "pointer" }}> {item.name} </button>
                </a>
              ))}
          </div>
        </div>
        <h2>
          <span>]</span>
        </h2>
      </div>

      <div style={{ marginTop: "15%" }}>
        <Contact />
      </div>
    </SingleStyle>
  );
};

export default SinglePage;
