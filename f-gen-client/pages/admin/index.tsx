import { useState } from 'react';

import { FinalType } from '../../types/final';
import { getConfigs } from '../../api/finalConfigs';

import AFinalList from '../../a_components/AFinalList';
import AFinalNav from '../../a_components/AFinalNav';
import { AdminWrapper } from '../../a_components/AFinalNav/styled';

function AdminPage({ finalConfigs }: { finalConfigs: FinalType[] }) {
  const [configsList, setConfigsList] = useState(finalConfigs);

  return (
    <AdminWrapper>
      <AFinalNav />
      <AFinalList configsList={configsList} />
    </AdminWrapper>
  );
}

export default AdminPage;

export async function getServerSideProps() {
  const finalConfigs: FinalType[] = await getConfigs();

  return {
    props: {
      finalConfigs,
    },
  };
}
