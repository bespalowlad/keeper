import React from 'react'
import './Tasks.scss';

import EditSvg from '../../assets/images/edit.svg';

const Tasks = () => (
    <>
        <div className="tasks-title">
            Фронтенд
            <img src={EditSvg} alt="Edit" />
        </div>

        <div className="tasks-list">
            <div className="tasks-item">
                <input id="check" type="checkbox" />
                <label htmlFor="check" className="check">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </label>
                <span>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</span>
            </div>
        </div>
    </>
)

export default Tasks;