import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import TransactionPage from './pages/TransactionPage';
import { displayTransaction } from './redux/transaction/TransactionReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayTransaction({ order: 'asc' }));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/transactions/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
