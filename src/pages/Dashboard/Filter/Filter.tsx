import { format } from 'date-fns';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import DateRangePicker, { DateRange } from 'rsuite/DateRangePicker';
import { datesSelector, setFilterDates } from 'src/stores/filter/filterSlice';
import { useAppDispatch } from 'src/stores/stores';
import 'rsuite/DateRangePicker/styles/index.css';

//clean if no data for selected range
//fix button theme

const Filter = () => {
  const dispatch = useAppDispatch();
  const dates = useSelector(datesSelector);

  const cleanFilter = () => {
    dispatch(setFilterDates(dates));
  };

  const filterDates = (dateRange: DateRange) => {
    const formattedDateRange = dateRange.map((date) => new Date(format(date, 'yyyy-MM-dd')));

    const filtredDates = dates.filter((date) => {
      const dateToCompare = new Date(date);
      return dateToCompare >= formattedDateRange[0] && dateToCompare <= formattedDateRange[1];
    });

    if (isEmpty(filtredDates)) {
      alert('No data for selected range');
      return;
    }

    dispatch(setFilterDates(filtredDates));
  };

  return <DateRangePicker style={{ marginBottom: 10 }} onOk={filterDates} onClean={cleanFilter} ranges={[]} />;
};

export { Filter };
