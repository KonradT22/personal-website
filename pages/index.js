import Head from "next/head";
import MyHeading from "../components/MyHeading";
import { Box, chakra, Flex, Link } from "@chakra-ui/react";

const DESCRIPTION =
  "I'm a data engineer building pipelines, production infrastructure, and the systems that keep them reliable.";

const hobbyPhotos = [
  "/hobbies/motopic.png",
  "/hobbies/snowboardpic.png",
  "/hobbies/fishingpic.png",
];

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

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Konrad Trestka</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://konradical.dev/" />
        <meta property="og:title" content="Konrad Trestka" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://konradical.dev/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Konrad Trestka" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://konradical.dev/og-image.png" />
      </Head>

      <main>
        <Flex
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flexDirection={["column", "column", "row"]}
          gap={10}
          px={[4, 5, 10]}
          pt={16}
          pb={32}
          maxWidth={"1250px"}
          mx={"auto"}>
          <Box maxWidth={"640px"}>
            <MyHeading as={"h1"} size={"3xl"} mb={8} fontWeight={800}>
              hi, i&apos;m konrad!
            </MyHeading>

            <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={5}>
              I&apos;m a data engineer and infrastructure builder finishing a
              double major in Computer Science and Data Science at the
              University of Minnesota (May 2027).
            </chakra.p>

            <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={5}>
              I&apos;m currently interning at <chakra.b>PURIS</chakra.b>, where
              I&apos;ve built ETL pipelines, migrated production workloads
              with zero data loss, and led a firewall cutover across multiple
              sites.
            </chakra.p>

            <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={5}>
              I also did a summer UROP in{" "}
              <HighlightLink href="https://github.com/KonradT22/VolatilityIsMostlyPathDependent">
                derivatives research
              </HighlightLink>{" "}
              — building neural-network surrogate pricers for path-dependent
              volatility models — and took 1st place at the FMA Quantitative
              Trading Competition, judged by DRW and Cargill, with a{" "}
              <HighlightLink href="https://github.com/KonradT22/FMA-TRADING-COMP-OptimizationStation">
                trading engine
              </HighlightLink>{" "}
              I built and deployed myself.
            </chakra.p>

            <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={5}>
              Originally from Chicago, based in Minneapolis. Bilingual in
              English and Polish.
            </chakra.p>

            <chakra.p fontSize={["md", "lg"]} lineHeight={1.9}>
              Check out my <HighlightLink href="/work#projects">projects</HighlightLink> or
              grab my{" "}
              <HighlightLink
                href="/resumes/Data_Resume_Konrad_Trestka_Fall_2026_Redacted.pdf"
                target="_blank"
                rel="noopener noreferrer">
                résumé
              </HighlightLink>
              .
            </chakra.p>
          </Box>

          <Flex
            direction={"column"}
            align={"center"}
            flexShrink={0}
            display={["none", "none", "flex"]}>
            <Box
              width={"350px"}
              height={"350px"}
              borderRadius={"50%"}
              border={"4px solid #2F7D4F"}
              overflow={"hidden"}>
              <chakra.img
                src="/img/websiteHeadshot.png"
                alt="Konrad Trestka"
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                objectPosition={"center 40%"}
                transform={"scale(1.35)"}
              />
            </Box>
          </Flex>
        </Flex>
        <Box px={[4, 5, 10]} pb={24} maxWidth={"1250px"} mx={"auto"}>
          <MyHeading fontSize={"3xl"} fontWeight={800} color={"#2F7D4F"} mb={4}>
            Outside of work
          </MyHeading>
          <chakra.p fontSize={["md", "lg"]} lineHeight={1.9} mb={6} maxWidth={"640px"}>
            When I&apos;m not building things, I&apos;m probably on a motorcycle, up at
            a mountain snowboarding, or out fishing.
          </chakra.p>
          <Flex gap={4} wrap={"wrap"}>
            {hobbyPhotos.map((src) => (
              <Box
                key={src}
                width={["100%", "220px"]}
                height={"220px"}
                borderRadius={"12px"}
                overflow={"hidden"}
                border={"1px solid #d7e6da"}>
                <chakra.img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </main>
    </Box>
  );
}
