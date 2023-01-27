import React from "react";

import { Text, Box } from '@chakra-ui/react';

const About = () => {
    return(
        
        <>
            {/* Bolded with font size 50px */}
            <Text as='b' fontSize="50px" ml="500px" bg="tomato" color="gray.50">
                Bolded
            </Text>

            <br/>
            
            {/* Italic */}
            <Text as='i' color="yellow.500">
                Italic
            </Text>

            <br/>

            {/* Underline */}
            <Text as="u">
                Underline
            </Text>
            <p>
                This is the about page
            </p>
            

            <Box border="1px" borderColor='blackAlpha.500' pos="absolute" boxShadow="xl" rounded="sm" bg="gray.200" textShadow="1px 1px #ff0000">
                Border:1px | Color: Black | Position: Absolute
            </Box>






        </>
       
    );
};

export default About;