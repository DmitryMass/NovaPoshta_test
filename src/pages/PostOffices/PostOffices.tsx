import { FC } from 'react';
import GetOfficesForm from '@/components/postOffices/GetOfficesForm';
import DisplayOffices from '@/components/postOffices/DisplayOffices';

const PostOffices: FC = () => {
  return (
    <div className='grow'>
      <GetOfficesForm />
      <DisplayOffices />
    </div>
  );
};

export default PostOffices;
