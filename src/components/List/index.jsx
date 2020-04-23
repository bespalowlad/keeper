import React from 'react';
import classNames from 'classnames'
import Badge from '../Badge';

import './List.scss'

const List = ({ items, isRemovable, onClick }) => (
    <ul onClick={onClick} className="list">
        {items.map((item, index) => (
            <li className={classNames(item.className, { 'active': item.active })} key={index}>
                {item.icon ?
                    item.icon :
                    <Badge color={item.color} />
                }
                <p>{item.text}</p>
            </li>
        ))}
    </ul>
)

export default List