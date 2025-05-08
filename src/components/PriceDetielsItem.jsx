import React from 'react'
import { PriceTickSVG } from './SVG/PriceTickSVG'

const PriceDetielsItem = ({item}) => {
    return (
        <li class="flex items-center space-x-3">
            <PriceTickSVG></PriceTickSVG>
            <span>{item}</span>
        </li>
    )
}

export default PriceDetielsItem