/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, cssTransition } from "react-toastify";
import Navbar from "./components/UI/navbar";
import Loader from "./components/UI/loader";
// import LandingLoader from "./component/LandingLoader";
const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news/:id" component={NewsPage} />
          {/* <Route component={NotFoundPage} /> */}
          <ToastContainer transition={bounce} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
