import React from 'react';
import './habitWeek.css';
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const MarkedHabitDay = ({day}) => {
    return (<>
        {day.map((habit) => {
            return habit && (
                <OverlayTrigger
                    key={`cell${habit.id}`}
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