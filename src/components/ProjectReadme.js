import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/ProjectReadme.css";

function ProjectReadme({ fileName }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/text/${fileName}`)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, [fileName]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default ProjectReadme;
