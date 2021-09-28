import React, { useState } from 'react'
import ContactPreview from '../ContactPreview/ContactPreview'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import LoadingBox from './../LoadingBox/LoadingBox';
import './ContactsList.scss'

export default function ContactsList(props) {
    const contacts = props.contacts
    const [gender, setGender] = useState('all')
    const searchTerm = useSelector(state => state.contactReducer.searchInput)
    return (
        <div>
            <div className="text-center">
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="all" control={<Radio />} labelPlacement="start" onClick={() => setGender('all')} label="All" />
                        <FormControlLabel value="male" control={<Radio />} labelPlacement="start" onClick={() => setGender('male')} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} labelPlacement="start" onClick={() => setGender('female')} label="Female" />
                    </RadioGroup>
                </FormControl>
            </div>
            {contacts ? (
                <ul className="contacts-list ">
                    {contacts.filter(contact => {
                        if (searchTerm === "") {
                            contact.isHighlight = false
                        } else if (
                            contact.name.first.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                            contact.name.last.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                            contact.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                            contact.phone.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                        ) { contact.isHighlight = true } else { contact.isHighlight = false }
                        if (gender === "all") {
                            return contact
                        } else if (gender === "male") {
                            return contact.gender === 'male'
                        } else {
                            return contact.gender === 'female'
                        }
                    }).map(contact =>
                        <li key={contact.id.value}><ContactPreview key={contact.id.value} contact={contact} /> </li>
                    )}
                </ul>
            ) : <LoadingBox />}
        </div>
    )
}
