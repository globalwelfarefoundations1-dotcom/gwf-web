import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';

/* The home page ships in the main bundle; the rest are split out and
   fetched on first visit. */
const About = lazy(() => import('./pages/About.jsx'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo.jsx'));
const GetInvolved = lazy(() => import('./pages/GetInvolved.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const ProjectsPage = lazy(() => import('./pages/projects/ProjectsPage.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

/* Holds the page height while a route chunk loads, so the footer does not
   jump up the screen. */
function RouteFallback() {
  return <div className="min-h-[60vh]" aria-busy="true" />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<RouteFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="what-we-do"
          element={
            <Suspense fallback={<RouteFallback />}>
              <WhatWeDo />
            </Suspense>
          }
        />
        <Route
          path="get-involved"
          element={
            <Suspense fallback={<RouteFallback />}>
              <GetInvolved />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
