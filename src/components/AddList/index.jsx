import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge';

import './AddList.scss'
import closeSvg from '../../assets/images/close.svg';

const AddButtonList = ({ colors, onAddList }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const onClose = () => {
        setVisiblePopup(false);
        setSelectedColor(colors[0].id);
        setInputValue('');
    }

    const AddList = () => {
        if (!inputValue) {
            alert('Введите название папки')
            return;
        }

        onAddList({
            id: Math.random(),
            name: inputValue,
            colorId: selectedColor,
            color: colors.find(c => c.id === selectedColor).name
        });
        onclose();
    }

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
                    name: 'Добавить папку'
                }
            ]}
        />

        {visiblePopup && <div className="add-list-popup">
            <div className="close">
                <img onClick={onClose} src={closeSvg} className="close" alt="Close" />
            </div>

            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="field"
                type="text"
                placeholder="Название папки"
            />

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

            <button onClick={AddList} className="button">Добавить</button>
        </div>}
    </div>

}

export default AddButtonList;