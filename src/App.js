import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage, MainPage, SingleRecipePage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' />
        <Route path='/recipes/:mealId' element={<SingleRecipePage />} />
        <Route path='*' />
      </Routes>
    </Router>
  );
}

export default App;
