import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Task from './Task';

import './Tasks.scss';

import EditSvg from '../../assets/images/edit.svg';
import CreateTask from './CreateTask';

const Tasks = ({ list, onEditTitleList, onCreateTask, onRemoveTask, onEditTask }) => {
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

    return <div className="tasks-list">
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
                    <h2 style={{ color: list.color.hex }}>{title}</h2>
                    <img src={EditSvg} alt="Edit" />
                </>
            }
        </div>

        <div className="tasks-body">

            {/* {list.tasks && list.tasks.length === 0 && <h2 className="tasks-empty">Задачи отсутствуют</h2>}

            {list.tasks && list.tasks.map(task => (
                <Task key={task.id} onRemove={onRemoveTask} onEdit={onEditTask} {...task} />
            ))} */}

            {list.tasks && list.tasks.length > 0 ? (
                list.tasks.map(task => (
                    <Task key={task.id} onRemove={onRemoveTask} onEdit={onEditTask} {...task} />
                ))
            ) : (
                    <h2 className="tasks-empty">Задачи отсутствуют</h2>
                )
            }

            <CreateTask key={list.id} list={list} onCreateTask={onCreateTask} />
        </div>
    </div>
}

export default Tasks;