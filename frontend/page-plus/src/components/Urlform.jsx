import { useState } from "react";

function UrlForm({ analyzeWebsite }) {
  const [url, setUrl] = useState("");

  const submit = (e) => {
    e.preventDefault();
    analyzeWebsite(url);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Enter Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button>Analyze</button>
    </form>
  );
}

export default UrlForm;