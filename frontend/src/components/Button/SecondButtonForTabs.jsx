import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './SecondButtonForTabs.module.css'; 
import { useState } from 'react';

export default function SecondButtonForTabs({ onClick, children, disabled, className, isActive, onMouseEnter, onMouseLeave, ...props }) { 
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <button
            {...props}
            disabled={disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            type="button"
            className={classNames(
                className,
                disabled ? classes.defmainbtndisabled : classes.defmainbtn,
                isActive ? classes.defmainbtnactive : ''
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

SecondButtonForTabs.propTypes = { 
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isActive: PropTypes.bool,
};

SecondButtonForTabs.defaultProps = { 
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    isActive: false,
};