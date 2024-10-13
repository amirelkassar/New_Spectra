import React, { useRef } from 'react'
import SignatureCanvas from "react-signature-canvas";

function Drow({onSubmit }) {
    const sigCanvas = useRef({});

    // لتحويل الرسم إلى صورة Base64 عند الإرسال
    const saveSignature = () => {
      const signature = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      onSubmit(signature); // إرسال التوقيع للصورة كـ base64
    };
  
  return (
    <div>
    <SignatureCanvas
      ref={sigCanvas}
      penColor="black"
      canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
    />
    <button onClick={saveSignature}>إرسال التوقيع</button>
    <button onClick={() => sigCanvas.current.clear()}>مسح</button>
  </div>
  )
}

export default Drow