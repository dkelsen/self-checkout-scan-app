import { useContext } from "react";

import Home from "./screens/Home";
import Scan from "./screens/Scan";
import { pagesMapping, RoutingContext } from "./context/Routing";

function App() {
  const { page } = useContext(RoutingContext);

  return (
    <>
      {pagesMapping.home === page && <Home />}
      {pagesMapping.scan === page && <Scan />}
    </>
  );
}

export default App;
