import MarkdownRenderer from "../component/Markdown";

function History() {
  window.scrollTo({top: 0, behavior: "instant"});
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