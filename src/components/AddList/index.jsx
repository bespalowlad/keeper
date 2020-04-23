import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge';

import './AddList.scss'
import closeSvg from '../../assets/images/close.svg';

const AddButtonList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);

    return <div className="add-list">
        <List
            onClick={() => setVisiblePopup(true)}
            items={[
                {
                    className: 'add-list',
                    icon: (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ),
                    text: 'Добавить папку'
                }
            ]}
        />
        {visiblePopup && <div className="add-list-popup">
            <div className="close">
                <img onClick={() => setVisiblePopup(false)} src={closeSvg} className="close" alt="Close" />
            </div>

            <input className="field" type="text" placeholder="Название папки" />

            <div className="color-list">
                {colors.map(color => (
                    <Badge
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        color={color.name}
                        className={selectedColor === color.id && 'active'}
                    />
                ))}
            </div>

            <button className="button">Добавить</button>
        </div>}
    </div>

}

export default AddButtonList;