import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' />
        <Route path='/auth' />
        <Route path='/profile' />
        <Route path='/meals/:mealId' />
        <Route path='*' />
      </Routes>
    </Router>
  );
}

export default App;
