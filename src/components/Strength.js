import React, { useRef, useEffect } from "react";
import Treasure from "../components/Treasure.js";

const Strength = ({ title, text }) => {
  const strengthRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    if (strengthRef.current) {
      observer.observe(strengthRef.current);
    }

    return () => {
      if (strengthRef.current) {
        observer.unobserve(strengthRef.current);
      }
    };
  }, []);

  return (
    <div className="strength" ref={strengthRef}>
        <Treasure></Treasure>
        <h3>{ title }</h3>
        <div>{ text }</div>
    </div>
  );
};

export default Strength;
