import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' />
        <Route path='/meals/:mealId' />
        <Route path='*' />
      </Routes>
    </Router>
  );
}

export default App;
