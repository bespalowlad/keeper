import React from 'react';
import './List.scss'

const List = (props) => (
    <ul className="list">
        {props.items.map((item, index) => (
            <li className="active" key={index}>
                {item.icon ?
                    item.icon :
                    <span className={`badge badge-${item.color}`}></span>
                }
                <p>{item.text}</p>
            </li>
        ))}
    </ul>
)

export default List