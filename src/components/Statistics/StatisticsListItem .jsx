import PropTypes from 'prop-types';
import {
  StatisticListItems,
  StatisticListLab,
  StatisticListPercent,
} from './Statistics.styled';

export const StatisticsListItem = ({ label, percentage }) => {
  return (
    <StatisticListItems>
      <StatisticListLab>{label}</StatisticListLab>
      <StatisticListPercent>{percentage}</StatisticListPercent>
    </StatisticListItems>
  );
};

StatisticsListItem.propTypes = {
  labe: PropTypes.string,
  percentage: PropTypes.number,
};
