import Head from "next/head";
import MyHeading from "../components/MyHeading";
import { Box, chakra, Flex, Link, Wrap, WrapItem } from "@chakra-ui/react";

const Pill = ({ href, children }) => (
  <Link
    href={href}
    isExternal
    bg={"#DDEEE0"}
    color={"#1F6B3A"}
    fontWeight={500}
    fontSize={"sm"}
    textDecoration={"underline"}
    borderRadius={"4px"}
    px={2}
    py={"1px"}
    _hover={{ bg: "#bfe0c4" }}>
    {children}
  </Link>
);

const CompanyIcon = ({ logo, bg, children }) => (
  <Flex
    flexShrink={0}
    width={"56px"}
    height={"56px"}
    borderRadius={"50%"}
    bg={logo ? "white" : bg}
    border={logo ? "1px solid #d7e6da" : "none"}
    color={"white"}
    align={"center"}
    justify={"center"}
    overflow={"hidden"}
    fontWeight={700}
    fontSize={"lg"}>
    {logo ? (
      <chakra.img src={logo} alt="" width={"70%"} height={"70%"} objectFit={"contain"} />
    ) : (
      children
    )}
  </Flex>
);

const experience = [
  {
    org: "PURIS",
    logo: "/img/logos/puris.png",
    role: "Data Engineer Intern → Systems & Infrastructure",
    period: "Aug 2025 – Present",
    body: [
      "A bit of everything on the systems side — pipelines, database migrations, network stuff. Whatever infra problem shows up, I'm probably the one on it.",
    ],
  },
  {
    org: "University of Minnesota",
    logo: "/img/logos/umn.png",
    role: "Undergraduate Researcher — Derivatives (UROP)",
    period: "May 2026 – Aug 2026",
    body: [
      "Built a neural net that acts like a fast digital twin for a much slower path-dependent volatility model, getting close to the accuracy of the full model while making calibration fast enough for real-time use. Advised by John Dodson.",
    ],
  },
  {
    org: "Fine Global Assets",
    logo: "/img/logos/fga.jpeg",
    role: "Software Engineer Intern",
    period: "May 2024 – Dec 2024",
    body: [
      "Built the company website pretty much solo, working directly with the CEO. Nice bump in engagement and retention after launch.",
    ],
  },
  {
    org: "Upwork",
    logo: "/img/logos/UW.png",
    role: "Freelance Web Developer",
    period: "Aug 2023 – May 2024",
    body: [
      "Freelanced full-stack projects for a handful of clients. Good way to learn fast and get paid doing it.",
    ],
  },
];

const projects = [
  {
    title: "Quantitative Trading Engine",
    tagline: "1st place — FMA Quantitative Trading Competition",
    body: "An event-driven trading bot I built and live-traded for the competition — momentum signals, automatic stop-losses, the works. Judged by folks from DRW, Cargill, and OCC, and it never lost money live.",
    links: [
      { label: "Github", href: "https://github.com/KonradT22/FMA-TRADING-COMP-OptimizationStation" },
    ],
  },
  {
    title: "Neural Surrogates for Path-Dependent Volatility",
    tagline: "Undergraduate derivatives research",
    body: "A neural net that mimics a much slower options-pricing model — basically trying to get the speed of a simple model with the accuracy of a complicated one. Added guardrails so it knows when to stop trusting itself and fall back to the full model.",
    links: [
      { label: "Github", href: "https://github.com/KonradT22/VolatilityIsMostlyPathDependent" },
    ],
  },
  {
    title: "Algorithmic Trading Backtester",
    tagline: "OOP backtesting engine",
    body: "A little framework for testing trading strategies before risking real money on them. Has an optional news-sentiment add-on.",
    links: [
      { label: "Github", href: "https://github.com/KonradT22/algorithmic-trading-backtester" },
    ],
  },
  {
    title: "AJAP — Job-Search Command Center",
    tagline: "Self-hosted always-on daemon",
    body: "Scrapes job postings from a bunch of sources, filters out the noise, and pings me when something good shows up. Runs on its own 24/7.",
    links: [{ label: "Github", href: "https://github.com/KonradT22/ajap" }],
  },
  {
    title: "DIY Electronic Handbrake",
    tagline: "Sim-racing hardware",
    body: "Built a handbrake for sim racing from scratch — potentiometer, Arduino, and a hand-welded steel lever. Plug-and-play with any racing game.",
    links: [{ label: "Github", href: "https://github.com/KonradT22/handbrake-arduino" }],
  },
  {
    title: "Gopher Major Planner",
    tagline: "Degree-planning tool for UMN students",
    body: "Built this with some friends from the Social Coding club. Pulls real course data so you're not planning off stale info.",
    links: [{ label: "Github", href: "https://github.com/benatfroemming/MmOverlap" }],
  },
];

export default function Work() {
  return (
    <Box>
      <Head>
        <title>Work & Projects — Konrad Trestka</title>
        <meta name="description" content="Work experience and projects." />
      </Head>

      <Box maxWidth={"1050px"} mx={"auto"} px={[4, 5, 10]} pb={32}>
        <Box id={"work"} pt={10} scrollMarginTop={"90px"}>
          <MyHeading fontSize={"5xl"} fontWeight={800} color={"#2F7D4F"} mb={10}>
            Work
          </MyHeading>

          <Flex direction={"column"} gap={10}>
            {experience.map((e) => (
              <Flex key={e.org} gap={5} align={"flex-start"}>
                <CompanyIcon logo={e.logo} />
                <Box flex={1}>
                  <Flex
                    justify={"space-between"}
                    align={["flex-start", "baseline"]}
                    direction={["column", "row"]}
                    gap={1}
                    mb={2}>
                    <chakra.h3 fontSize={"xl"} fontWeight={700} color={"#1F6B3A"}>
                      {e.org} <chakra.span fontWeight={400} color={"#16241C"}>— {e.role}</chakra.span>
                    </chakra.h3>
                    <chakra.span fontSize={"sm"} color={"gray.600"} whiteSpace={"nowrap"}>
                      {e.period}
                    </chakra.span>
                  </Flex>
                  {e.body.map((p, i) => (
                    <chakra.p key={i} fontSize={"md"} lineHeight={1.8} mb={2}>
                      {p}
                    </chakra.p>
                  ))}
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box id={"projects"} pt={24} scrollMarginTop={"90px"}>
          <MyHeading fontSize={"5xl"} fontWeight={800} color={"#2F7D4F"} mb={4}>
            Projects
          </MyHeading>
          <chakra.p fontSize={"lg"} mb={10}>
            Quant research, trading systems, and a few things built just to build them:
          </chakra.p>

          <Flex direction={"column"} gap={10}>
            {projects.map((p) => (
              <Box key={p.title} borderBottom={"2px solid #9CC0A2"} pb={8}>
                <chakra.h3 fontSize={"2xl"} fontWeight={700} mb={1}>
                  {p.title}
                </chakra.h3>
                <chakra.p fontSize={"md"} color={"gray.600"} mb={3}>
                  {p.tagline}
                </chakra.p>
                <chakra.p fontSize={"md"} lineHeight={1.8} mb={4}>
                  {p.body}
                </chakra.p>
                <Wrap>
                  {p.links.map((l) => (
                    <WrapItem key={l.href}>
                      <Pill href={l.href}>{l.label}</Pill>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
