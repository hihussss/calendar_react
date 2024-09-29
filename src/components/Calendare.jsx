import React from 'react'

export const Calendare = (probs) => {
   
  const [dayweek,day,mouth,year] = probs.date
  
  return (
    <div className={"ui-datepicker"}>
  <div className={"ui-datepicker-material-header"}>
    <div className={"ui-datepicker-material-day"}>{dayweek.slice(0,1).toUpperCase() + dayweek.slice(1,)}</div>
    <div className={"ui-datepicker-material-date"}>
      <div className={"ui-datepicker-material-day-num"}>{day}</div>
      <div className={"ui-datepicker-material-month"}>{mouth}</div>
      <div className={"ui-datepicker-material-year"}>{year}</div>
    </div>
  </div>
  <div className={"ui-datepicker-header"}>
    <div className={"ui-datepicker-title"}>
      <span className={"ui-datepicker-month"}>{mouth[mouth.length - 1]=== "я"? mouth.slice(0, -1) + "ь": mouth.slice(0, -1)}</span>&nbsp;<span className={"ui-datepicker-year"}>{year}</span>
    </div>
  </div>
  <table className={"ui-datepicker-calendar"}>
    <colgroup>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
      <col className={"ui-datepicker-week-end"}></col>
      <col className={"ui-datepicker-week-end"}></col>
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
        <td className={"ui-datepicker-other-month"}>26</td>
        <td className={"ui-datepicker-other-month"}>27</td>
        <td className={"ui-datepicker-other-month"}>28</td>
        <td className={"ui-datepicker-other-month"}>29</td>
        <td className={"ui-datepicker-other-month"}>30</td>
        <td className={"ui-datepicker-other-month"}>31</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      <tr>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
      </tr>
      <tr>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
      </tr>
      <tr>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td className={"ui-datepicker-today"}>29</td>
      </tr>
      <tr>
        <td>30</td>
        <td className={"ui-datepicker-other-month"}>1</td>
        <td className={"ui-datepicker-other-month"}>2</td>
        <td className={"ui-datepicker-other-month"}>3</td>
        <td className={"ui-datepicker-other-month"}>4</td>
        <td className={"ui-datepicker-other-month"}>5</td>
        <td className={"ui-datepicker-other-month"}>6</td>
      </tr>
      
    </tbody>
  </table>
</div>
  )
}
