import React from 'react';
import './nepalstatus.css';

const Nepalstatus = props =>
{
    return(
        <div className="Nepalstatus-box">
            <h1 className="totalnumber">{props.total}</h1>
            <p className="about">{props.about}</p>
        </div>
    );
}
export default Nepalstatus;