import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = ({ variant = "danger", children }) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

export default Message
