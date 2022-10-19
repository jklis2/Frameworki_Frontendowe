import React, { FC } from "react";
import Header from "../Component/tsx/Header";
import "../Component/css/Home.css";
import Carousel from "react-bootstrap/Carousel";

const Home: FC = () => {
  return (
    <div>
      <Header />
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-photo fluid">
            <Carousel fade controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/img/Welcome_photo_1.jpg`}
                  alt="PhotoSlider1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/img/Welcome_photo_2.jpg`}
                  alt="PhotoSlider2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/img/Welcome_photo_3.jpg`}
                  alt="PhotoSlider3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/img/Welcome_photo_4.jpg`}
                  alt="PhotoSlider4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/img/Welcome_photo_5.jpg`}
                  alt="PhotoSlider5"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="welcome-text">
            <div>
              {" "}
              <h2>Welcome on our Page!</h2>{" "}
            </div>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto
              asperiores magni, nemo tempora dolore reprehenderit vitae dolores
              vel, non harum in expedita earum sit fugiat provident! Blanditiis,
              ducimus iste.
            </div>
            <div className="welcome-button">
              <a href="/Register">Join to us!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
