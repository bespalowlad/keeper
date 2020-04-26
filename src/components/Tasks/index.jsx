import React from 'react'
import './Tasks.scss';

import EditSvg from '../../assets/images/edit.svg';

const Tasks = ({ list }) => {
    return <>
        <div className="tasks-title">
            {list.name}
            <img src={EditSvg} alt="Edit" />
        </div>

        <div className="tasks-list">
            {list.tasks.map(task => (
                <div key={task.id} className="tasks-item">
                    <input id={`check-${task.id}`} type="checkbox" />
                    <label htmlFor={`check-${task.id}`} className="check">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </label>
                    <input value={task.text} className="task-text" type="text" readOnly />
                </div>
            ))}
        </div>
    </>
}

export default Tasks;