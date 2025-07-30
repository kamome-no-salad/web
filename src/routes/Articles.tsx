import { Outlet } from 'react-router-dom';
import ArticleList from '../component/ArticleList';

function Articles() {
  window.scrollTo({top: 0, behavior: "instant"});
  return (
    <>
      <div className="page">
        <h1>Articles</h1>
        <article>
          <Outlet />
        </article>
        <article>
          <ArticleList path="contents/articles/index.json" />
        </article>
      </div>
    </>
  )
}

export default Articles;