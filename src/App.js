import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import Contacts from './components/Contacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/contacts" element={<Contacts></Contacts>}></Route>
            <Route path="/" element={<LoginPage></LoginPage>} exact>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
