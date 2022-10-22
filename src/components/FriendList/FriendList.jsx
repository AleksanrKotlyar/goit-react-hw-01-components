import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriensdsListUl } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriensdsListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </FriensdsListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
