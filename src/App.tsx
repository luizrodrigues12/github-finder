import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
    // <div className={classes.app}>
    //   <h1 className={classes.app__h1}>GitHub Finder</h1>
    //   <Outlet />
    // </div>
  );
}

export default App;
