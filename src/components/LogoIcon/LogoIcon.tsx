import React, { useState } from 'react';

// Импорты изображений
import saImage from '../../assets/images/sa-normal.png';
import saHoveredImage from '../../assets/images/sa-hovered.png';
import spbgutImage from '../../assets/images/spbgut-normal.png';
import spbgutHoveredImage from '../../assets/images/spbgut-hovered.png';
import avalancheImage from '../../assets/images/avalanche-normal.png';
import avalancheHoveredImage from '../../assets/images/avalanche-hovered.png';
import khibinyImage from '../../assets/images/khibiny-normal.png';
import khibinyHoveredImage from '../../assets/images/khibiny-hovered.png';
import mountainImage from '../../assets/images/mountain-normal.png';
import mountainHoveredImage from '../../assets/images/mountain-hovered.png';

interface IconData {
    id: string;
    name: string;
    normalImage: string;
    hoveredImage: string;
    alt: string;
}

interface HoverIconProps {
    icon: IconData;
    className?: string;
    onClick?: () => void;
}

const HoverIcon: React.FC<HoverIconProps> = ({ icon, className = '', onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`hover-icon ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            style={{
                cursor: 'pointer',
            }}
        >
            <img
                src={isHovered ? icon.hoveredImage : icon.normalImage}
                alt={icon.alt}
            />
        </div>
    );
};

// Данные всех доступных иконок
const availableIcons: { [key: string]: IconData } = {
    sa: {
        id: 'sa',
        name: 'sa',
        normalImage: saImage,
        hoveredImage: saHoveredImage,
        alt: 'SA Logo'
    },
    spbgut: {
        id: 'spbgut',
        name: 'SPbGUT',
        normalImage: spbgutImage,
        hoveredImage: spbgutHoveredImage,
        alt: 'SPbGUT Logo'
    },
    avalanche: {
        id: 'avalanche',
        name: 'Avalanche Association',
        normalImage: avalancheImage,
        hoveredImage: avalancheHoveredImage,
        alt: 'Avalanche Association'
    },
    khibiny: {
        id: 'khibiny',
        name: 'Khibiny',
        normalImage: khibinyImage,
        hoveredImage: khibinyHoveredImage,
        alt: 'Khibiny'
    },
    mountain: {
        id: 'mountain-guides',
        name: 'Mountain Guides',
        normalImage: mountainImage,
        hoveredImage: mountainHoveredImage,
        alt: 'Mountain Guides'
    },
};

// Главный компонент, который принимает пропс с ID иконки
interface IconDisplayProps {
    iconId: string;
    className?: string;
    onClick?: () => void;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ iconId, className = '', onClick }) => {
    const icon = availableIcons[iconId];

    if (!icon) {
        console.warn(`Icon with id "${iconId}" not found`);
        return null;
    }

    const handleClick = () => {
        console.log(`Clicked on ${icon.name}`);
        if (onClick) {
            onClick();
        }
    };

    return (
        <HoverIcon
            icon={icon}
            className={className}
            onClick={handleClick}
        />
    );
};

export default IconDisplay;