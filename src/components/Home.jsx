import React, {useState} from "react";
import { motion } from "framer-motion";
import Header from "./Navigation/Header";
import { Row, Col } from "antd";
//@ts-ignore
import TinyGesture from "tinygesture";
import SwipeItem from "./SwipeItem";



function initSlider(target){
  let swiped = false;
  let startOffset = 0;
  const decelerationOnOverflow = 4;
  const revealWidth = 50;
  const snapWidth = revealWidth / 1.5;

  const gesture = new TinyGesture(target);

  // swipe gestures
  gesture.on('panmove', (event) => {
    if (gesture.animationFrame) {
      return;
    }
    event.preventDefault();
    gesture.animationFrame = window.requestAnimationFrame(() => {
      let getX = (x) => {
        if(x < revealWidth && x > -revealWidth){
          return x;
        }
        if(x < -revealWidth){
          return ((x + revealWidth) / decelerationOnOverflow) - revealWidth;
        }
        if(x > revealWidth){
          return ((x - revealWidth) / decelerationOnOverflow) + revealWidth;
        }
      };
      const newX = getX(startOffset + gesture.touchMoveX);
      target.style.transform = 'translateX('+newX+'px)';
      if(newX >= snapWidth || newX <= -snapWidth){
        swiped = (newX < 0) ? (-revealWidth) : (revealWidth);
      }else{
        swiped = false;
      }
      window.requestAnimationFrame(() => {
        target.style.transition = null;
      });
      gesture.animationFrame = null;
    });
  });

  gesture.on('panend', () => {
    window.cancelAnimationFrame(gesture.animationFrame);
    gesture.animationFrame = null;
    window.requestAnimationFrame(() => {
      target.style.transition = "transform .2s ease-in";
      if(!swiped){
        startOffset = 0;
        target.style.transform = null;
      }else{
        startOffset = swiped;
        target.style.transform = 'translateX(' + swiped + 'px)';
      }
    });
  });

  // reset on tap
  gesture.on('doubletap', event => { // we could also use 'doubletap' here
    window.requestAnimationFrame(() => {
      target.style.transition = "transform .2s ease-in";
      swiped = false;
      startOffset = 0;
      target.style.transform = null;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".swipe-item").forEach(initSlider);
});

const scroll = () => {
  document.getElementById("home-lower").scrollIntoView({
    behavior: "smooth",
  });
};

export default function Home() {

  const [mapData, setMapData] = useState(["Markus", "Siliva", "Niklas"])


  return (
    <div className="home">
      <Header />
      
      <ul>
       {mapData.map((curr, index) => {
            return <SwipeItem title={curr} index={index} mapData={mapData} setMapData={setMapData} />
       })} 
        </ul>
    </div>
  );
}
