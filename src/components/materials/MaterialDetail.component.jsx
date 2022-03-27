import React, { useState } from 'react';
import Popup from '../shared/popup/Popup.component';
import CloseSVG from '../shared/svg/Close.svg';

const MaterialDetail = ({ open, description, file, title }) => {
  const [material, setMaterial] = useState(false);
  return (
    <Popup open={open}>
      <div className='materialContainer relative'>
        <p className='text-slate-700 dark:text-slate-100 leading-10 capitalize'>
          {description}
        </p>

        <div className='w-[250px] h-[150px] rounded-lg overflow-hidden material'>
          <iframe
            src={file}
            title={title || 'material'}
            className='h-full overflow-hidden'
            style={{ width: '107%' }}
          />
          <div className='absolute materialClick hidden'>
            <button onClick={() => setMaterial((state) => !state)}>
              <img src='/launch.svg' alt='open-file' />
            </button>
          </div>
        </div>
      </div>
      {material && (
        <div className='fixed top-0 left-0 w-full h-full materialPopup p-8'>
          <div
            className='absolute right-2 top-2'
            onClick={() => setMaterial((state) => !state)}
          >
            <CloseSVG className='fill-red-500 dark:fill-red-500' />
          </div>
          <iframe src={file} title={title} width='100%' height='100%' />
        </div>
      )}
    </Popup>
  );
};

export default MaterialDetail;
