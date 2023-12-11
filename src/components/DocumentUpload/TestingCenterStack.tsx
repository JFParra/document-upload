import React from 'react';
import { Stack, FormLabel, Select } from '@chakra-ui/react';
import { MdAccessTime } from 'react-icons/md';

interface TestingCenterStackProps {
    titles: string[];
    options: string[][];
}

const TestingCenterStack: React.FC<TestingCenterStackProps> = ({ titles, options }) => {
    return (
        <Stack direction="column">
            {titles.map((title, index) => (
                <Stack key={index} direction="row" spacing={4} align="center">
                    <FormLabel>{title}</FormLabel>
                    <Select placeholder='Select Client'>
                        {options[index].map((value, valueIndex) => (
                            <option key={valueIndex} value={value}>
                                {value}
                            </option>
                        ))}
                    </Select>
                    <MdAccessTime />
                </Stack>
            ))}
        </Stack>
    );
};

export default TestingCenterStack;
