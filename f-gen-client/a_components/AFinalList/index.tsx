import { memo } from 'react';
import { FinalType } from '../../types/final';

import {
  ListWrapper,
  ListTitle,
  ListItem,
  ListItemId,
  ListItemName,
  ListItemSlug,
  ListItemEdit,
  ListItemDelete,
} from './styled';

function AFinalList({ configsList }: { configsList: FinalType[] }) {
  console.log(configsList);
  return (
    <ListWrapper>
      <ListTitle>List of configs</ListTitle>
      <ListItem className="names">
        <ListItemId>ID</ListItemId>
        <ListItemName>NAME</ListItemName>
        <ListItemSlug>SLUG</ListItemSlug>
        <ListItemEdit></ListItemEdit>
        <ListItemDelete></ListItemDelete>
      </ListItem>
      {configsList.map((config) => {
        const editHref = `/admin/edit/${config.slug}`;

        return (
          <ListItem key={config.id}>
            <ListItemId>{config.id}</ListItemId>
            <ListItemName>{config.name}</ListItemName>
            <ListItemSlug>{config.slug}</ListItemSlug>
            <ListItemEdit>
              <a href={editHref}>Edit</a>
            </ListItemEdit>
            <ListItemDelete>
              <a href="/">Delete</a>
            </ListItemDelete>
          </ListItem>
        );
      })}

      <ListItem className="add">
        <ListItemId></ListItemId>
        <ListItemName></ListItemName>
        <ListItemSlug></ListItemSlug>
        <ListItemEdit></ListItemEdit>
        <ListItemDelete>
          <a href="/admin/add">Add config</a>
        </ListItemDelete>
      </ListItem>
    </ListWrapper>
  );
}

export default memo(AFinalList);
