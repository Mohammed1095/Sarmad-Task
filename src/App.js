import "./App.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import React, { Suspense } from "react";
import "@fontsource/roboto";
import SearchForm from "../src/components/SearchForm";
import SplashScreen from "../src/components/common/SharedComponents/Splash/SplashScreen";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Suspense fallback={<SplashScreen />}>
        <SearchForm />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
