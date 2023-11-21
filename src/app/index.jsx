import { Routing } from "#pages";
import { withProviders } from "./providers";
import { Navbar } from "#widgets";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};

export default withProviders(App);
