function ResultCard({ report }) {
  return (
    <div className="card">
      <h2>Audit Report</h2>

      <p>Status : {report.status}</p>

      <p>Response Time : {report.responseTime} ms</p>

      <p>Title : {report.title}</p>

      <p>Meta Description : {report.metaDescription}</p>

      <p>H1 Count : {report.h1Count}</p>

      <p>Images Without Alt : {report.imagesWithoutAlt}</p>

      <p>Word Count : {report.wordCount}</p>
    </div>
  );
}

export default ResultCard;