import Markdown from "react-markdown";
import "./Editor.css";

const Preview = ({ input }) => {
  return <Markdown children={input} />;
};

export default Preview;
