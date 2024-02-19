import './App.css';
import { NavBar } from './NavBar';
import { SecondPage } from './SecondPage';
import { FirstPage } from './FirstPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
