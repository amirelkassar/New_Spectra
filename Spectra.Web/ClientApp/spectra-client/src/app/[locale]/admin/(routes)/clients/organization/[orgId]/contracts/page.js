'use client';
import DeleteIcon from '@/assets/icons/delete';
import PdfIcon from '@/assets/icons/pdf';
import UploadPdfIcon from '@/assets/icons/uploadPdf';
import WordIcon from '@/assets/icons/word';
import Card from '@/components/card';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import React, { useState } from 'react';

function Page() {
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]); // Store the uploaded file
    }
  };

  const getFileIcon = (type) => {
    if (type === MIME_TYPES.pdf) {
      return <PdfIcon className={' w-8 mdl:w-11 h-auto'} />;
    } else if (type === MIME_TYPES.doc || type === MIME_TYPES.docx) {
      return <WordIcon className={' w-8 mdl:w-11 h-auto'} />;
    } else {
      return null;
    }
  };
  return (
    <Card>
      <h2 className='text-base mb-7 lg:text-xl font-bold'>
        عقد المنظمة
      </h2>
      <div className='my-10'>
        {file ? (
          <div className='flex items-center gap-5 justify-between'>
            <div className='flex items-center gap-4'>
              {getFileIcon(file.type)}
              <div>
                <h4 className='text-sm mdl:text-xl font-Regular mb-1'>
                  {file.name}
                </h4>
                <p className='text-xs mdl:text-base font-Regular text-grayDark'>
                  {Math.round(file.size / 1024)} KB
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setFile(null);
              }}
              className='border duration-300 hover:shadow-md border-red rounded-md flex items-center justify-center p-2 size-7 mdl:size-8'
            >
              <DeleteIcon />
            </button>
          </div>
        ) : (
          <div className='w-[560px] max-w-[90%] mx-auto'>
            <Dropzone
              onDrop={handleDrop}
              // onReject={(files) => console.log("Rejected files:", files)}
              maxFiles={1}
              accept={[
                MIME_TYPES.pdf,
                MIME_TYPES.doc,
                MIME_TYPES.docx,
              ]}
              multiple={false}
              classNames={{
                root: 'border h-[160px] mdl:h-[240px] border-grayDark border-dashed rounded-xl p-5 text-center',
                inner: 'h-full',
              }}
            >
              <div className='flex items-center flex-col h-full gap-5 justify-center'>
                <UploadPdfIcon
                  className={'w-11 h-auto mdl:w-[70px]'}
                />
                <h3 className='text-xs mdl:text-base text-center font-SemiBold'>
                  اسحب الملفات وأفلتها أو{' '}
                  <span className='text-greenMain underline'>
                    اضغط هنا
                  </span>
                </h3>
              </div>
            </Dropzone>
          </div>
        )}
      </div>
    </Card>
  );
}

export default Page;
