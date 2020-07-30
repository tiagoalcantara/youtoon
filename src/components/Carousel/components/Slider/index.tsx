/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const Arrow = styled.div`
  height: 85%;
  width: 32px;
  background: black;
  opacity: .3;
  display: flex;
  align-items: center;
  transition: opacity .1s;

  &:hover {
    opacity: '1',
  }
`;

function RenderArrow({ className, onClick } : ArrowProps) {
  return (
    <Arrow
      onKeyDown={(): void => {}}
      role="button"
      aria-label="Próximo"
      tabIndex={0}
      className={className}
      onClick={onClick}
    />
  );
}

const Container = styled.ul`
  padding: 0;
  width: 94%;
  margin: 0 auto;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;

    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0px;
  }
`;

export const SliderItem = styled.li`
  img {
    margin: 16px;
    width: 298px;
    height: 300px;
    object-fit: cover;
  }
`;

interface SliderProps {
  children: any;
}

const Slider = ({ children }: SliderProps) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <RenderArrow />,
      prevArrow: <RenderArrow />,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
