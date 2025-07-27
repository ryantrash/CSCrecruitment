import { QRCodeSVG } from 'qrcode.react';

export default function QrCode({ link, size = 256 }) {
    const qrCodeValue = link || '';
    return (
        <div>
          <QRCodeSVG
            value={qrCodeValue}
            size={size}
            bgColor="#222" 
            fgColor="#0f0" 
            level="L" 
          />
        </div>
      );
}