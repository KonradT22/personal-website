import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Footer } from "../components/footer";
import MountainBackdrop from "../components/MountainBackdrop";

const theme = extendTheme({
  fonts: {
    heading:
      'Lato, Poppins, Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    body: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  styles: {
    global: {
      html: {
        bg: "#EDF6EF",
      },
      body: {
        bg: "transparent",
        color: "#16241C",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _focus: { boxShadow: "none" },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight={"100vh"}>
        <MountainBackdrop />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
