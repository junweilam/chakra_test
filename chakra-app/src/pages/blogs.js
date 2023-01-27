import React from 'react';

import { Button, ButtonGroup } from "@chakra-ui/react";
import FAIcons, { FaFacebook } from "react-icons/fa"

const Blogs = () => {
    return (
        <>
            <h1>Welcome to the Buttons Page</h1>

            {/* Creating a button */}
            <Button colorScheme="blue">
                Button
            </Button>

            {/* Button teal outline */}
            <Button colorScheme="teal" variant="outline">
                Button
            </Button>

            {/* Facebook button */}
            <Button colorScheme="facebook" leftIcon={<FaFacebook/>}>
                Facebook
            </Button>
        </>
    );
};

export default Blogs;