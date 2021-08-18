import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Select,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { BiCalendarPlus } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const CreateJobs = () => {
  return (
    <>
      <Box
        w={{ lg: "60vw", md: "80vw", sm: "95vw" }}
        bg="#F0F4F7"
        mx="auto"
        mt="3rem"
        p="1rem"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ lg: "row", md: "column", sm: "column" }}
          className="responsive"
        >
          <Text textAlign="left">Not saved yet </Text>
          <Flex alignItems="center">
            <Box
              w="2.2rem"
              h="2.2rem"
              borderColor="gray.200"
              border="1px"
              mr="1rem"
              fontSize="1.5rem"
              borderRadius="5px"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BiCalendarPlus />
            </Box>
            <Button border="1px" borderColor="gray.400" mr="10px">
              Save changes
            </Button>
            <Box color="#fff">
              <Button borderRightRadius="0" bg="blue.400" mr="0">
                Publish
              </Button>
              <Button bg="blue.500" borderLeftRadius="0" flex="1" w="10px">
                <Box fontSize="1.5rem">
                  <IoMdArrowDropdown />
                </Box>
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Box
          w="100%"
          bg="white"
          border="1px"
          p="1rem"
          my="2rem"
          borderRadius="5px"
          borderColor="gray.300"
        >
          <Flex
            flexDirection={{ lg: "row", md: "column", sm: "column" }}
            className="responsive"
          >
            <Box>
              <Text fontSize="1rem" fontWeight="bold">
                Job Title <span style={{ color: "red" }}>*</span>
              </Text>
              <Input
                placeholder="Type job title"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.400"
                w={{ lg: "35vw", md: "20vw" }}
                pl="0"
                _focus="boredr:0"
                mr="1rem"
                style={{ borderColor: "gray" }}
              />
            </Box>
            <Box>
              <Text fontSize="1rem" fontWeight="bold">
                Department
              </Text>

              <Select
                placeholder="Select department"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                // w="20vw"
                w={{ lg: "20vw", md: "10vw" }}
                _focus="boredr:0"
                style={{ paddingLeft: "0", borderColor: "gray" }}
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
          </Flex>
          <Flex alignItems="center" mt="1rem">
            <Text fontSize="1rem" fontWeight="bold">
              Tags
            </Text>
            <Flex
              w="2rem"
              h="2rem"
              borderRadius="5px"
              border="1px"
              borderColor="gray.300"
              justifyContent="center"
              alignItems="center"
              ml="1rem"
            >
              <AiOutlinePlus />
            </Flex>
          </Flex>
        </Box>

        {/* =============================================================
        job description
        =========================================================== */}
        <Box
          w="100%"
          bg="white"
          border="1px"
          p="1rem"
          //   my="2rem"
          borderRadius="5px"
          borderColor="gray.300"
        >
          <Text fontSize="1rem" fontWeight="bold" mb=".5rem">
            Job description <span style={{ color: "red" }}>*</span>
          </Text>
          <Textarea h="15rem"></Textarea>
          <Text fontSize="1rem" fontWeight="bold" mt="2rem" mb=".5rem">
            Job requirements <span style={{ color: "red" }}>*</span>
          </Text>
          <Textarea h="15rem"></Textarea>
        </Box>
        {/* =====================================================================
     job location
     ==================================================================== */}
        <Box
          w="100%"
          bg="white"
          border="1px"
          p="1rem"
          my="2rem"
          borderRadius="5px"
          borderColor="gray.300"
        >
          <Text fontSize="1rem" fontWeight="bold">
            Job location
          </Text>
          <Grid
            gridTemplateColumns={{
              lg: "1fr 1fr 1fr auto",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
            }}
            gap={4}
          >
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                Country <span style={{ color: "red" }}>*</span>
              </Text>
              <Select
                placeholder="Select country"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ paddingLeft: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                State/Region
                {/* <span style={{ color: "red" }}>*</span> */}
              </Text>
              <Select
                placeholder="Select state or region"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ paddingLeft: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                City <span style={{ color: "red" }}>*</span>
              </Text>
              <Input
                placeholder="Type city"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ paddingLeft: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              ></Input>
            </Box>

            <Box w="9rem">
              <Text fontSize=".9rem" fontWeight="bold">
                Zip code <span style={{ color: "red" }}>*</span>
              </Text>
              <Select
                placeholder="Type ZIP code"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ padding: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
          </Grid>
          <Box mt="1rem">
            <Text fontSize="1rem" fontWeight="bold">
              Remote
            </Text>
            <Flex mt="1rem" justifyContent="start" alignItems="center">
              <Switch colorScheme="teal" size="md" />
              <Text ml="1rem" fontWeight="bold">
                No
              </Text>
            </Flex>
          </Box>
        </Box>

        {/* ===========================================================================
      Job details
      ========================================================================== */}
        <Box
          w="100%"
          bg="white"
          border="1px"
          p="1rem"
          my="2rem"
          borderRadius="5px"
          borderColor="gray.300"
        >
          <Text fontSize="1rem" fontWeight="bold">
            Job details
          </Text>
          <Text fontSize="0.9rem" color="gray.500">
            Fill out these fields if you want to promote your job on job boards.
          </Text>
          <Grid
            gridTemplateColumns={{
              lg: "repeat(4, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
            }}
            gap={4}
            mt="2rem"
          >
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                Employment type <span style={{ color: "red" }}>*</span>
              </Text>
              <Select
                placeholder="Select "
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ paddingLeft: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                Category
                <span style={{ color: "red" }}> * </span>
              </Text>
              <Select
                placeholder="Select"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ paddingLeft: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                Required education <span style={{ color: "red" }}>*</span>
              </Text>
              <Select
                placeholder="Select"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ padding: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>

            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                Required experience <span style={{ color: "red" }}>*</span>
              </Text>
              <Select
                placeholder="Select"
                border="0"
                borderBottom="1px"
                borderRadius="0"
                borderColor="gray.100"
                _focus="boredr:0"
                style={{ padding: "0", borderColor: "gray" }}
                fontSize="0.8rem"
                color="gray.400"
              >
                <option value="opt1">Sales</option>
                <option value="opt2">Product </option>
                <option value="opt3">Human resources</option>
                <option value="opt4">Marketing</option>
              </Select>
            </Box>
            {/* =============================================== */}
            <Box>
              <Text fontSize=".9rem" fontWeight="bold">
                Hours per week <span style={{ color: "red" }}>*</span>
              </Text>
              <Flex alignItems="center" style={{ columnGap: "10px" }}>
                {" "}
                <Input
                  placeholder="30"
                  border="0"
                  borderBottom="1px"
                  borderRadius="0"
                  borderColor="gray.100"
                  _focus="boredr:0"
                  style={{ paddingLeft: "0", borderColor: "gray" }}
                  fontSize="0.8rem"
                  color="gray.400"
                ></Input>
                <Text
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="gray.500"
                  fontStyle="italic"
                >
                  to
                </Text>
                <Input
                  placeholder="40"
                  border="0"
                  borderBottom="1px"
                  borderRadius="0"
                  borderColor="gray.100"
                  _focus="boredr:0"
                  style={{ paddingLeft: "0", borderColor: "gray" }}
                  fontSize="0.8rem"
                  color="gray.400"
                ></Input>
                <Text
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="gray.500"
                  fontStyle="italic"
                >
                  hours
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CreateJobs;
