import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  CardOverlay,
  CardTitle,
  CarouselPagination,
  CarouselWrapper,
  StyledCarousel,
} from "./style";

import { floors } from "../../../constants";

const Carousel = () => {
  //Use state to hold the array item of the current image
  const [current, setCurrent] = useState(0);
  //Use state to change autoplay feature based on Mouse Enter and Leave Events
  const [autoPlay, setAutoPlay] = useState(true);

  const timeOut = useRef(null);

  //UseEffect to trigger autoplay on infinite render
  useEffect(() => {
    timeOut.current = autoPlay && setTimeout(() => slideRight(), 3000);
  });

  //Function to change the image forwards
  const slideRight = () => {
    if (current === floors.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  //Function to change the image backwards
  const slideLeft = () => {
    if (current === 0) {
      setCurrent(floors.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  //Function to stop autoplay on Mouse Enter Event
  const autoPlayHandler = () => {
    setAutoPlay(false);
    clearTimeout(timeOut.current);
  };

  return (
    <StyledCarousel
      onMouseEnter={autoPlayHandler}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <CarouselWrapper>
        {floors.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel-card carousel-card-active"
                  : "carousel-card"
              }
            >
              <img className="card-image" src={image.image} alt="" />
              <CardOverlay>
                <CardTitle>{image.title}</CardTitle>
              </CardOverlay>
            </div>
          );
        })}

        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          style={{ color: "#abb0ba" }}
          size="2xl"
          className="left-arrow"
          onClick={slideLeft}
        />
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{ color: "#abb0ba" }}
          size="2xl"
          className="right-arrow"
          onClick={slideRight}
        />

        <CarouselPagination>
          {floors.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination-dot pagination-dot-active"
                    : "pagination-dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </CarouselPagination>
      </CarouselWrapper>
    </StyledCarousel>
  );
};

export default Carousel;
