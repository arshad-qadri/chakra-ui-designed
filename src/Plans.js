import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDone } from "react-icons/md";

const Plans = () => {
  return (
    <>
      <Box
        w={{ lg: "70vw", md: "80vw", sm: "90vw" }}
        mx="auto"
        mt="3rem"
        overflowX="hidden"
      >
        <Flex
          flexDirection={{ lg: "row", md: "row", sm: "column" }}
          justifyContent="space-between"
          alignItems="center"
          className="flexD"
        >
          <Text fontSize="1.5rem" fontWeight="semibold">
            Choose plan
          </Text>
          <Box>
            <Button mr="1rem" border="1px" borderColor="gray.300">
              Pay annually (save 16%) <IoMdArrowDropdown />
            </Button>
            <Button border="1px" borderColor="gray.300">
              USD <IoMdArrowDropdown />
            </Button>
          </Box>
        </Flex>

        <Grid
          mt="1rem"
          templateColumns={{
            lg: "repeat(3,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
          }}
          borderBottom="1px"
          borderColor="gray.300"
        >
          {/* =================================================================
        Launch
        ================================================================== */}
          <Box h="28rem" px="2rem" py="1.1rem">
            <Heading mt="3rem" fontSize="1.5rem">
              Launch
            </Heading>
            <Text mt="1rem" fontSize="0.9rem">
              Launch your hiring here with all of your
            </Text>
            <Text fontWeight="semibold" fontSize="0.9rem">
              recruitment essentials
            </Text>

            <Box
              mt="2.5rem"
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "0.8rem" }}>$</span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textDecoration: "line-through",
                }}
              >
                222
              </span>
              &nbsp;
              <span style={{ fontSize: "0.8rem" }}>$</span>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                185
              </span>
              <span style={{ fontSize: "0.8rem" }}>&nbsp;/&nbsp;Month</span>
            </Box>
            <Text mt="2.5rem" fontWeight="bold">
              JOB SLOTS
            </Text>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              // bg="tomato"
              borderRadius="5px"
              border="1px"
              px="8px"
              py="6px"
              mt="1rem"
            >
              <Box>10 job slots</Box>
              <Box>
                <IoMdArrowDropdown />
              </Box>
            </Flex>
            <Button w="100%" border="1px" mt="1.5rem" h="3.3rem">
              Choose plan
            </Button>
          </Box>

          {/* ================================================================
          scale
          ================================================================= */}

          <Box h="28rem" bg="#EAF8F4" borderTopRadius="4px" overflow="hidden">
            <Box
              w="100%"
              bgGradient="linear(to-l, #2ed573,#2d98da)"
              py="4px"
              px="2rem"
              color="#fff"
            >
              <Text fontSize=".8rem" fontWeight="semibold">
                MOST POPULAR
              </Text>
            </Box>
            <Box px="2rem">
              <Flex mt="2.5rem">
                <Heading fontSize="1.5rem">Scale</Heading>
                <Text
                  ml="10px"
                  bg="#2ed573"
                  h="18px"
                  fontSize="0.7rem"
                  px=".5rem"
                  textTransform="uppercase"
                  color="#fff"
                  fontWeight="bold"
                  lineHeight="18px"
                  borderRadius="3px"
                >
                  trial plan
                </Text>
              </Flex>
              <Text fontSize="0.9rem" mt="1rem">
                Scale your hiring processes with{" "}
                <span style={{ fontWeight: "bold" }}>automation</span> and team{" "}
                <span style={{ fontWeight: "bold" }}>optimization</span>.
              </Text>
              <Box
                mt="2.5rem"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.8rem" }}>$</span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textDecoration: "line-through",
                  }}
                >
                  399
                </span>
                &nbsp;
                <span style={{ fontSize: "0.8rem" }}>$</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  333
                </span>
                <span style={{ fontSize: "0.8rem" }}>&nbsp;/&nbsp;Month</span>
              </Box>
              <Text mt="2.5rem" fontWeight="bold">
                JOB SLOTS
              </Text>

              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                // bg="tomato"
                borderRadius="5px"
                border="1px"
                px="8px"
                py="6px"
                mt="1rem"
              >
                <Box>10 job slots</Box>
                <Box>
                  <IoMdArrowDropdown />
                </Box>
              </Flex>
              <Button
                w="100%"
                border="1px"
                borderColor="#1EA275"
                bg="#20c78f"
                mt="1.5rem"
                h="3.3rem"
                color="#fff"
                className="btn"
              >
                Choose plan
              </Button>
            </Box>
          </Box>

          {/* ==============================================================
          Lead
          =============================================================== */}
          <Box h="28rem" px="2rem" py="1.1rem">
            <Heading fontSize="1.5rem" mt="3.2rem">
              Lead
            </Heading>
            <Text mt="1rem" fontSize="0.9rem">
              Lead your hiring to the forefront with{" "}
              <span style={{ fontWeight: "bold" }}>additional services</span>{" "}
              and <span style={{ fontWeight: "bold" }}>compliance</span> to
              drive your hiring strategy.
            </Text>
            <Text mt="1.5rem" fontSize="0.9rem" fontWeight="bold">
              Custom pricing
            </Text>
            <Text fontSize="0.9rem">Tailored to your needs</Text>

            <Button w="100%" border="1px" mb="auto" h="3.3rem" mt="8.2rem">
              Get in touch
            </Button>
          </Box>
        </Grid>

        <Grid
          templateColumns={{
            lg: "repeat(3,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
          }}
        >
          <Box w="100%" p="1rem">
            <Heading fontSize="1rem">Recruitment essentials</Heading>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                User-friendly candidate pipelines
              </Text>
            </Flex>

            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                1,250+ free and paid job boards
              </Text>
            </Flex>

            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Smart campaigns
              </Text>
            </Flex>

            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Careers site and jobs widget
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Candidate video chat
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Overdue candidate reminders
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                GDPR compliance features
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Two-factor authentication
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Mobile app
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Unlimited users and data
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Two-way email and calendar sync
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Talent sourcing Chrome extension
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Marketplace access
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Live chat and award-winning support
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Essential reporting dashboards
              </Text>
            </Flex>
          </Box>
          <Box w="100%" bg="#EAF8F4" p="1rem">
            <Heading fontSize="1rem">All Launch features, plus:</Heading>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Automated actions and triggers
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Send-later email scheduling
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Event and job schedulers
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Calendar meeting rooms
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Workflow templates
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                GDPR Automations
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Customizable report builder
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                API and webhooks access
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Custom careers site URL
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Adjustable access and visibility settings
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem" color="#20c78f">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Multi-language careers site and jobs
              </Text>
            </Flex>
          </Box>
          <Box w="100%" p="1rem">
            <Heading fontSize="1rem">All Scale features, plus:</Heading>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                API support
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Dedicated Customer Success Representative
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                External data imports from your current ATS
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Tailored onboarding and rollout strategy
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Regular team consultations
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Testing sandbox
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                ReferralsHub
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Custom contracts
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                SSO
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                Additional security measures
              </Text>
            </Flex>
            <Flex justifyContent="start" alignItems="center" mt="1rem">
              <Box fontSize="1.2rem">
                <MdDone />
              </Box>
              <Text ml=".8rem" fontSize="0.9rem">
                BI connector
              </Text>
            </Flex>
          </Box>
        </Grid>
        <br />
      </Box>
    </>
  );
};

export default Plans;
