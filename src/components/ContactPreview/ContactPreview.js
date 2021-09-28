import React from 'react'
import './ContactPreview.scss'

export default function ContactPreview(props) {
    const contact = props.contact
    return (
        <div className={`card container ${contact.isHighlight ? "isHighlight" : "isNotHighlight"}`} >
            <div className={'contact-preview'} >
                <img src={contact.picture.large} alt={contact.name.first}/>
                <p className="title">First Name: {" " + contact.name.first} </p>
                <p>Last Name:{" " + contact.name.last} </p>
                <p >Email: {contact.email}</p>
                <p >Phone: {contact.phone}</p>
                <span >Gender: {contact.gender === "male" ? <span><i className="fas fa-mars"></i></span> : <span> <i className="fas fa-neuter"></i> </span>}</span>
            </div>
        </div>
    )
}