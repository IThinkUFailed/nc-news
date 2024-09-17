import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllArticles from "./Components/AllArticles";
import SingleArticle from './Components/SingleArticle';
import Header from './Components/Header';
function App() {
  return (<>

    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AllArticles />} />
      <Route path="/article/:article_id" element={<SingleArticle />} />
    </Routes>
  </Router>
  </>
)
}

export default App
