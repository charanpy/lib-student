import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import Loader from '../shared/loader/Loader.component';
import MaterialCard from './MaterialCard.component';

const fetchMaterials = (access) => () =>
  new ApiRequest(
    `/material/student?restrict=${access}`,
    'GET',
    null,
    null,
    true
  ).request();

const MaterialsComponent = () => {
  const { data, isLoading } = useQuery(['material'], fetchMaterials('public'));
  const { data: privateData } = useQuery(
    ['materialPrivate'],
    fetchMaterials('private'),
    {
      enabled: !!data,
    }
  );
  if (isLoading) return <Loader />;
  return (
    <div className='space-y-4'>
      {data?.map((material) => (
        <MaterialCard key={material?._id} material={material} />
      ))}
      <>
        {privateData?.map((material) => (
          <MaterialCard key={material?._id} material={material} restrict />
        ))}
      </>
    </div>
  );
};

export default MaterialsComponent;
