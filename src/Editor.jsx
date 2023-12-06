import { useState } from "react";
import "./Editor.css";
import Preview from "./Preview";
const r =
  "# Welcome to my React Markdown Previewer!\n\
## This is a sub-heading...\n\
### And here's some other cool stuff:\n\
Heres some code, `<div></div>`, between 2 backticks.\n\
```\n\
// this is multi-line code:\n\
function anotherExample(firstLine, lastLine) {\n\
  if (firstLine == '```' && lastLine == '```') {\n\
    return multiLineCode;\n\
  }\n\
}\n\
```\n\
You can also make text **bold**... whoa!\n\
\n\
Or _italic_.\n\
\n\
Or... wait for it... **_both!_**\n\
\n\
There's also [links](https://twitter.com/chrry_kei), and\n\
> Block Quotes!\n\
- And of course there are lists.\n\
  - Some are bulleted.\n\
     - With different indentation levels.\n\
        - That look like this.\n\
\n\
1. And there are numbered lists too.\n\
1. Use just 1s if you want!\n\
1. And last but not least, let's not forget embedded images:\n\
\n\
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\
";

function Editor() {
  const [input, setInput] = useState(r);

  return (
    <>
      <div className="cherry">
        <h1>Made with 💖 by 🍒</h1>
      </div>
      <div className="wrapper">
        <form>
          <fieldset className="editor">
            <legend>Editor</legend>
            <textarea
              name="editor"
              value={input}
              id="editor"
              cols="30"
              rows="10"
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
          </fieldset>
        </form>
      </div>

      <div className="wrapper">
        <fieldset className="preview">
          <legend>Previewer</legend>
          <Preview input={input} />
        </fieldset>
      </div>
    </>
  );
}

export default Editor;
