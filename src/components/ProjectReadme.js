import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/ProjectReadme.css";

function ProjectReadme({ path }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, [path]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default ProjectReadme;
