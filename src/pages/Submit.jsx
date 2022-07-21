import React from 'react';
import '../app.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/index";




const Submit = () => {

    const {state}= useContext(Context)
    




    return (
        <>
  {/* Hello world */}
  <main className="main">
    <section className="card-area">
      {/* Card: City */}
      <section className="card-section">
        <div className="card">
          <div className="flip-card">
            <div className="flip-card__container">
              <div className="card-front">
                <div className="card-front__tp card-front__tp--city">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    style={{ enableBackground: "new 0 0 60 60" }}
                    xmlSpace="preserve"
                    className="card-front__icon"
                  >
                    <g>
                      <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z" />
                      <path
                        d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                                 V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                                 c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"
                      />
                      <path
                        d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                                 c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                                 c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                                 c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                                 c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                                 c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                                 c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                                 s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"
                      />
                      <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z" />
                      <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z" />
                      <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z" />
                      <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z" />
                    </g>
                  </svg>
                  <h2 className="card-front__heading">Quiz Result</h2>
                  <p className="card-front__text-price ok">See your Number</p>
                </div>
                <div className="card-front__bt">
                  <p className="card-front__text-view card-front__text-view--city">
                    Result
                  </p>
                </div>
              </div>
              <div className="card-back">
                <video
                  className="video__container"
                  autoPlay=""
                  muted=""
                  loop=""
                >
                  <source
                    className="video__media"
                    src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="inside-page">
            <div className="inside-page__container">
              <h3 className="inside-page__heading inside-page__heading--city">
                Your Number 
              </h3>
              <p className="inside-page__text">
                Your Number is {state.score}
              </p>
              <a style={{ display: "flex","align-items": "center","color": "#455454"}} className="inside-page__btn ">
              <Link style={{ "align-items": "center", "z-index": 20,position: "absolute","margin-left": "-1rem"}}  to="/Allanswer">Detail</Link> 
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</>

    );
}

export default Submit;

