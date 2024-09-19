import React, { useState, useRef, useEffect }  from "react";
import "../styles/Skill.css";

const SkillBar = ({ name, gauge }) => {
  const [barWidth, setBarWidth] = useState(0);
  const skillBarFillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setBarWidth(entry.isIntersecting ? gauge * 100 : 0),
      { threshold: 0.1 }
    );

    if (skillBarFillRef.current) {
      observer.observe(skillBarFillRef.current);
    }

    return () => skillBarFillRef.current && observer.unobserve(skillBarFillRef.current);
  }, [gauge]);

  return (
    <div className="skill">
        <div className="skill-name">{ name }</div>
        <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${barWidth}%` }} ref={skillBarFillRef}></div>
        </div>
    </div>
  );
};

export default SkillBar;
