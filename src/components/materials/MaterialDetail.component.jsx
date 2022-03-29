import React, { useState } from 'react';
import Popup from '../shared/popup/Popup.component';
import Pdf from './Pdf.component';
import CloseSVG from '../shared/svg/Close.svg';

const MaterialDetail = ({ open, description, file, title }) => {
  const [material, setMaterial] = useState(false);
  const onClick = () => {
    setMaterial((toggle) => !toggle);
  };
  return (
    <Popup open={open}>
      <div className='materialContainer relative space-y-4'>
        <p className='text-slate-700 dark:text-slate-100 leading-10 capitalize'>
          {description}
        </p>

        {/* <div className='
        w-[250px] h-[150px] rounded-lg overflow-hidden
        '
        > */}
        {/* <iframe
            src={`${file}`}
            title={title || 'material'}
            className='h-full overflow-hidden'
            style={{ width: '107%' }}
          /> */}
        <div
          className='border dark:border-text-slate-500 border-slate-600 p-2 rounded-lg w-1/4'
          onClick={onClick}
        >
          <p className='truncate dark:text-slate-100 text-slate-600'>
            {title}.pdf
          </p>
        </div>
        {/* <div className='absolute materialClick hidden'>
            <button onClick={() => setMaterial((state) => !state)}>
              <img src='/launch.svg' alt='open-file' />
            </button>
          </div>
        </div> */}
      </div>
      {material && (
        <div className='fixed row centerAll top-0 left-0 w-full h-full overflow-auto materialPopup p-8'>
          <div
            className='fixed bg-transparent right-2 top-2'
            onClick={() => setMaterial((state) => !state)}
          >
            <CloseSVG className='fill-red-500 dark:fill-red-500' />
          </div>
          <Pdf file={file} />
          {/* <iframe src={file} title={title} width='100%' height='100%' /> */}
          {/* <iframe src={`${file}`} title={title} width='100%' height='100%' /> */}
        </div>
      )}
    </Popup>
  );
};

export default MaterialDetail;
