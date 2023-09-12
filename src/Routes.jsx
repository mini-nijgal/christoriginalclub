import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookPro14One = React.lazy(() => import("pages/MacBookPro14One"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/macbookpro14one" element={<MacBookPro14One />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
