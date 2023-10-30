import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ setMessage, children }) => {
    const token = localStorage.getItem('token');
    if (token === null) {
        setMessage('Ouch: jwt expired')
        return <Navigate to='/' replace />
    }
    return children
}

export default Protected;