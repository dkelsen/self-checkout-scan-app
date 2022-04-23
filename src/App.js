import { useContext } from "react";

import Home from "./screens/Home";
import { pagesMapping, RoutingContext } from "./context/Routing";

function App() {
  const { page } = useContext(RoutingContext);

  return <>{pagesMapping.home === page && <Home />}</>;
}

export default App;
