
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Result from './Components/Result/Result';

import styles from './CSS/app.module.css';

function App() {
  return (
    <div className={`${styles.app}`}>
        <Header/ >
        <Search />
        <Result />
    </div>
  );
}

export default App;
