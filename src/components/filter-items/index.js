import React from "react";

import './style.scss';

export const FilterItems = () => {
    return (
        <div className={'fixed-panel'}>
            <input className='filter-items'
                   type='text'
                   placeholder='search...'/>
        </div>
    )
}