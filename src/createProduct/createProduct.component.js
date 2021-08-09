import React from 'react';
import QRCode from "react-qr-code";
import {v4 as uuidv4} from 'uuid';

const CreateProduct = () => {
    return <QRCode value={uuidv4()}/>
}

export default CreateProduct;