import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FaCheckSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdDone,
  MdEdit,
  MdMarkunreadMailbox,
} from "react-icons/md";
import { AiOutlinePlus, AiFillGolden } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import img from "../vid.PNG";
import tour from "../tour.PNG";
import cal from "../cal.PNG";
import notifn from "../notification.PNG";
import Google from "./Google";
import { Link } from "react-router-dom";

const QuickStart = () => {
  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [tours, setTours] = useState(true);
  const [caln, setcaln] = useState(true);
  const [notif, setNotif] = useState(true);

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <Flex
        w="100%"
        bg="blue.900"
        alignItems="center"
        justifyContent="space-around"
        py="5px"
        color="#fff"
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
        className="responsive"
      >
        <Flex alignItems="center">
          <HiOutlineInformationCircle
            style={{ color: "#fff", fontSize: "1.2rem" }}
          />

          <Text ml=".5rem" style={{ display: "flex" }}>
            10 trial days left. &nbsp;
            <Text textDecoration="underline">
              <Link to="/plans">Click to choose your plan</Link>
            </Text>
          </Text>
        </Flex>
        <Text ml="auto" mr="5rem" textDecor="underline">
          <Link to="/create-jobs">Create jobs</Link>
        </Text>
      </Flex>
      <Box
        w={{ lg: "60vw", md: "90vw", sm: "95vw" }}
        mx="auto"
        mt="5rem"
        overflow
      >
        <Text fontSize="2xl" fontWeight="700">
          <h1>Quick start</h1>
        </Text>
        <Box
          border="1px"
          borderColor="gray.400"
          mt="10px"
          rounded="md"
          boxShadow="lg"
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={handleShow}
            p="1rem"
            cursor="pointer"
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                style={{ border: "4px solid #0275d8" }}
                borderRadius="50%"
                w="30px"
                h="30px"
              ></Box>
              <Box ml="1rem">
                <Text fontSize="1.3rem" fontWeight="700">
                  <h1>First Step</h1>
                </Text>
                <Text fontSize="small" color="gray.500">
                  <p>This is a great beginning!</p>
                </Text>
              </Box>
            </Box>
            <Box>
              <Text>
                <p>4 Steps</p>
              </Text>
            </Box>
          </Box>
          <Box w="100%" h="5px" bg="gray.400" mt="1rem">
            <Box w="20%" h="100%" bg="#0275d8"></Box>
          </Box>

          {/* ================ video section ======================= */}
          {show ? (
            <>
              <Box
                p={{ lg: "1rem" }}
                margin={{ lg: "1rem 2rem", md: "1rem ", sm: "0.5rem  " }}
                py="1.5rem"
                border="1px"
                borderRadius="lg"
                borderColor={arrow ? "#fff" : "#0275d8"}
                // my="3rem"
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <FaCheckSquare color="#0275d8" fontSize="1.4rem" />
                    <Text fontSize="1.1rem" ml="10px" fontWeight="500">
                      <a href="/#">Intro video</a>
                    </Text>
                  </Box>
                  <Box>
                    {arrow ? (
                      <MdKeyboardArrowDown
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setArrow(false)}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setArrow(true)}
                      />
                    )}
                  </Box>
                </Box>
                {!arrow ? (
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    px="2rem"
                    flexDirection={{ lg: "row", md: "column", sm: "column" }}
                    className="responsive"
                  >
                    <Box pr={{ lg: "5rem", sm: "0" }}>
                      <Text fontSize="0.9rem">
                        <p>
                          Watch the video to see how simple it is to attract,
                          manage, and hire the best candidates.
                        </p>
                      </Text>
                      <Button colorScheme="blue" mt="1rem">
                        Watch video
                      </Button>
                    </Box>

                    <Image src={img} alt="vid" />
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              {/* ================================================= 
            Navigation tour
            ================================================= */}

              <Box
                p={{ lg: "1rem" }}
                margin={{ lg: "1rem 2rem", md: "1rem ", sm: "0.5rem  " }}
                py="1.5rem"
                border="1px"
                borderRadius="lg"
                borderColor={tours ? "#fff" : "#0275d8"}
                // my="3rem"
              >
                <Flex
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "space-between",
                  //   alignItems: "center",
                  // }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Heading
                      as="h5"
                      size="l"
                      fontSize="1.2rem"
                      fontWeight="semibold"
                      border="1px"
                      w="23px"
                      h="23px"
                      textAlign="center"
                      lineHeight="19px"
                      borderRadius="3px"
                    >
                      2
                    </Heading>
                    <Text fontSize="1.1rem" ml="10px" fontWeight="500">
                      <a href="/#">Navigation tour</a>
                    </Text>
                  </Box>
                  <Box>
                    {tours ? (
                      <MdKeyboardArrowDown
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setTours(false)}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setTours(true)}
                      />
                    )}
                  </Box>
                </Flex>
                {!tours ? (
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    px="2rem"
                    flexDirection={{ lg: "row", md: "column", sm: "column" }}
                    className="responsive"
                  >
                    <Box pr={{ lg: "5rem", sm: "0" }}>
                      <Text fontSize="0.9rem">
                        <p>
                          Let’s show you around. Get to know our interface and
                          get the best out of Recruitee.
                        </p>
                      </Text>
                      <Button colorScheme="blue" mt="1rem">
                        Start tour
                      </Button>
                    </Box>

                    <Image src={tour} alt="vid" />
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              {/* 
          ====================================================
          sync calender
          =================================================== */}

              <Box
                p={{ lg: "1rem" }}
                margin={{ lg: "1rem 2rem", md: "1rem ", sm: "0.5rem  " }}
                py="1.5rem"
                border="1px"
                borderRadius="lg"
                borderColor={caln ? "#fff" : "#0275d8"}
                // my="3rem"
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Heading
                      as="h5"
                      size="l"
                      fontSize="1.2rem"
                      fontWeight="semibold"
                      border="1px"
                      w="23px"
                      h="23px"
                      textAlign="center"
                      lineHeight="19px"
                      borderRadius="3px"
                    >
                      3
                    </Heading>
                    <Text fontSize="1.1rem" ml="10px" fontWeight="500">
                      <a href="/#">Sync calendar and personal email</a>
                    </Text>
                  </Box>
                  <Box>
                    {caln ? (
                      <MdKeyboardArrowDown
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setcaln(false)}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setcaln(true)}
                      />
                    )}
                  </Box>
                </Box>
                {!caln ? (
                  <Box px="2rem">
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      flexDirection={{ lg: "row", md: "column", sm: "column" }}
                      className="responsive"
                    >
                      <Box pr={{ lg: "5rem" }}>
                        <Text fontSize="0.9rem">
                          <Text fontWeight="bold">
                            <p>2-way calendar sync</p>
                          </Text>
                          <p>
                            All events in Recruitee will be automatically added
                            to synced calendars and vice versa.
                            <a href="#/" style={{ color: "#0275d8" }}>
                              Learn more
                            </a>
                          </p>
                        </Text>
                        <Button colorScheme="blue" mt="1rem">
                          <AiOutlinePlus /> &nbsp; Sync calender
                        </Button>
                      </Box>

                      <Image src={cal} alt="calender" />
                    </Box>
                    <Text fontWeight="bold" mt="1rem">
                      Email provider
                    </Text>
                    <Text>
                      Decide which email address Recruitee should use to send
                      messages to candidates.
                      <a href="#/" style={{ color: "#0275d8" }}>
                        Learn more
                      </a>
                    </Text>

                    {/* ================================================================ */}

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
                      borderLeftWidth="5px"
                      borderLeftColor="#0275d8"
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
                          className="icon"
                        >
                          <AiFillGolden fontSize="1.8rem" />
                        </Center>
                        <Box ml="10px">
                          <Heading as="h5" fontSize="1rem" className="title">
                            Recruitee
                          </Heading>
                          <Text className="email">
                            gaurav@doendorse7.recruitee.com
                          </Text>
                        </Box>
                      </Box>

                      <Box
                        style={{ display: "flex", alignItems: "center" }}
                        className="responsive"
                      >
                        <Box
                          style={{ display: "flex", alignItems: "center" }}
                          color="#0275d8"
                          fontWeight="semibold"
                        >
                          <MdDone /> &nbsp;
                          <Text mr="10px">Activate</Text>
                        </Box>
                        <Button
                          border="1px"
                          borderColor="gray.300"
                          borderRadius="5px"
                          size="sm"
                        >
                          <MdEdit /> &nbsp; Edit
                        </Button>
                      </Box>
                    </Box>
                    {/* ========================================================================== */}
                    <Google
                      icon={<FcGoogle />}
                      name="Google 
                    (Gmail)"
                    />
                    <Google
                      icon={<MdMarkunreadMailbox />}
                      name="Other mailbox"
                    />
                  </Box>
                ) : (
                  ""
                )}
              </Box>
              {/* ====================================================
                    Adjust notifications
          ===================================================  */}
              <Box
                p={{ lg: "1rem" }}
                margin={{ lg: "1rem 2rem", md: "1rem ", sm: "0.5rem  " }}
                py="1.5rem"
                border="1px"
                borderRadius="lg"
                borderColor={notif ? "#fff" : "#0275d8"}
                // my="3rem"
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Heading
                      as="h5"
                      size="l"
                      fontSize="1.2rem"
                      fontWeight="semibold"
                      border="1px"
                      w="23px"
                      h="23px"
                      textAlign="center"
                      lineHeight="19px"
                      borderRadius="3px"
                    >
                      4
                    </Heading>
                    <Text fontSize="1.1rem" ml="10px" fontWeight="500">
                      <a href="/#"> Adjust notifications </a>
                    </Text>
                  </Box>
                  <Box>
                    {notif ? (
                      <MdKeyboardArrowDown
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setNotif(false)}
                      />
                    ) : (
                      <MdKeyboardArrowUp
                        cursor="pointer"
                        fontSize="1.2rem"
                        onClick={() => setNotif(true)}
                      />
                    )}
                  </Box>
                </Box>
                {!notif ? (
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    flexDirection={{ lg: "row", md: "column", sm: "column" }}
                    className="responsive"
                    px="2rem"
                  >
                    <Box pr={{ lg: "5rem" }}>
                      <Text fontSize="0.9rem">
                        <p>
                          Choose which kinds of notifications you'd like to
                          receive and how you'd like to receive them.
                        </p>
                      </Text>
                      <Button colorScheme="blue" mt="1rem">
                        Adjust now
                      </Button>
                    </Box>

                    <Image src={notifn} alt="notification" />
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </>
          ) : (
            ""
          )}
          {/* ==============================================*/}
        </Box>
      </Box>
      <br />
      <br />
    </>
  );
};

export default QuickStart;
