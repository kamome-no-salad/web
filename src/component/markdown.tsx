import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
const fm = require('front-matter');

type PostMetadata = {
  title?: string;
  author?: string;
  date?: string;
  tags?: string[];
  [key: string]: any; // その他のメタデータを許可するためのインデックスシグネチャ
};
type Post = {
  metadata: PostMetadata;
  content: string;
};
type MarkdownRendererProps = {
  path: string;
};
  

const MarkdownRenderer = ({path}:MarkdownRendererProps) => {
  const [post, setPost] = useState<Post>({ metadata: {}, content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // publicフォルダにあるMarkdownファイルをfetchで読み込む
    fetch(`/${path}`)
      .then((res) => res.text())
      .then((text) => {
        // front-matterでYAMLフロントマターとコンテンツを分離
        console.log(path);
        const { attributes, body } = fm(text);
        setPost({ metadata: attributes, content: body });
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
    <div>
      {/* メタデータを表示 */}
      {/* <h1>{post.metadata.title}</h1>
      <p>
        著者: {post.metadata.author} | 公開日: {post.metadata.date}
      </p>
      <div>
        {post.metadata.tags?.map((tag) => (
          <span key={tag} style={{ marginRight: '8px', padding: '4px 8px', backgroundColor: '#eee' , borderRadius: '8px' }}>
            {tag}
          </span>
        ))}
      </div>

      <hr style={{ margin: '20px 0' , color: 'black' }} /> */}

      {/* Markdownコンテンツをレンダリング */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;