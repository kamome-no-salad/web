import { useParams } from 'react-router-dom';

function Article(){
  const { articleId } = useParams();
  window.scrollTo({top: 0, behavior: "instant"});

  return(
    <>
      <h1>記事ページ</h1>
      <p>{articleId}</p>
    </>
  )
}

export default Article;