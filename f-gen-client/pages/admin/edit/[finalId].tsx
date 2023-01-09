import { GetServerSidePropsContext } from 'next';

import { getConfigs } from '../../../api/finalConfigs';
import { FinalType } from '../../../types/final';

import AFinalEdit from '../../../a_components/AFinalEdit';
import { AdminWrapper } from '../../../a_components/AFinalNav/styled';
import AFinalNav from '../../../a_components/AFinalNav';

function AdminEditPage({ currentConfig }: { currentConfig: FinalType }) {
  return (
    <AdminWrapper>
      <AFinalNav />
      <AFinalEdit currentConfig={currentConfig} />
    </AdminWrapper>
  );
}

export default AdminEditPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { finalId } = ctx.query;

  const finalConfigs: FinalType[] = await getConfigs();

  const currentConfig = finalConfigs.filter(
    (config) => config.slug === finalId
  );

  return {
    props: {
      currentConfig: currentConfig[0],
    },
  };
}
