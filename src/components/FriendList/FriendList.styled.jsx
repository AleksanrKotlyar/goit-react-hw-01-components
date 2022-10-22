import styled from 'styled-components';

export const FriensdsListUl = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  row-gap: ${p => p.theme.space[3]}px;
  width: 250px;
`;

export const FriendListItemInfo = styled.li`
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.card};
  box-shadow: 10px 5px 5px ${p => p.theme.colors.text};
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.status ? 'green' : 'red')};
  width: 15px;
  height: 15px;
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
`;
