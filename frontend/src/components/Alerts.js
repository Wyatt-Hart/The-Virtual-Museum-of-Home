import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './components.css';


const React = require('react');

const alertedit = 'Only authors can edit exhibits' 


export function Alert() {
    return (
    <div className='alert-edit'>{alertedit}</div>
    )
}