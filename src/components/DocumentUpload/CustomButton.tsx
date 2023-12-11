import React, { ReactNode, MouseEvent } from 'react';
import { Button } from '@chakra-ui/react';

interface CustomButtonProps {
    variant: 'primary' | 'cancel';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
    m: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant, onClick, children, m }) => {
    // Define styles based on the variant prop
    const getStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    bgColor: 'brand.500',
                    color: 'white',
                    _hover: {
                        bgColor: 'brand.100',
                    },
                };
            case 'cancel':
                return {
                    bgColor: 'white',
                    borderColor: 'brand.50',
                    borderWidth: 2,
                    color: 'brand.50',
                    _hover: {
                        bgColor: 'brand.100',
                    },
                };
            default:
                return {};
        }
    };

    const styles = getStyles();

    return (
        <Button m={m} onClick={onClick} {...styles}>
            {children}
        </Button>
    );
};

export default CustomButton;
