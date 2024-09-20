import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllArticles from "./Components/AllArticles";
import SingleArticle from './Components/SingleArticle';
import Header from './Components/Header';
import { useState } from 'react';
import GetArticlesByTopic from './Components/GetArticlesByTopic';
function App() {
  const [topic, setTopic] = useState('')
  return (<>

    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AllArticles />} setTopic={setTopic} topic={topic} />
      <Route path="/article/:article_id" element={<SingleArticle/>} />
      <Route path="/topics/:topic" element={<GetArticlesByTopic/>} />
    </Routes>
  </Router>
  </>
)
}

export default App
