---
title: 'ReactでMarkdownを扱う'
date: '2025-07-28'
author: 'Taro Yamada'
tags: ['React', 'Markdown', 'JavaScript']
---

# これは記事のタイトルです

`react-markdown`と`gray-matter`を使うと、簡単にMarkdownをWebページに表示できます。

- メタデータの利用
- 安全なHTMLレンダリング

コードブロックも表示できます。

```javascript
import React from 'react';

const App = () => {
  return <div>Hello, Markdown!</div>;
};

export default App;
```