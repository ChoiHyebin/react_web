import './Schedule.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

const Schedule = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="schedule-container">
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default Schedule;