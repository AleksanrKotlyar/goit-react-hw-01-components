import PropTypes from 'prop-types';
import { FriendListItemInfo, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListItemInfo key={id}>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendListItemInfo>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
