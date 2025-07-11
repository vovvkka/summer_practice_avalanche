import React from 'react';
import './Button.css';

interface FilterButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
                                                       onClick,
                                                       disabled = false,
                                                       className = ''
                                                   }) => {
    return (
        <button
            className={`filter-button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            фильтры
        </button>
    );
};

export default FilterButton;