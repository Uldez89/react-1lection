
function getWeekDay(d) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  
    return days[d.getDay()];
  }

  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

function getFirstDayOfMonth(date) {
    let dateNow = new Date(date.getFullYear(), date.getMonth()+1, 0);
    console.log(dateNow)
    return (dateNow.getDate());
  }

function createCalendar(date) {
    let yyyy = date.getFullYear().toString();
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();
    let firstDayOfMonth = getFirstDayOfMonth(date);
    console.log(firstDayOfMonth)
    return (firstDayOfMonth);
}


export default function Calendar(props) {
    const { date } = props;

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{getWeekDay(date)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{date.toLocaleString('ru', {month: 'long' })}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{monthNames[date.getMonth()]}</span>&nbsp;
                    <span className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
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
                <tbody>
                  
                    <tr>
                        <td className="ui-datepicker-other-month">27</td>
                        <td className="ui-datepicker-other-month">28</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>7</td>
                        <td className="ui-datepicker-today">8</td>
                        <td>{createCalendar(date)}</td>
                        <td>{date.getMonth()}</td>
                        <td>{date.getDate()}</td>
                        <td></td>
                    </tr>
                </tbody>
            </ table>
        </ div>
    );
}