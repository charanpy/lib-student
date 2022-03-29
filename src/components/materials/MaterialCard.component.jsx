import React, { useState, memo } from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import { formatDate } from '../book-card/BookCard.component';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import MaterialSVG from '../shared/svg/Material.svg';
import MaterialDetail from './MaterialDetail.component';
import './materials.css';

const fetchFileView = (id) => () =>
  new ApiRequest(`/file-view/${id}`, 'GET', null, null, true).request();

const MaterialCard = ({ material, restrict = false }) => {
  const { data, refetch } = useQuery(
    ['materialPrivate', material?._id],
    fetchFileView(material?._id),
    {
      enabled: false,
    }
  );
  const [open, setOpen] = useState(false);

  return (
    <section className='cursor-pointer bg-white dark:bg-[#0A121A] w-full shadow-lg rounded-lg p-4 flex flex-col space-y-4'>
      <div className='row items-center space-x-6  justify-between'>
        <div className='space-x-2 md:space-x-6 row items-center '>
          <div className='rounded-full bg-rose-500 p-2 row centerAll'>
            <MaterialSVG className='fill-slate-100' />
          </div>
          <h1 className='text-slate-900 dark:text-slate-200 text-lg 2xl:text-xl capitalize'>
            {material?.title}
          </h1>
        </div>

        <p
          className='text-green-500 row space-x-2 items-center'
          onClick={() => setOpen((toggle) => !toggle)}
        >
          {formatDate(material?.createdAt)} <DownArrowSVG open={open} />
        </p>
      </div>

      <MaterialDetail
        open={open}
        file={material?.file?.url}
        title={material?.title}
        description={material?.description}
        restrict={restrict}
        refetch={refetch}
        data={data}
      ></MaterialDetail>
    </section>
  );
};

export default memo(MaterialCard);
