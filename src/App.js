import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage, MainPage, SingleRecipePage, ProfilePage, ProtectedRoute } from './pages';
import { NavBar, Footer } from './components';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path='/recipes/:mealId' element={<SingleRecipePage />} />
        <Route path='*' />
      </Routes>
      <Footer />
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
