import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tasks.scss';

import EditSvg from '../../assets/images/edit.svg';

import CreateTask from './CreateTask';

const Tasks = ({ list, onEditTitleList, onCreateTask }) => {
    const [title, setTitle] = useState(list.name);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setTitle(list.name);
    }, [list]);

    const onBlur = async () => {
        setEditMode(false);

        try {
            await axios.patch(`http://localhost:3001/lists/${list.id}`, { name: title })
            onEditTitleList(list.id, title);
        } catch (error) {
            alert('Уппс! Произошла ошибка')
        }
    }

    return <>
        <div onClick={() => setEditMode(true)} className="tasks-title">
            {editMode ?
                <input
                    className="field"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={onBlur}
                    autoFocus={true}
                /> :
                <>
                    {title}
                    <img src={EditSvg} alt="Edit" />
                </>
            }
        </div>

        <div className="tasks-list">

            {list.tasks.length === 0 && <h2>Задачи отсутствуют</h2>}

            {list.tasks.map(task => (
                <div key={task.id} className="tasks-item">
                    <input id={`check-${task.id}`} type="checkbox" />
                    <label htmlFor={`check-${task.id}`} className="check">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </label>
                    <input value={task.text} className="tasks-text" type="text" readOnly />
                </div>
            ))}

            <CreateTask list={list} onCreateTask={onCreateTask} />
        </div>
    </>
}

export default Tasks;