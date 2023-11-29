import styled from "styled-components";

export const StyledCarousel = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  max-width: 100vw;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .carousel-card {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8);
    transition: 0.5s ease-in-out;
    display: flex;
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .carousel-card-active {
    opacity: 1;
    transform: scale(1);
    pointer-events: visible;
  }

  .card-image {
    width: 100%;
    object-fit: cover;
  }

  .left-arrow,
  .right-arrow {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  .left-arrow {
    left: 25px;
  }

  .right-arrow {
    right: 25px;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 0px 30px;
  align-items: flex-end;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  color: white;
  font-size: 3rem;
`;

export const CarouselPagination = styled.div`
  position: absolute;
  bottom: 5px;
  translate: (-50%, 0);
  left: 50%;

  .pagination-dot {
    background-color: #f5f5f5;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
  }

  .pagination-dot:hover {
    transform: scale(1.2);
  }

  .pagination-dot-active {
    background-color: #43b2a5;
  }
`;
