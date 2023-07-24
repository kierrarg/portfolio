import React, { Component } from "react";
import "./test.css";

import cartoon from '../../../img/cartoon.PNG';
import christina from '../../../img/christina.JPG';
import eye from '../../../img/eye.PNG';
import eye1 from '../../../img/eye1.JPG';
import eye2 from '../../../img/eye2.JPG';
import girlWithHat from '../../../img/girlWithHat.png';
import lineart from '../../../img/lineart.PNG';
import lineart1 from '../../../img/lineart1.JPG';
import lineart2 from '../../../img/lineart2.JPG';

class Testpage extends Component {
  wheelTimeout;
  transitionTimeout;
  lastTouch = 0;
  state = {
    imgs: [girlWithHat, christina, cartoon, lineart1, lineart, lineart2, eye2, eye1, eye],
    currentIndex: 0,
    movement: 0,
    transitionDuration: "0s",
  };

  componentWillUnmount = () => {
    clearTimeout(this.transitionTimeout);
  };

  handleTouchStart = (e) => {
    this.lastTouch = e.nativeEvent.touches[0].clientX;
  };

  handleTouchMove = (e) => {
    const delta = this.lastTouch - e.nativeEvent.touches[0].clientX;
    this.lastTouch = e.nativeEvent.touches[0].clientX;

    this.handleMovement(delta);
  };

  handleTouchEnd = () => {
    this.handleMovementEnd();
    this.lastTouch = 0;
  };

  handleWheel = (e) => {
    clearTimeout(this.wheelTimeout);
    this.handleMovement(e.deltaX);
    this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 100);
  };

  handleMovement = (delta) => {
    clearTimeout(this.transitionTimeout);

    this.setState((state) => {
      const maxLength = state.imgs.length - 1;
      let nextMovement = state.movement + delta;

      if (nextMovement < 0) {
        nextMovement = 0;
      }

      if (nextMovement > maxLength * this.containerWidth) {
        nextMovement = maxLength * this.containerWidth;
      }

      return {
        movement: nextMovement,
        transitionDuration: "0s",
      };
    });
  };

  handleMovementEnd = () => {
    const { movement, currentIndex } = this.state;
    const endPosition = movement / this.containerWidth;
    const endPartial = endPosition % 1;
    const endingIndex = endPosition - endPartial;
    const deltaInteger = endingIndex - currentIndex;

    let nextIndex = endingIndex;

    if (deltaInteger >= 0) {
      if (endPartial >= 0.1) {
        nextIndex += 1;
      }
    } else if (deltaInteger < 0) {
      nextIndex = currentIndex - Math.abs(deltaInteger);
      if (endPartial > 0.9) {
        nextIndex += 1;
      }
    }

    this.transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)));
  };

  transitionTo = (index, duration) => {
    this.setState({
      currentIndex: index,
      movement: index * this.containerWidth,
      transitionDuration: `${duration}s`,
    });

    this.transitionTimeout = setTimeout(() => {
      this.setState({ transitionDuration: "0s" });
    }, duration * 100);
  };

  updateContainerWidth = () => {
    // Get the current width of the .swiper container
    const swiperElement = document.querySelector(".swiper");
    if (swiperElement) {
      this.containerWidth = swiperElement.offsetWidth;
    }
  };

  componentDidMount() {
    // Update containerWidth when the component is mounted and on window resize
    this.updateContainerWidth();
    window.addEventListener("resize", this.updateContainerWidth);
  }

  componentWillUnmount() {
    // Remove the resize event listener when the component is unmounted
    window.removeEventListener("resize", this.updateContainerWidth);
  }

  render() {
    const { currentIndex, movement, transitionDuration, imgs } = this.state;
    const maxLength = imgs.length - 1;
    const maxMovement = maxLength * this.containerWidth;

    return (
      <div className="Page">
        <div
          className="main"
          style={{ padding: "60px 0" }} // Add padding instead of using padding-top
        >
          <div
            className="swiper"
            style={{
              transform: `translateX(${movement * -1}px)`,
              transitionDuration: transitionDuration,
            }}
          >
            {imgs.map((src) => {
              return <img 
              key={src} src={src} alt="Image" />;
            })}
          </div>
          {movement !== 0 && (
            <button
              className="back move"
              onClick={() => {
                this.transitionTo(currentIndex - 1, 0.5);
              }}
            >
              ←
            </button>
          )}
          {movement !== maxMovement && (
            <button
              className="next move"
              onClick={() => {
                this.transitionTo(currentIndex + 1, 0.5);
              }}
            >
              →
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Testpage;