import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {



 
  return (
    <>
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            {/* "exact" is used to match the exact root (/) path */}
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink/>
        </div>
      </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;

/*
Routes is used for react-dom v6
*/
