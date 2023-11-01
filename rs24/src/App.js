import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </main>
    </Router>
  );
}

export default App;
