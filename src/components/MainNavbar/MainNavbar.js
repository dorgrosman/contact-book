import React from 'react'
import SearchInput from './../Search/SearchInput';
import img from '../../assets/img/contact-book.png';
import './MainNavbar.scss'

export default function MainNavbar() {

    return (
        <div className={"main-navbar flex space-between "}>
            <div className="logo">
                <img className="logoimg" src={img} alt={img}/>
            </div>
            <div className="searchInput">
                <SearchInput />
            </div>
            <div />
        </div>
    )
}

