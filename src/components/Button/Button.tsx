import "./Button.css";

enum ButtonTheme {
    DARK = 'dark',
    LIGHT = 'light',
    GRAY = 'gray',
    CLEAR = 'clear'
}

interface ButtonProps {
    theme: ButtonTheme;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
                                           theme,
                                           children,
                                           onClick,
                                           disabled = false,
                                           className = ''
                                       }) => {
    return (
        <button
            className={`btn btn--${theme} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};


export { Button, ButtonTheme };
