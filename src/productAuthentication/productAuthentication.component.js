import React from 'react';
import QrReader from 'react-qr-reader'

const ProductAuthentication = () => {
    const handleScan = data => {
        if (data) {
            alert(data)
        }
    }
    const handleError = err => {
        alert(err)
    }

    return (
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            // style={{ width: '100%' }}
        />
    )
}

export default ProductAuthentication;