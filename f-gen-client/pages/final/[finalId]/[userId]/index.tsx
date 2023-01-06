import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import finalConfigs from '../../../../mock/finalConfigs.json';
import finalDataMock from '../../../../mock/finalData.json';

import { finalComponents } from '../../../../components/componentsList';

import { FinalDataType, FinalType } from '../../../../types/final';

const FinalContainer = dynamic(
  () => import('../../../../components/FinalContainer')
);

function FinalPage(): JSX.Element {
  const router = useRouter();

  const { finalId, userId } = router.query;

  const [currentConfig, setCurrentConfig] = useState<FinalType | undefined>();
  const currentData: FinalDataType = finalDataMock;

  useEffect(() => {
    finalConfigs.forEach((config) => {
      if (config.slug === finalId) {
        setCurrentConfig(config);
      }
    });
  }, [finalId]);

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

          <FinalContainer finalData={currentData}>
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
