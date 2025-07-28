import MarkdownRenderer from "../component/markdown";

function History() {
  return (
    <>
      <div className="page">
        <h1>History</h1>
        <article>
          <MarkdownRenderer path="contents/pages/history.md"/>
        </article>
      </div>
    </>
  )
}

export default History;