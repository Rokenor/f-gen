import { ComponentType } from 'react';

import AFinalAdd from '../../../a_components/AFinalAdd';
import AFinalNav from '../../../a_components/AFinalNav';
import { AdminWrapper } from '../../../a_components/AFinalNav/styled';

import { componentsList } from '../../../components/componentsList';

function AdminAddPage({
  componentsList,
}: {
  componentsList: { id: string; name: string }[];
}) {
  return (
    <AdminWrapper>
      <AFinalNav />
      <AFinalAdd componentsList={componentsList} />
    </AdminWrapper>
  );
}

export default AdminAddPage;

export async function getServerSideProps() {
  return {
    props: {
      componentsList,
    },
  };
}
