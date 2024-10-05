import React, { useState } from "react";
import SecondButtonForTabs from "../Button/SecondButtonForTabs";
import './TabSection1.css';

export default function TabSection1({ Active, onChange }) {
    const [isHovered1, setIsHovered1] = useState(false);
    const handleMouseEnter1 = () => setIsHovered1(true);
    const handleMouseLeave1 = () => setIsHovered1(false);

    const [isHovered2, setIsHovered2] = useState(false);
    const handleMouseEnter2 = () => setIsHovered2(true);
    const handleMouseLeave2 = () => setIsHovered2(false);

    const buttons = [
        { value: 'user', label: 'Пользователь', handleMouseEnter: handleMouseEnter1, handleMouseLeave: handleMouseLeave1, isHovered: isHovered1 },
        { value: 'podcaster', label: 'Подкастер', handleMouseEnter: handleMouseEnter2, handleMouseLeave: handleMouseLeave2, isHovered: isHovered2 },
    ];

    return (
        <div className="tab">
            {buttons.map((button) => (
                <div key={button.value}>
                    {Active === button.value ? (
                        <SecondButtonForTabs
                        isActive={true}
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                        onClick={() => {
                            console.log(`Button ${button.value} clicked`);
                            onChange(button.value);
                        }}
                    >
                        {button.label}
                    </SecondButtonForTabs>
                    ) : button.isHovered ? (
                        <SecondButtonForTabs
                            isActive={false}
                            onMouseEnter={button.handleMouseEnter}
                            onMouseLeave={button.handleMouseLeave}
                            onClick={() => onChange(button.value)}
                        >
                            {button.label}
                        </SecondButtonForTabs>
                    ) : (
                        <div className="bgforbtn3">
                            <SecondButtonForTabs
                                isActive={false}
                                onMouseEnter={button.handleMouseEnter}
                                onMouseLeave={button.handleMouseLeave}
                                onClick={() => onChange(button.value)}
                            >
                                {button.label}
                            </SecondButtonForTabs>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}