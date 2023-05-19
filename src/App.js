import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import MainLayout from './layouts/MainLayout';
import DefaultPage from './pages/DefaultPage';
import ApiProvider from './context/ApiProvider'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <MainPage />
            </MainLayout>} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>)
}

export default App;
