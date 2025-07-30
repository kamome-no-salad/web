import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 type ArticleListProps = {
  path: string;
 };
type List = {
    title?: string;
    path?: string;
    author?: string;
    date?: string;
    tags?: string[];
    [key: string]: any; // その他のメタデータを許可するためのインデックスシグネチャ
};

const ArticleList = ({path}:ArticleListProps) => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // publicフォルダにあるMarkdownファイルをfetchで読み込む
    fetch(`/${path}`)
      .then((res) => res.json())
      .then((ls) => {
        // front-matterでYAMLフロントマターとコンテンツを分離
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
      <section>
        <ul>
          {list?.map((item:List, index:number) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>著者: {item.author} | 公開日: {item.date}</p>
              <p>タグ: {item.tags?.join(', ')}</p>
              <Link to={"/Articles/"+item.path}>続きを読む</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ArticleList;