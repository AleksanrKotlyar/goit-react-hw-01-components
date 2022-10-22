import PropTypes from 'prop-types';
import { StatisticsListItem } from './StatisticsListItem ';
import {
  StatisticsContainer,
  Title,
  StatisticsList,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
