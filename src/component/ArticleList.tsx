import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

 type ArticleListProps = {
  path: string;
 };
type List = {
    title?: string;
    path?: string;
    discription?: string;
    author?: string;
    date?: string;
    tags?: string[];
    [key: string]: any; // その他のメタデータを許可するためのインデックスシグネチャ
};

const ArticleList = ({path}:ArticleListProps) => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const { articleId } = useParams();

  useEffect(() => {
    // publicフォルダにあるMarkdownファイルをfetchで読み込む
    fetch(`/${path}`)
      .then((res) => res.json())
      .then((ls) => {
        setList(ls);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching markdown:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className='articleList'>
        <ul>
          {list?.map((item:List, index:number) => (
            <>
              {item.path==articleId ? (
                <li key={index} className='articleListItem active'>
                  <Outlet />
                  <Link to={"/Articles"}>閉じる</Link>
                </li>
              ) : (
                <li key={index} className='articleListItem'>
                  <Link to={"/Articles/"+item.path}>
                    <h1>{item.title}</h1>
                    <p>{item.discription}</p>
                    <p>{item.author} {item.author&&item.date?"|":""} {item.date}</p>
                    <div className='tags'>
                    {item.tags?.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  </Link>
                </li>
              )}
            </>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ArticleList;