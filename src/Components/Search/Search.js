import React, { useRef } from 'react'

import styles from '../../CSS/Search/search.module.css'

const Search = (props) => {

    const place = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
        props.handlePlace(place.current.value)
    }

    return (
        <div className={`${styles.search}`}>
            <form>
                <input id="search" ref={place} type="search" placeholder="Search a location..." autoFocus required />
                <button onClick={submitHandler} type="submit">GO</button>
            </form>
        </div>
    )
}

export default Search
