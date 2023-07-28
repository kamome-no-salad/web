import { useState } from 'react'
import './App.scss'
import GlobalNav from './component/GlobalNav.jsx'
import About from './routes/About'
import Works from './routes/Works'
import Member from './routes/Member'
import History from './routes/History'
import Articles from './routes/Articles'
import Article from './routes/Article'

import NoMatch from './routes/NoMatch';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalNav/>
      <Routes>
        <Route index element={null}/>
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/History" element={<History />} />
        <Route path="/Articles" element={<Articles />} >
          <Route path=":articleId" element={<Article />}/>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
