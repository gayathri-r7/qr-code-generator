import { useEffect, useState } from 'react';
import {useRef} from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const [qrUrl, setWord] = useState("");
  const [qrImg, setQrCode] = useState("");
  const [active, setQrCodeStatus] = useState("");
  
  useEffect(() => {
    setQrCode
  (`http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrUrl}`);
  },);

  function generateQR() {
    let qrValue = inputRef.current.value.trim();
    if(!qrValue) return;
    setWord(qrValue);
    setQrCodeStatus("active");
  }

  const inputChange = event => {
    if(event.target.value === '') setQrCodeStatus('inActive');
  };

  return (
    <div className={ `wrapper ${active} === 'active' ? "wrapper active" : "wrapper"` }>
      <header>
        <h1>QR Code Generator</h1>
        <p>Paste a url or enter text to create QR code</p>
      </header>
      <div class="form">
        <input ref={inputRef} onChange={inputChange} type="text" id="qr_code" name="qr_code" spellcheck="false" placeholder="Enter text or url" />
        <button onClick={generateQR}>Generate QR Code</button>
      </div>
      <div class="qr-code">
        <img src={qrImg} alt="qr-code" />
      </div>
    </div>
  );
}

export default App;
