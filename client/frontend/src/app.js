import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/shared_components/footer.jsx";
import Header from "./components/shared_components/header.jsx";
import LandingPage from "./pages/landing_page.jsx";
import RegistrationPage from "./components/users/register.jsx";
import CreatePostComponent from "./pages/create_post.jsx";
import PostsInfoPage from "./pages/posts_info.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" />

          <Route path="/create" element={<CreatePostComponent />} />
          <Route path="/search" />
          <Route path="/category/:categoryID" element={<PostsInfoPage />} />

          <Route path="/product/:productID" element={<PostsInfoPage />} />

          <Route path="/page/faq" />
          <Route path="/page/anti-scam" />
          <Route path="/page/terms" />
          <Route path="/page/privacy" />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
