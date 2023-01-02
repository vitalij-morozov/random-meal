import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage, MainPage, SingleRecipePage } from './pages';
import { NavBar, Footer } from './components';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile' />
        <Route path='/recipes/:mealId' element={<SingleRecipePage />} />
        <Route path='*' />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
