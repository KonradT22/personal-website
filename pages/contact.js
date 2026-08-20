import Head from "next/head";
import { Box, chakra, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HighlightLink = ({ href, children, ...props }) => (
  <Link
    href={href}
    isExternal={href.startsWith("http")}
    bg={"transparent"}
    color={"#1F6B3A"}
    fontWeight={600}
    textDecoration={"underline"}
    borderRadius={"3px"}
    px={"2px"}
    transition={"background 0.15s"}
    _hover={{ bg: "#CFE8D2" }}
    {...props}>
    {children}
  </Link>
);

export default function Contact() {
  return (
    <Box>
      <Head>
        <title>Contact — Konrad Trestka</title>
        <meta name="description" content="Get in touch with Konrad Trestka." />
      </Head>

      <Box maxWidth={"720px"} mx={"auto"} px={[4, 5, 10]} pt={10} pb={32}>
        <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={6}>
          The best way to contact me is to email me at{" "}
          <HighlightLink href="mailto:ktrestka05@gmail.com">
            ktrestka05@gmail.com
          </HighlightLink>
          . I respond to most emails, especially about full-time roles,
          internships, research, or anything I've built.
        </chakra.p>

        <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={4}>
          I'm on most platforms as{" "}
          <chakra.b>Konrad Trestka</chakra.b>, including:
        </chakra.p>

        <UnorderedList spacing={3} mb={6} styleType={"none"} ml={0}>
          <ListItem>
            <HighlightLink href="https://www.linkedin.com/in/konrad-trestka-dev/">
              <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: 8 }} />
              /in/konrad-trestka-dev
            </HighlightLink>
          </ListItem>
          <ListItem>
            <HighlightLink href="https://github.com/KonradT22">
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 }} />
              /KonradT22
            </HighlightLink>
          </ListItem>
        </UnorderedList>

        <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={6}>
          Feel free to follow along on GitHub or LinkedIn, but email is
          fastest.
        </chakra.p>

        <chakra.p fontSize={["md", "lg"]} lineHeight={1.9}>
          I'm at the University of Minnesota through May 2027 — open to 2027
          roles and off-cycle internships. If you're hiring or just want to
          talk shop, reach out.
        </chakra.p>
      </Box>
    </Box>
  );
}
