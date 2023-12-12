import { useState } from "react";
import { marked } from 'marked';
import "./App.css";
import { initText } from "./text";

marked.setOptions({
  breaks: true,
});

function App() {
  const [text, setText] = useState(initText);

  const updatePreview = (e) => {
    let value = e.target.value;
    setText(value);
  };

  return (
    <div class="center">
      <div class="container">
        <div class="left-content">
          <h2>Editor</h2>
          <textarea
            rows="35"
            cols="45"
            id="editor"
            value={text}
            onInput={updatePreview}
          />
        </div>
        <div class="right-content">
          <h2>Previewer</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked.parse(text),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
