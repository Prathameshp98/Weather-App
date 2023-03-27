import React from 'react'

import styles from '../../CSS/Search/search.module.css'

const Search = () => {
    return (
        <div className={`${styles.search}`}>
            <form>
                <input id="search" type="search" placeholder="Search a location..." autoFocus required />
                <button type="submit">GO</button>
            </form>
        </div>
    )
}

export default Search
