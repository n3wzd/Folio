import React, { useState, useRef, useEffect }  from "react";
import "../../styles/Skill.css";

const SkillBar = ({ name, gauge }) => {
  const [barWidth, setBarWidth] = useState(0);
  const skillBarFillRef = useRef(null);

  useEffect(() => {
    const skillBarFill = skillBarFillRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setBarWidth(entry.isIntersecting ? gauge * 100 : 0),
      { threshold: 0.1 }
    );

    if (skillBarFill) {
      observer.observe(skillBarFill);
    }

    return () => skillBarFill && observer.unobserve(skillBarFill);
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
