import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({

    styles: {
        global: {
            'html, body': {
                bg: 'gray.800', // Set the background color for the entire page
            },
        },
    },
    colors: {
        brand: {
            50: '#ff9e16',
            100: '#d8d1ca',
            500: '#003b71',
        },
    },
});

export default theme;
