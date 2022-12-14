import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { DropdownSelect, Tapbar } from './components';
import { GlobalProvider } from './context/globalState';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import styles from './app.module.scss'

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.inner}>
              <Tapbar/>
              <DropdownSelect/>
              <div className={styles.posts}>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/favorites' element={<Favorites/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>  
      </BrowserRouter> 
    </GlobalProvider>
  );
}

export default App;
