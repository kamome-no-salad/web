import MarkdownRenderer from "../component/markdown";

function About() {
  window.scrollTo({top: 0, behavior: "instant"});
  return (
    <>
      <div className="page">
        <h1>About</h1>
        <article>
          <MarkdownRenderer path="contents/pages/about.md"/>
        </article>
      </div>
      
    </>
  )
}

export default About;