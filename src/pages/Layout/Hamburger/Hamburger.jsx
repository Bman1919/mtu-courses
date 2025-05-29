import './../Hamburger/Hamburger.css';
import menu from '../../../assets/menu.svg';
import React, { useState } from 'react';
import BranchMenu from '../../Home/BranchMenu/BranchMenu.jsx';
import { Outlet } from 'react-router-dom';

export default function Hamburger({x="16px", y="16px", endX=180, width = 200, height = 140, branches=[
    {name: "A", fn: () => {alert("Branch A clicked")}},
    {name: "B", fn: () => {alert("Branch B clicked")}},
    {name: "C", fn: () => {alert("Branch C clicked")}},
], fontSize = 16}) {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    return (
        <>
            <div className="hamburger-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex: 1000}}>
            <img src={menu} alt="Menu" className="hamburger-menu" />
            {
                hover && (
                    <BranchMenu     
                        x={0} 
                        y={0} 
                        endX={endX} 
                        width={width} 
                        height={height} 
                        yOffset={height / 2}
                        branches={branches} 
                        fontSize={fontSize}
                    />
                )}
            </div>
            <Outlet />
        </>
    );
}