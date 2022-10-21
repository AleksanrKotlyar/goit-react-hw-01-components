import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 210px;
  background-color: ${p => p.theme.colors.body};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
`;

export const Picture = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  height: 70px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m * 1.3}px;
  font-weight: ${p => p.theme.fontWeigth.bold};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.text};
`;

export const Stats = styled.ul`
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.tableHeader};
  display: flex;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(208px / 3);
  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.textDark};
  }
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeigth.bold};
  color: ${p => p.theme.colors.textDark};
`;
