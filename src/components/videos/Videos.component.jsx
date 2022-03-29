import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../shared/loader/Loader.component';
import ApiRequest from '../../lib/ApiRequest';
import './Videos.css';

const fetchVideos = () =>
  new ApiRequest('/youtube/student', 'GET', null, null, true).request();

const VideosComponent = () => {
  const { data, isLoading } = useQuery('video', fetchVideos);
  if (isLoading) return <Loader />;
  return (
    <section className='py-[40px] flex flex-col centerAll px-5 text-slate-900 dark:text-slate-100'>
      <div>
        <h1 className='text-2xl capitalize'>{data?.videoTitle || ''}</h1>
      </div>
      <div className=' place-content-center mt-10'>
        {data?.videoLink ? (
          <iframe
            className='videos rounded-sm'
            width='800'
            height='500'
            src={`https://www.youtube.com/embed/${data?.videoLink}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen'
          ></iframe>
        ) : (
          <p className='text-slate-800 dark:text-white'>
            No videos found to display
          </p>
        )}
      </div>
    </section>
  );
};

export default VideosComponent;
