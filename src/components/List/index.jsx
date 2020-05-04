import React from 'react';
import { deleteMenuItem } from '../../api'

import classNames from 'classnames'
import Badge from '../Badge';

import './List.scss'

import removeSVG from '../../assets/images/remove.svg';

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {

    const beforeRemove = async ({ id, name }) => {
        if (window.confirm(`Вы действительно хотите удалить ${name}?`)) {
            await deleteMenuItem(id)
            onRemove(id)
        }
    }

    return <ul onClick={onClick} className="list">
        {items.map((item, index) => (
            <li
                onClick={onClickItem ? () => onClickItem(item) : null}
                className={classNames(item.className, { 'active': activeItem && activeItem.id === item.id })}
                key={index}
            >
                {item.icon ?
                    item.icon :
                    <Badge color={item.color} />
                }
                <p>{item.name} {item.tasks && `(${item.tasks.length})`}</p>
                {isRemovable && <img src={removeSVG} onClick={() => beforeRemove(item)} className="remove-btn" alt="Remove" />}
            </li>
        ))}
    </ul>
}

export default List