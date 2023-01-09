import { useState } from 'react';
import { FinalType } from '../../types/final';

import {
  EditWrapper,
  EditTitle,
  ConfigItem,
  ConfigItemName,
  ConfigItemValue,
  ConfigItemComponents,
  ComponentItem,
  ComponentFields,
  ComponentField,
  ComponentFieldName,
  ComponentFieldValue,
  ComponentActions,
  ComponentAction,
} from './styled';

function AFinalEdit({ currentConfig }: { currentConfig: FinalType }) {
  const [editableConfig, setEditableConfig] = useState(currentConfig);

  return (
    <EditWrapper>
      <EditTitle>Edit &apos;{currentConfig.name}&apos; config</EditTitle>
      <ConfigItem className="names">
        <ConfigItemName>NAME</ConfigItemName>
        <ConfigItemValue>VALUE</ConfigItemValue>
      </ConfigItem>
      <ConfigItem>
        <ConfigItemName>ID:</ConfigItemName>
        <ConfigItemValue>{editableConfig.id}</ConfigItemValue>
      </ConfigItem>
      <ConfigItem>
        <ConfigItemName>Name:</ConfigItemName>
        <ConfigItemValue>{editableConfig.name}</ConfigItemValue>
      </ConfigItem>
      <ConfigItem>
        <ConfigItemName>Slug:</ConfigItemName>
        <ConfigItemValue>/{editableConfig.slug}</ConfigItemValue>
      </ConfigItem>
      <ConfigItem>
        <ConfigItemName>Meta title:</ConfigItemName>
        <ConfigItemValue>
          <input type="text" value={editableConfig.meta.title} />
        </ConfigItemValue>
      </ConfigItem>
      <ConfigItem>
        <ConfigItemName>Meta description:</ConfigItemName>
        <ConfigItemValue>
          <input type="text" value={editableConfig.meta.description} />
        </ConfigItemValue>
      </ConfigItem>
      <ConfigItem>
        <ConfigItemName>Components:</ConfigItemName>
        <ConfigItemComponents>
          {editableConfig.components.map((component) => {
            return (
              <ComponentItem key={component.id}>
                <ComponentFields>
                  <ComponentField>
                    <ComponentFieldName>C_ID:</ComponentFieldName>
                    <ComponentFieldValue>{component.c_id}</ComponentFieldValue>
                  </ComponentField>
                  <ComponentField>
                    <ComponentFieldName>Name:</ComponentFieldName>
                    <ComponentFieldValue>{component.name}</ComponentFieldValue>
                  </ComponentField>
                  <ComponentField>
                    <ComponentFieldName>Properties:</ComponentFieldName>
                    <ComponentFieldValue>
                      <textarea value={JSON.stringify(component.properties)} />
                    </ComponentFieldValue>
                  </ComponentField>
                </ComponentFields>
                <ComponentActions>
                  <ComponentAction>
                    <a>Delete component</a>
                  </ComponentAction>
                </ComponentActions>
              </ComponentItem>
            );
          })}
          <ComponentItem>
            <ComponentFields></ComponentFields>
            <ComponentActions>
              <ComponentAction>
                <a>Add component</a>
              </ComponentAction>
            </ComponentActions>
          </ComponentItem>
        </ConfigItemComponents>
      </ConfigItem>
    </EditWrapper>
  );
}

export default AFinalEdit;
