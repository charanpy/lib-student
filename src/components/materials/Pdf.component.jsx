import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Loader from '../../components/shared/loader/Loader.component';
import { errorToaster } from '../../lib/toast';

const Pdf = ({ file }) => {
  console.log(file);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='bg-transparent'>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={() => errorToaster('Unable to load.Please try again')}
        options={{ workerSrc: '/pdf.worker.js' }}
        className='w-full materialPDF'
        loading={() => <Loader />}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1}>
            <p className='text-center bg-transparent text-white'>
              {index + 1} of {numPages}
            </p>
          </Page>
        ))}
      </Document>
    </div>
  );
};

export default Pdf;
