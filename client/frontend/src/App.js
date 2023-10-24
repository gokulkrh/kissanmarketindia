// import Header from "./components/header";
// import Footer from "./components/footer";
// import Categories from "./components/catregories-carousel";
import HomePage from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/test"
          element={
            <>
              <h1>Test World</h1>
            </>
          }
        />

        <Route
          path="/search"
          element={
            <>
              <h1>Test World</h1>
            </>
          }
        />

        <Route
          path="/category"
          element={
            <>
              <h1>Test World</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
