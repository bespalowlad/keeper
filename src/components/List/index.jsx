import React from 'react';
import axios from 'axios';

import classNames from 'classnames'
import Badge from '../Badge';

import './List.scss'

import removeSVG from '../../assets/images/remove.svg';

const List = ({ items, isRemovable, onClick, onRemove }) => {

    const beforeRemove = async ({ id, name }) => {
        if (window.confirm(`Вы действительно хотите удалить ${name}?`)) {
            await axios.delete(`http://localhost:3001/lists/${id}`)
            onRemove(id)
        }
    }

    return <ul onClick={onClick} className="list">
        {items.map((item, index) => (
            <li className={classNames(item.className, { 'active': item.active })} key={index}>
                {item.icon ?
                    item.icon :
                    <Badge color={item.color} />
                }
                <p>{item.name}</p>
                {isRemovable && <img src={removeSVG} onClick={() => beforeRemove(item)} className="remove-btn" alt="Remove" />}
            </li>
        ))}
    </ul>
}

export default List