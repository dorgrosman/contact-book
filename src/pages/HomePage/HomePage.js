import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { contactList } from '../../store/Action/ContactAction';
import ContactsList from './../../components/ContactList/ContactsList';
import Button from '@mui/material/Button';
import LoadingBox from './../../components/LoadingBox/LoadingBox';

const contactPerPage = 9;
let arrayForHoldingContacts = [];

export default function HomePage() {
    const [contactsToShow, setContactsToShow] = useState([]);
    console.log('contactsToShow:', contactsToShow)
    const dispatch = useDispatch()
    const [next, setNext] = useState(0)
    const contactsList = useSelector(state => state.contactReducer.contentsList)

    const loopWithSlice = (start, end) => {
        const slicedContacts = contactsList.slice(start, end);
        console.log('slicedContacts:', slicedContacts)
        arrayForHoldingContacts = [...arrayForHoldingContacts, ...slicedContacts];
        console.log('arrayForHoldingContacts:', arrayForHoldingContacts)
        setContactsToShow(arrayForHoldingContacts)
    };

    useEffect(() => {
        dispatch(contactList({}))
        loopWithSlice(0, contactPerPage);
    }, []);

    const onLoadMore = () => {
        loopWithSlice(next, next + contactPerPage);
        setNext(next + contactPerPage);
    };

    return (
        <div className="container">
            {contactsList ?
                <div className="flex column align-center">
                    <div>
                        <ContactsList contacts={contactsToShow} />
                    </div>
                    <div>
                        <Button variant="contained" onClick={onLoadMore}>  {contactsToShow.length == 0 ? 'Load Contacts' : 'Load More Contacts'}</Button>
                    </div>
                </div>
                : <LoadingBox />}
        </div>
    )
}
