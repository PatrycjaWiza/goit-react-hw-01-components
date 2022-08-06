import { StatList, Statistic, Title, Item } from './StatisticsStyles';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {(title = '' ? null : <Title>{title}</Title>)}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <span>{label}</span>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
