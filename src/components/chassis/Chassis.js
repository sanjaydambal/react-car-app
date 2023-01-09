import React from 'react'
import Axles from './axles/Axles'
import Steel from './steel/Steel'
import Transmission from './transmissionsystem/Transmission'

export default function Chassis() {
    return (
        <>
        <div>Chassis</div>
        <Axles/>
        <Steel/>
        <Transmission/>
        </>
    )
}
