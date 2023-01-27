import React from 'react';

import { Button } from "@chakra-ui/react";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa"

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

            {/* Twitter button */}
            <Button colorScheme="twitter" leftIcon={<FaTwitter/>}>
                Twitter
            </Button>

            {/* Telegram button */}
            <Button colorScheme="telegram" leftIcon={<FaTelegram/>}>
                Telegram
            </Button>
        </>
    );
};

export default Blogs;