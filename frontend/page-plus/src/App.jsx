import { useState } from "react";
import axios from "axios";
import UrlForm from "./components/UrlForm";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeWebsite = async (url) => {
    try {
      setLoading(true);

      const res = await axios.post("https://page-pulse-task.onrender.com/audit", {
        url,
      });

      setReport(res.data);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Page Pulse</h1>

      <UrlForm analyzeWebsite={analyzeWebsite} />

      {loading && <h3>Analyzing...</h3>}

      {report && <ResultCard report={report} />}
    </div>
  );
}

export default App;