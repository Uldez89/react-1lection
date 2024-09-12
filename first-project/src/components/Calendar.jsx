import '../css/main.css';
import PropTypes from 'prop-types';
import createCalendarData, { prepareCalendarInfo } from '../logic/createCalendarData';
import React from 'react';

export default function Calendar( props ) {
    const { date } = props;

    const info = prepareCalendarInfo(date);
console.log(info);
    const weeks = createCalendarData(date);
console.log(weeks);
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{info.weekday}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{info.date}</div>
                    <div className="ui-datepicker-material-month">{info.monthCase}</div>
                    <div className="ui-datepicker-material-year">{info.year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{info.month}</span>&nbsp;<span className="ui-datepicker-year">{info.year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup >
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td className="ui-datepicker-other-month">27</td>
                        <td className="ui-datepicker-other-month">28</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr >
                        <td>6</td>
                        <td>7</td>
                        <td className="ui-datepicker-today" >8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
                                    


}