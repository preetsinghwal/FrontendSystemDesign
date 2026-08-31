import React from 'react';
import './App.css';

const AccordianItem = ({title, description, isOpen, setOpenIndex}) => {
    return (
        <div className='accordian-item-wrapper'>
            <div className='accordian-title' onClick={()=> setOpenIndex((isOpen)=> !isOpen)}>
                <span>{title}</span>
                <span>⬇️</span>
            </div>
            {isOpen && <div className='accordian-description'>{description}</div>}
        </div>
    )
}

export default AccordianItem
