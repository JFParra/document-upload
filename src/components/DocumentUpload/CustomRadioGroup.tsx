import React, { FC } from 'react';
import { FormControl, FormLabel, RadioGroup, Stack, Radio } from '@chakra-ui/react';


interface CustomRadioGroupProps {
    title: string;
    radioValues: string[];
    margin: number;
}


const CustomRadioGroup: FC<CustomRadioGroupProps> = ({ title, radioValues, margin }) => {
    return (
        <FormControl mb={margin} mt={margin}>
            <FormLabel fontWeight="bold">{title}</FormLabel>
            <RadioGroup>
                <Stack direction="row">

                    {radioValues.map((val, index) => (
                        <Radio
                            _checked={{
                                color: 'white',
                                bg: 'brand.500',
                                borderColor: 'brand.500',
                            }}
                            size="lg"
                            value={val}
                            key={index}>
                            {val}
                        </Radio>
                    ))}

                </Stack>
            </RadioGroup>
        </FormControl>
    );
};

export default CustomRadioGroup;
