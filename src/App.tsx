import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { GlobalStyle } from './styles/global';

export default function App () {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}
