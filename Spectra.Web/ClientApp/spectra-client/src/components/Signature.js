"use client";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import Button from "./button";
import { useMediaQuery } from "@mantine/hooks";

function Signature({ setSignatureData,close }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sigCanvas = useRef({});
  const saveSignature = () => {
    const signature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setSignatureData(signature);
    close()
  };

  return (
    <div className="h-full w-full">
      <div className=" w-[280px] mdl:w-[560px] max-w-full mx-auto h-[172px] mdl:h-[356px] border-4 border-grayLight rounded-xl">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            width: isMobile ? 280 : 560,
            height: isMobile ? 172 : 356,
            className: "sigCanvas",
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-3 mdl:gap-7 mt-8 mdl:mt-11">
        <Button
          variant="secondary"
          className="h-[60px] flex-1 font-Bold text-base mdl:text-xl"
          onClick={saveSignature}
        >
          ارسال{" "}
        </Button>
        <Button
          className="h-[60px] flex-1 font-Bold text-base mdl:text-xl"
          onClick={() => sigCanvas.current.clear()}
        >
          اعادة المحاولة
        </Button>
      </div>
    </div>
  );
}

export default Signature;

/* 
**********for Use*********
 const [signatureData, setSignatureData] = useState(null);
   <Signature setSignatureData={setSignatureData} />
      {signatureData && (
        <div>
          <Image
            priority
            width={600}
            height={360}
            className="max-w-[130px] h-[60px] object-contain"
            alt="Signature"
            src={signatureData}
          />
        </div>
      )}

*/
