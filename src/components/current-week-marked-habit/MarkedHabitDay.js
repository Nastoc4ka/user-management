import React from 'react';
import './currentWeekMarkedHabit.css';
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const MarkedHabitDay = ({day}) => {
    //console.log(name, value, style);
    return (<>
        {day.map((habit) => {
            return habit && (
                <OverlayTrigger
                    key={`cell${habit.id}`}
                    placement="left"
                    delay={{show: 250, hide: 400}}
                    overlay={<Tooltip id="button-tooltip">
                        {`${habit.name}, today - ${habit.value}`}
                    </Tooltip>}>
                        <span className='pl-2 pr-2' style={{backgroundColor: habit.style}}>
                            {`${habit.value}`}<br/>
                        </span>
                </OverlayTrigger>
            )
        })}
    </>)
};

export default MarkedHabitDay;