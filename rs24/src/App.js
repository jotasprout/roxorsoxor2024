import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
    
  return (
    <div className='App'>
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </Router>   
    </div>

  );
}

export default App;
