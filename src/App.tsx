import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";

function App() {
  const element = useRoutes([
    { path: '/', element: <Home />},
    { path: '/page1', element: <Page1 /> },
    { path: '/page2', element: <Page2 /> },
  ]);

  const location = useLocation();

  if (!element) return null;
  
  return (
    <>
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
    </>
  )
}

export default App
