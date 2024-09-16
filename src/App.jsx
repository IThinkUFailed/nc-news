import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllArticles from "./Components/AllArticles"
import Header from './Components/Header';
function App() {
  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" element={<AllArticles />} />
    </Routes>
  </Router>

)
}

export default App
