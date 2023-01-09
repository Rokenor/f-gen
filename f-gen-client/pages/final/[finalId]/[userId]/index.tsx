import dynamic from 'next/dynamic';
import Head from 'next/head';

import finalDataMock from '../../../../mock/finalData.json';

import { finalComponents } from '../../../../components/componentsList';

import { FinalDataType, FinalType } from '../../../../types/final';
import { GetServerSidePropsContext } from 'next';

import { getConfigs } from '../../../../api/finalConfigs';

const FinalContainer = dynamic(
  () => import('../../../../components/FinalContainer')
);

function FinalPage({
  currentConfig,
  finalData,
  finalId,
  userId,
}: {
  currentConfig: FinalType;
  finalData: FinalDataType;
  finalId: string;
  userId: string;
}): JSX.Element {
  return (
    <>
      {currentConfig && (
        <>
          <Head>
            <title>{currentConfig.meta.title}</title>
            <meta
              name="description"
              content={currentConfig.meta.description}
            ></meta>
          </Head>

          <div>
            finalId: {finalId}, userId: {userId}
          </div>

          <FinalContainer finalData={finalData}>
            {currentConfig.components.map((component) => {
              const CurrentComponent = finalComponents[component.name];
              return (
                <CurrentComponent
                  key={component.id}
                  properties={component.properties}
                />
              );
            })}
          </FinalContainer>
        </>
      )}
    </>
  );
}

export default FinalPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { finalId, userId } = ctx.query;

  const finalConfigs: FinalType[] = await getConfigs();

  const currentConfig = finalConfigs.filter(
    (config) => config.slug === finalId
  );

  const finalData: FinalDataType = finalDataMock;

  return {
    props: {
      currentConfig: currentConfig[0],
      finalData,
      finalId,
      userId,
    },
  };
}
