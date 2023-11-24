import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Question,
  ContactUs,
  Footer,
  CopyRight,
} from "./components/index";
import {
  Home,
  Services,
  Projects,
  Prices,
  Blog,
  Contact,
  NotFound,
  Article,
  Legal,
} from "./pages/index";
const App = () => {
  return (
    <BrowserRouter location={"/"} navigator={undefined}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<Article />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Question />
      <ContactUs />
      <Footer />
      <CopyRight />
    </BrowserRouter>
  );
};

export default App;
