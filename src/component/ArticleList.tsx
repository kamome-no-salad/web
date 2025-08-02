/**
 * ArticleList.tsx
 * JSONファイルの記事一覧を表示するコンポーネント
 * このコンポーネントは、指定されたJSONファイルから記事のリストを取得し、リンクとして表示します。
 * 各記事はタイトル、説明、著者、日付、タグを含みます。
 * また、現在表示中の記事のIDをURLパラメータから取得し、
 * 一致する記事が選択されている場合は「閉じる」リンクを表示します。
 */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

type ArticleListProps = {
  filename: string;
};
type List = {
  title: string;
  filename: string;
  discription?: string;
  author?: string;
  date?: string;
  tags?: string[];
  [key: string]: any; // その他のメタデータを許可するためのインデックスシグネチャ
};

const ArticleList = ({filename}:ArticleListProps) => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const { articleId } = useParams();
  const [nextArticleIndex, setNextArticleIndex] = useState<number>(-1);
  const [prevArticleIndex, setPrevArticleIndex] = useState<number>(-1);

  useEffect(() => {
    // publicフォルダにあるjsonファイルをfetchで読み込む
    fetch(`/${filename}`)
      .then((res) => res.json())
      .then((ls) => {
        setList(ls);
        setLoading(false);
        setNextArticleIndex(list.findIndex(item => item.filename === articleId) + 1);
        setPrevArticleIndex(list.findIndex(item => item.filename === articleId) - 1);
      })
      .catch((err) => {
        console.error('Error fetching markdown:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // URLパラメータのarticleIdが変わったときに記事のインデックスを更新
    if (articleId) {
      const index = list.findIndex(item => item.filename === articleId);
      setNextArticleIndex(index + 1);
      setPrevArticleIndex(index - 1);
      console.log("articleId:", articleId, "index:", index);
    } else {
      setNextArticleIndex(-1);
      setPrevArticleIndex(-1);
    }
  }, [articleId, list]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {articleId?(
        // 現在の記事が選択されている場合は、閉じるリンクのみを表示
        // ここでは、記事一覧を非表示にするために空のフラグメントを返す
        <section className='articleList'>
          <Link to={"/Articles"} className='closeLink'>記事一覧へ</Link>
          <ul>
            {list[prevArticleIndex] && (
              <li key={list[prevArticleIndex].filename} className='articleListItem'>
                <p>{"<<"}PREV</p>
                <Link to={"/Articles/"+list[prevArticleIndex].filename}>
                  <h1>{list[prevArticleIndex].title}</h1>
                  <p>{list[prevArticleIndex].discription}</p>
                  <p>{list[prevArticleIndex].author} {list[prevArticleIndex].author&&list[prevArticleIndex].date?"|":""} {list[prevArticleIndex].date}</p>
                  <div className='tags'>
                    {list[prevArticleIndex].tags?.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            )}
            {list[nextArticleIndex] && (
              <li key={list[nextArticleIndex].filename} className='articleListItem'>
                <p>NEXT{">>"}</p>
                <Link to={"/Articles/"+list[nextArticleIndex].filename}>
                  <h1>{list[nextArticleIndex].title}</h1>
                  <p>{list[nextArticleIndex].discription}</p>
                  <p>{list[nextArticleIndex].author} {list[nextArticleIndex].author&&list[nextArticleIndex].date?"|":""} {list[nextArticleIndex].date}</p>
                  <div className='tags'>
                    {list[nextArticleIndex].tags?.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </section>
      ):(
        // 現在の記事が選択されていない場合は、記事一覧を表示
        <section className='articleList'>
          <ul>
            {list?.map((item:List, index:Number) => (
              <li key={item.filename} className='articleListItem' style={{order: -index}}>
                <Link to={"/Articles/"+item.filename}>
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
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default ArticleList;