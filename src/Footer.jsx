import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { propTypes } from 'react-bootstrap/esm/Image';

const Footer = (props) => {
    return (
        <div>
         <Alert key="light" variant="light">
          {props.texto}
        </Alert>
        </div>
    )
}

export default Footer;