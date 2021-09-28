import React, {  useCallback } from 'react'
import {  useDispatch } from 'react-redux';
import { searchHighlight } from '../../store/Action/ContactAction';
import './SearchInput.scss'

export default function SearchInput() {
    const dispatch = useDispatch();
    const searchBox = useCallback((event) => {
    dispatch(searchHighlight(event))    
    })
    return (
        <div className="SearchInput">
            <form className="form flex align-center" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" onChange={event =>  {searchBox(event.target.value) }}/>
            <div> <i className="fa fa-search"></i></div>
            </form>
        </div>
    )
}
