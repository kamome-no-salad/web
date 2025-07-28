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

const MarkdownRenderer = () => {
  const [post, setPost] = useState<Post>({ metadata: {}, content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // publicフォルダにあるMarkdownファイルをfetchで読み込む
    fetch('../contents/pages/about.md')
      .then((res) => res.text())
      .then((text) => {
        // front-matterでYAMLフロントマターとコンテンツを分離
        const { atribute, body } = fm(text);
        console.log('text', text);
        console.log('Metadata:', atribute);
        console.log('Content:', body);
        setPost({ metadata: atribute, content: body });
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
      <h1>{post.metadata.title}</h1>
      <p>
        著者: {post.metadata.author} | 公開日: {post.metadata.date}
      </p>
      <div>
        {post.metadata.tags?.map((tag) => (
          <span key={tag} style={{ marginRight: '8px', padding: '4px', backgroundColor: '#eee' }}>
            {tag}
          </span>
        ))}
      </div>

      <hr style={{ margin: '20px 0' }} />

      {/* Markdownコンテンツをレンダリング */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;