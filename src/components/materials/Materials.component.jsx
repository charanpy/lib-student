import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import Loader from '../shared/loader/Loader.component';
import MaterialCard from './MaterialCard.component';

const fetchMaterials = () =>
  new ApiRequest('/material/student', 'GET', null, null, true).request();

const MaterialsComponent = () => {
  const { data, isLoading } = useQuery(['material'], fetchMaterials);
  if (isLoading) return <Loader />;
  return (
    <div className='space-y-4'>
      {data?.map((material) => (
        <MaterialCard key={material?._id} material={material} />
      ))}
    </div>
  );
};

export default MaterialsComponent;
