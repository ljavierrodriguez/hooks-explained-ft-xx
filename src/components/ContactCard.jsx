import React from 'react'
import { FaRecycle } from 'react-icons/fa';

const ContactCard = ({ name, lastname, onClick }) => {
  return (
    <div className="d-flex w-100">
        <div className="d-flex justify-content-between w-100">
            <span className="text-primary">{name} {lastname}</span>
            <span onClick={onClick}>
                <FaRecycle />
            </span>
        </div>
    </div>
  )
}

export default ContactCard