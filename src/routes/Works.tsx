import MarkdownRenderer from "../component/Markdown";

function Works() {
  window.scrollTo({top: 0, behavior: "instant"});
  return (
    <>
      <div className="page">
        <h1>Works</h1>
        <article>
          <MarkdownRenderer path="contents/pages/works.md"/>
        </article>
      </div>
      
    </>
  )
}

export default Works;