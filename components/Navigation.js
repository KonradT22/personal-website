import { Flex, Heading, Hide, HStack, Link, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { Box } from "@chakra-ui/react";

const Pages = () => {
  const LINKS = [
    { name: "work", href: "/work#work" },
    { name: "projects", href: "/work#projects" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <HStack spacing={4} alignItems={"center"}>
      {LINKS.map(({ name, href }) => (
        <NextLink key={href} href={href} passHref>
          <Link>
            <Text fontSize={16} fontWeight={400} color={"#16241C"}>
              {name}
            </Text>
          </Link>
        </NextLink>
      ))}
    </HStack>
  );
};

const SocialLinks = () => {
  const LINKS = [
    { name: "/KonradT22", icon: faGithub, href: "https://github.com/KonradT22" },
    { name: "/in/konrad-trestka-dev", icon: faLinkedin, href: "https://www.linkedin.com/in/konrad-trestka-dev/" },
  ];
  return (
    <HStack spacing={6} alignItems={"center"}>
      {LINKS.map(({ name, icon, href }) => (
        <Link key={href} href={href} isExternal>
          <Text
            fontSize={14}
            fontWeight={400}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            {icon && (
              <Box width={4} pr={4} display={"inline-block"} mr={1}>
                <FontAwesomeIcon icon={icon} style={{ width: 16, height: 16 }} />
              </Box>
            )}
            {name}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

export default function Navigation() {
  return (
    <Hide breakpoint={"print"}>
      <Flex justifyContent={"center"}>
        <Flex p={5} justifyContent={"space-between"} alignItems={"center"} flexGrow={1} maxW={1250}>
          {/*   LEFT SIDE    */}
          <Flex alignItems={"center"} gap={8}>
            <NextLink href="/" passHref>
              <Link _hover={{ textDecoration: "underline" }} _focus={{ boxShadow: "none" }}>
                <Heading size={"lg"} fontWeight={800} color={"#16241C"}>
                  konrad trestka
                </Heading>
              </Link>
            </NextLink>
            <Box display={["none", "flex", "flex"]}>
              <Pages />
            </Box>
          </Flex>
          {/*   RIGHT SIDE    */}
          <Flex display={["none", "none", "block"]}>
            <SocialLinks />
          </Flex>
        </Flex>
      </Flex>
    </Hide>
  );
}
