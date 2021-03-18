import React, {useState} from 'react';
import HabitCreate from "./HabitCreate";
import {Button} from "react-bootstrap";

export const AddHabit = () => {
    const [displayForm, setDisplayForm] = useState(false);
    return (<>
        {displayForm ? <HabitCreate hide={() => setDisplayForm(false)}/> :
            <Button variant="success" onClick={() => setDisplayForm(true)}>ADD NEW</Button>}
    </>)
};