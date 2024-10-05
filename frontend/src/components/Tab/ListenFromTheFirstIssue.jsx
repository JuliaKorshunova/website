import SecondButtonForTabs from "../Button/SecondButtonForTabs"; 
import './TabSection.css'; 
import { useState } from "react"; 
import './ListenFromTheFirstIssue.css';

export default function ListenFromTheFirstIssue({ onChange }) { 
    const [isHovered, setIsHovered] = useState(false); 

    const handleMouseEnter = () => { 
        setIsHovered(true); 
    }; 

    const handleMouseLeave = () => { 
        setIsHovered(false); 
    }; 

    return ( 
        <div className="tab"> 
            <SecondButtonForTabs 
                isActive={false} // Укажите активность, если нужно 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onClick={() => onChange('listen')} // Укажите значение для onChange 
            > 
                Слушать с первого выпуска 
            </SecondButtonForTabs> 
        </div> 
    ); 
}