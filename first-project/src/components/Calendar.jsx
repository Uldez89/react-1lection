import '../css/main.css';
import PropTypes from 'prop-types';
import createCalendarData, {prepareCalendarInfo} from '../logic/createCalendarData';

export default function Calendar(props) {
    const { date } = props;
    console.log(date);

}