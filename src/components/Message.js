import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({ variant, children }) {
    return (
        <Alert variant={variant} dismissible={true} transition={false}>
            {children}
        </Alert>
    )
}

export default Message