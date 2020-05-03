import React, { useState } from 'react';
import axios from 'axios';

import plusSvg from '../../assets/images/plus.svg';

const CreateTask = ({ list, onCreateTask }) => {
    const [formVisible, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleFormVisible = () => {
        setFormVisible(!formVisible);
        setInputValue('');
    }

    const onSubmit = async () => {
        if (!inputValue) {
            alert('Введите название новой задачи!')
        }

        setIsLoading(true);

        try {
            const { data } = await axios.post('http://localhost:3001/tasks', {
                listId: list.id,
                text: inputValue,
                completed: false
            });
            onCreateTask(list.id, data);
            toggleFormVisible();
        } catch (error) {
            alert('Уппс! Произошла ошибка')
        }

        setIsLoading(false);
    }

    return (
        <div className="create-task">
            {!formVisible ? (
                <button onClick={toggleFormVisible} className="create-task-btn">
                    <img src={plusSvg} alt="Plus" />
                    <p>Новая задача</p>
                </button>
            ) : (
                    <form className="create-task-form">
                        <input
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            type="text"
                            className="field"
                            placeholder="Текст задачи"
                            autoFocus={true}
                        />
                        <button onClick={onSubmit} disabled={isLoading || !inputValue} className="button" type="button">
                            {isLoading ? 'Добавляется...' : 'Добавить задачу'}
                        </button>
                        <button onClick={toggleFormVisible} className="button button-gray" type="button">Отмена</button>
                    </form>
                )}
        </div>
    )
}

export default CreateTask;