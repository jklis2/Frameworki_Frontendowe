import React, { FC } from "react";
import Header from "../Component/tsx/Header";
import "../Component/css/Home.css";
import Carousel from "react-bootstrap/Carousel";
import {Button} from "../styleHelpers/Button";

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
              We are a new startup promoting human relations. We value family,
              friendship and memories. Do you want to share a memory, photo or
              moment with your friends? Join us!
            </div>
            <Button as="a" href="/Register"><span>Join to us!</span></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
