import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  margin-top: ${p => p.theme.space[5]}px;
  width: 300px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.textDark};
  background-color: ${p => p.theme.colors.body};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticListItems = styled.li`
  color: ${p => p.theme.colors.card};
  background-color: ${() => getRandomColor()};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  width: 60px;
  text-align: center;
`;

export const StatisticListLab = styled.span`
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const StatisticListPercent = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
`;

function getRandomColor() {
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += [Math.floor(Math.random() * 8)];
  }
  return color;
}
