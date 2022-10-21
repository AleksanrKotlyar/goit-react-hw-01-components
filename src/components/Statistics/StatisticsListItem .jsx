import PropTypes from 'prop-types';
import {
  StatisticListItems,
  StatisticListLab,
  StatisticListPercent,
} from './Statistics.styled';

export const StatisticsListItem = ({ id, label, percentage }) => {
  return (
    <StatisticListItems key={id}>
      <StatisticListLab>{label}</StatisticListLab>
      <StatisticListPercent>{percentage}</StatisticListPercent>
    </StatisticListItems>
  );
};

StatisticsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  labe: PropTypes.string,
  percentage: PropTypes.number,
};
