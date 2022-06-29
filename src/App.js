import Routing from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routing />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
