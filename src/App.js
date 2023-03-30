import { useState } from 'react';

import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import SearchResult from './Components/Search Result/SearchResult';
import Result from './Components/Result/Result';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';

import styles from './CSS/app.module.css';


const App = () => {

    const[searchPlace, setSearchPlace] = useState(null)

    const handlePlace = (value) => {
        setSearchPlace(value)
    }

    return (
        <div className={`${styles.app}`}>
            <Header/ >
            <Search handlePlace={handlePlace} />
            <SearchResult  searchPlace={searchPlace}/>
            <Result />
            <Featured />
            <Footer />
        </div>
    );
}

export default App;
