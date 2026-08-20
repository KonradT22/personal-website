import { Box, chakra, Flex, Hide, Link, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export function Footer() {
  return (
    <Hide breakpoint={"print"}>
      <Box bg={"rgba(0,0,0,0.05)"} width={"100%"} p={5} m={0}>
        <Flex justifyContent={"center"} flexWrap={"wrap"} py={10}>
          <Link m={2} href={"mailto:ktrestka05@gmail.com"} target={"_blank"}>
            <Flex m={2} alignItems={"center"}>
              <HiMail size={"1.5em"} />
              <chakra.p ml={2}>ktrestka05@gmail.com</chakra.p>
            </Flex>
          </Link>
          <Link m={2} href={"https://github.com/KonradT22"} target={"_blank"}>
            <Flex m={2} alignItems={"center"}>
              <AiOutlineGithub size={"1.5em"} />
              <chakra.p ml={2}>/KonradT22</chakra.p>
            </Flex>
          </Link>
          <Link m={2} href={"https://www.linkedin.com/in/konrad-trestka-dev/"} target={"_blank"}>
            <Flex m={2} alignItems={"center"}>
              <AiFillLinkedin size={"1.5em"} />
              <chakra.p ml={2}>/in/konrad-trestka-dev</chakra.p>
            </Flex>
          </Link>
        </Flex>
        <Text textAlign={"center"} color={"gray.500"} fontSize={"sm"} pb={4}>
          Konrad Trestka
        </Text>
      </Box>
    </Hide>
  );
}
