import React, { Fragment, useState } from 'react';
import QrReader from 'react-qr-scanner'

const QRscan = () => {
    const [delay, setDelay] = useState(100);
    const [result, setResult] = useState('No result');
    const handleScan = (data) => {
        // setResult(data);
    }
    const handleError = (err) => {
        console.error(err)
    }

    const previewStyle = {
        height: 240,
        width: 320,
    }
    return (
        <Fragment>
            <QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            <p>{result}</p>
        </Fragment>
    )
}

export default QRscan;