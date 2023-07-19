import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Sidebar from '../side/Sidebar';

const QRGenerator = () => {
  const [identity, setIdentity] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleInputChange = (e) => {
    setIdentity(e.target.value);
  };

  const handleGenerateQR = () => {
    setShowQR(true);
  };

  return (
    <div>
    <Sidebar />
      <br/><input type="text" value={identity} onChange={handleInputChange} size={100} style={{ left: '100px' }}/><br/><br/>
      <button onClick={handleGenerateQR}>Generate QR</button><br/><br/><br/>  
      {showQR && <QRCode value={identity} />}
    </div>
  );
};

export default QRGenerator;