import { Outlet } from 'react-router-dom';

function Articles() {
  return (
    <>
      <div className="page">
        <h1>Articles</h1>
        <article>
          <Outlet />
        </article>
      </div>
      
    </>
  )
}

export default Articles;