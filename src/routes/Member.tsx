import MarkdownRenderer from "../component/Markdown";

function Member() {
  window.scrollTo({top: 0, behavior: "instant"});
  return (
    <>
      <div className="page">
        <h1>Member</h1>
        <article>
          <MarkdownRenderer path="contents/pages/member.md"/>
        </article>
      </div>
      
    </>
  )
}

export default Member;