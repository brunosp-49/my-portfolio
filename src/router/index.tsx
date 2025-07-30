import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { NotFound } from "../pages/notFound";
import { Contact } from "../pages/contact";
import { Projects } from "../pages/projects";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
