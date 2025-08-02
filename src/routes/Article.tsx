import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../component/Markdown';

function Article(){
  const { articleId } = useParams();
  window.scrollTo({top: 0, behavior: "instant"});

  return(
    <>
      <MarkdownRenderer path={"contents/articles/"+articleId+".md"} />
    </>
  )
}

export default Article;