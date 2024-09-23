import React, { useRef, useEffect } from "react";
import Treasure from "../components/Treasure.js";
import "../styles/Strength.css";

const Strength = ({ title, text }) => {
  const strengthRef = useRef(null);

  useEffect(() => {
    const strength = strengthRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    if (strength) {
      observer.observe(strength);
    }

    return () => {
      if (strength) {
        observer.unobserve(strength);
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
