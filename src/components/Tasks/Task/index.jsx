import React, { useState, useEffect } from 'react';
import { updateTaskText, removeTask, updateStatusTask } from '../../../api'

import editSvg from '../../../assets/images/edit.svg';
import removeSvg from '../../../assets/images/remove.svg';

import './task.scss';

const Task = ({ id, listId, text, completed, onRemove, onEdit, onComplete }) => {
    const [inputValue, setInputValue] = useState(text);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setInputValue(text);
    }, [text])

    const onBlur = async () => {
        setEditMode(false);

        try {
            await updateTaskText(id, inputValue)
            onEdit(listId, id, inputValue);
        } catch (error) {
            alert('Уппс! Произошла ошибка')
        }
    }

    const onRemoveHandler = async () => {
        if (!window.confirm('Вы действительно хотите удалить задачу?')) {
            return;
        }

        try {
            await removeTask(id);
            onRemove(listId, id);
        } catch (error) {
            alert('Уппс! Произошла ошибка')
        }
    }

    const onCompleteHandler = async () => {
        try {
            await updateStatusTask(id, completed);
            onComplete(listId, id);
        } catch (error) {
            alert('Уппс! Произошла ошибка')
        }
    }

    return (
        <div className="task">
            <input
                id={`check-${id}`}
                type="checkbox"
                checked={completed}
                onChange={onCompleteHandler}
            />

            <label htmlFor={`check-${id}`} className="check">
                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </label>

            {!editMode ? (
                <div className="task-text">{text}</div>
            ) : (
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={onBlur}
                        className="task-text"
                        type="text"
                        autoFocus={true}
                    />
                )}

            <div className="task-control">
                <button onClick={() => setEditMode(true)} type="button" className="task-edit">
                    <img src={editSvg} alt="Edit" />
                </button>
                <button onClick={onRemoveHandler} type="button" className="task-remove">
                    <img src={removeSvg} alt="Remove" />
                </button>
            </div>
        </div>
    )
}

export default Task;