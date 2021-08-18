import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
// import { FcGoogle } from "react-icons/fc";

const Google = ({ icon, name }) => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt="1rem"
        border="1px"
        borderColor="gray.300"
        borderRadius="5px"
        // borderLeftWidth="5px"
        // borderLeftColor="blue"
        py="15px"
        px="15px"
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Center
            w="40px"
            h="40px"
            border="1px"
            borderRadius="5px"
            borderColor="gray.300"
            boxShadow="lg"
          >
            {/* <FcGoogle fontSize="1.8rem" /> */}
            <Box fontSize="1.5rem">{icon}</Box>
          </Center>
          <Box ml="10px">
            <Heading as="h5" fontSize="1rem" ml="10px" color="gray.500">
              {name}
            </Heading>
          </Box>
        </Box>

        <Box>
          <Button
            size="sm"
            border="1px"
            borderColor="gray.300"
            borderRadius="5px"
          >
            Activate
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Google;
