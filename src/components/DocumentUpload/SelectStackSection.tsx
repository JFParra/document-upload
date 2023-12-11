import React from 'react';
import { Box, Divider, FormControl, FormLabel, Select } from '@chakra-ui/react';

const SelectStackSection: React.FC = () => {
    return (
        <Box p={4} flex="1">
            <FormControl mb={4}>
                <Select fontWeight="bold" placeholder="Select Import Name:">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectStackSection;
