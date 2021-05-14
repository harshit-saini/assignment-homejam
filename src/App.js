import './App.css';
import Home from './pages/Home';
import { Route } from 'react-router-dom'


function App() {
  return (
    <Route path="/">
      <Home />
    </Route>
  );
}

export default App;
