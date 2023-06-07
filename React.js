import React from "react";
import Router from "./routes/Router";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

function App() {
   useEffect(() => {
      smoothscroll.polyfill();
      window.scrollTo(0, 0);
   }, []);
   return (
      <div>
         <Router />
      </div>
   );
}
export default App;
