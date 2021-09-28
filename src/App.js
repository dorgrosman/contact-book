
import MainNavbar from './components/MainNavbar/MainNavbar';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/scss/global.scss';
import store from './store/store';
import HomePage from './pages/HomePage/HomePage';


 function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App ">
          <MainNavbar />
          <HomePage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
