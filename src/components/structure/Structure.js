import React from 'react'
import Doors from './doors/Doors'
import Pillars from './pillars/Pillars'
import Sheetmetals from './sheetmetals/Sheetmetals'
import './structure.css';

export default function Structure() {
    return (
        <div className='padding20'>
            <div>
                <header>Structure</header>
                <Pillars />
                <Sheetmetals />
                <Doors />
            </div>

        </div>
    )
}
