import { Box } from "@chakra-ui/react";

export default function MountainBackdrop() {
  return (
    <Box
      position={"fixed"}
      inset={0}
      width={"100vw"}
      height={"100vh"}
      zIndex={-1}
      pointerEvents={"none"}
      aria-hidden={"true"}>
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="1600" height="900" fill="#EDF6EF" />

        {/* back ridge — furthest, lightest */}
        <path
          d="M0,430 L150,360 L280,410 L400,320 L520,390 L650,300 L780,370 L900,330 L1040,400 L1180,340 L1320,390 L1460,330 L1600,400 L1600,900 L0,900 Z"
          fill="#DCEBDD"
        />

        {/* mid ridge */}
        <path
          d="M0,560 L140,480 L260,540 L390,460 L520,530 L650,470 L780,540 L910,480 L1040,550 L1180,500 L1320,560 L1460,510 L1600,560 L1600,900 L0,900 Z"
          fill="#CFE3D2"
        />

        {/* front ridge — blends back into the page background */}
        <path
          d="M0,680 L160,620 L300,670 L440,600 L580,660 L720,610 L860,670 L1000,620 L1140,680 L1280,630 L1420,670 L1600,640 L1600,900 L0,900 Z"
          fill="#EDF6EF"
        />

        {/* faint treeline texture — layered pine silhouettes */}
        <defs>
          <g id="pine">
            <rect x="17" y="48" width="6" height="12" />
            <path d="M0,50 L40,50 L20,32 Z" />
            <path d="M5,36 L35,36 L20,18 Z" />
            <path d="M9,22 L31,22 L20,4 Z" />
          </g>
        </defs>
        <g fill="#C3DBC6" opacity={0.6}>
          <use href="#pine" transform="translate(40,650) scale(0.9)" />
          <use href="#pine" transform="translate(72,644) scale(1.3)" />
          <use href="#pine" transform="translate(112,652) scale(1.05)" />
          <use href="#pine" transform="translate(148,660) scale(0.75)" />
          <use href="#pine" transform="translate(1400,624) scale(0.8)" />
          <use href="#pine" transform="translate(1432,616) scale(1.2)" />
          <use href="#pine" transform="translate(1470,626) scale(1.4)" />
          <use href="#pine" transform="translate(1512,632) scale(0.95)" />
          <use href="#pine" transform="translate(1548,640) scale(0.7)" />
        </g>
      </svg>
    </Box>
  );
}
