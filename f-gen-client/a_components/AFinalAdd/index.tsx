import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { addConfig } from '../../api/addConfgi';
import { FinalType } from '../../types/final';
import {
  AddWrapper,
  AddTitle,
  AddOptions,
  AddItem,
  AddName,
  AddComponentFields,
  AddValue,
  AddProperties,
  AddAction,
  AddSaveButton,
} from './styled';

const EMPTY_CONFIG: FinalType = {
  id: '',
  name: '',
  slug: '',
  meta: {
    title: '',
    description: '',
  },
  components: [],
};

function AFinalAdd({
  componentsList,
}: {
  componentsList: { id: string; name: string }[];
}) {
  const router = useRouter();

  const [config, setConfig] = useState<FinalType>(EMPTY_CONFIG);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      config.name !== '' &&
      config.slug !== '' &&
      config.components.length > 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [config]);

  const handleChangeData = (e: any, field: string, category?: string) => {
    const currentValue = category
      ? {
          [category]: {
            ...config[category],
            [field]: e.target.value,
          },
        }
      : { [field]: e.target.value };

    const currentConfig = {
      ...config,
      ...currentValue,
    };

    setConfig(currentConfig);
  };

  const addComponentHandler = () => {
    const currentConfig = { ...config };
    const currentIndex = `${config.components.length}`;

    currentConfig.components.push({
      id: currentIndex,
      c_id: '',
      name: '',
      properties: {},
    });

    setConfig(currentConfig);
  };

  const componentChangeHandler = (e: any, index: number) => {
    const currentConfig = { ...config };
    const currentName = componentsList.filter(
      (item) => item.id === e.target.value
    );

    currentConfig.components[index].c_id = e.target.value;
    currentConfig.components[index].name = currentName[0].name;
    currentConfig.components[index].properties = {};

    setConfig(currentConfig);
  };

  const propertiesChangeHandler = (e: any, index: number) => {};

  const createConfigHandler = async () => {
    await addConfig(config);

    router.push('/admin');
  };

  return (
    <AddWrapper>
      <AddTitle>Add new config</AddTitle>
      <AddOptions>
        <AddItem className="names">
          <AddName>NAME</AddName>
          <AddValue>VALUE</AddValue>
        </AddItem>
        <AddItem>
          <AddName>Name:</AddName>
          <AddValue>
            <input
              type="text"
              onChange={(e) => handleChangeData(e, 'name')}
              value={config.name ? config.name : ''}
            />
          </AddValue>
        </AddItem>
        <AddItem>
          <AddName>Slug:</AddName>
          <AddValue>
            <input
              type="text"
              onChange={(e) => handleChangeData(e, 'slug')}
              value={config.slug ? config.slug : ''}
            />
          </AddValue>
        </AddItem>
        <AddItem className="subnames">
          <AddName>Meta</AddName>
        </AddItem>
        <AddItem>
          <AddName>Title:</AddName>
          <AddValue>
            <input
              type="text"
              onChange={(e) => handleChangeData(e, 'title', 'meta')}
              value={config.meta?.title ? config.meta.title : ''}
            />
          </AddValue>
        </AddItem>
        <AddItem>
          <AddName>Description:</AddName>
          <AddValue>
            <input
              type="text"
              onChange={(e) => handleChangeData(e, 'description', 'meta')}
              value={config.meta?.description ? config.meta.description : ''}
            />
          </AddValue>
        </AddItem>
        <AddItem className="subnames">
          <AddName>Components</AddName>
        </AddItem>

        {config.components.map((config, index) => {
          return (
            <AddItem key={config.id}>
              <AddName>Component:</AddName>
              <AddComponentFields>
                <AddValue>
                  <select onChange={(e) => componentChangeHandler(e, index)}>
                    {componentsList.map(
                      (item: { id: string; name: string }) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      }
                    )}
                  </select>
                </AddValue>
                {config.name !== '' && (
                  <AddProperties>
                    <textarea
                      value={JSON.stringify(config.properties)}
                      onChange={(e) => propertiesChangeHandler(e, index)}
                    ></textarea>
                  </AddProperties>
                )}
              </AddComponentFields>
            </AddItem>
          );
        })}

        <AddItem>
          <AddName></AddName>
          <AddValue>
            <AddAction onClick={addComponentHandler}>Add Component</AddAction>
          </AddValue>
        </AddItem>
      </AddOptions>

      {isValid && (
        <AddSaveButton onClick={createConfigHandler}>
          Create config
        </AddSaveButton>
      )}
    </AddWrapper>
  );
}

export default AFinalAdd;
