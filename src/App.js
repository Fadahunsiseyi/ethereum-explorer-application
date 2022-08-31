import { Routes, Route } from 'react-router-dom';
import GetApi from './api/Api';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import TransactionPage from './pages/TransactionPage';

GetApi();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
