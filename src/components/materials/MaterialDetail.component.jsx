import React, { useState } from 'react';
import Popup from '../shared/popup/Popup.component';
import Pdf from './Pdf.component';
import CloseSVG from '../shared/svg/Close.svg';
import { errorToaster } from '../../lib/toast';
import Loader from '../shared/loader/Loader.component';

const MaterialDetail = ({
  open,
  description,
  file,
  title,
  refetch,
  restrict,
  data,
}) => {
  const [material, setMaterial] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      if (restrict) {
        setLoading((toggle) => !toggle);
        const res = await refetch();
        if (res?.data?._id) return setMaterial((toggle) => !toggle);
        return errorToaster('Maximum view count reached for requested PDF');
      }
      setMaterial((toggle) => !toggle);
    } catch (error) {
      if (loading) setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Popup open={open}>
      <div className='materialContainer relative space-y-4'>
        <p className='text-slate-700 dark:text-slate-100 leading-10 capitalize'>
          {description}
        </p>
        {!loading ? (
          <div
            className='border dark:border-text-slate-500 border-slate-600 p-2 rounded-lg w-1/4'
            onClick={onClick}
          >
            <p className='truncate dark:text-slate-100 text-slate-600'>
              {title}.pdf
            </p>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      {material && (
        <div className='fixed row centerAll top-0 left-0 w-full h-full overflow-auto materialPopup p-8'>
          <div
            className='fixed bg-transparent right-3 top-3 stack'
            onClick={() => setMaterial((state) => !state)}
          >
            <CloseSVG className='fill-red-500 dark:fill-red-500 ' />
          </div>
          <Pdf file={data?.file?.url || file} />
        </div>
      )}
    </Popup>
  );
};

export default MaterialDetail;
