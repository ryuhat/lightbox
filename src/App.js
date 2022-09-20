import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink
} from "react-router-dom";

import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import BasicExample from "./examples/BasicExample";
import Playground from "./examples/Playground";
import PhotoGallery from "./examples/PhotoGallery";
import CustomSlides from "./examples/CustomSlides";
import CaptionsPlugin from "./examples/CaptionsPlugin";
import FullscreenPlugin from "./examples/FullscreenPlugin";
import InlinePlugin from "./examples/InlinePlugin";
import SlideshowPlugin from "./examples/SlideshowPlugin";
import ThumbnailsPlugin from "./examples/ThumbnailsPlugin";
import VideoPlugin from "./examples/VideoPlugin";
import ZoomPlugin from "./examples/ZoomPlugin";

import "yet-another-react-lightbox/styles.css";

import "./styles/App.css";

const navigation = [
  {
    section: { name: "Examples", path: "examples" },
    items: [
      { name: "Photo Gallery", path: "gallery", element: <PhotoGallery /> },
      { name: "Basic Example", path: "basic", element: <BasicExample /> },
      { name: "Playground", path: "playground", element: <Playground /> },
      {
        name: "Custom Slides",
        path: "custom-slides",
        element: <CustomSlides />
      }
    ]
  },
  {
    section: {
      name: "Plugins",
      path: "plugins"
    },
    items: [
      {
        name: "Captions Plugin",
        path: "captions",
        element: <CaptionsPlugin />
      },
      {
        name: "Fullscreen Plugin",
        path: "fullscreen",
        element: <FullscreenPlugin />
      },
      { name: "Inline Plugin", path: "inline", element: <InlinePlugin /> },
      {
        name: "Slideshow Plugin",
        path: "slideshow",
        element: <SlideshowPlugin />
      },
      {
        name: "Thumbnails Plugin",
        path: "thumbnails",
        element: <ThumbnailsPlugin />
      },
      { name: "Video Plugin", path: "video", element: <VideoPlugin /> },
      { name: "Zoom Plugin", path: "zoom", element: <ZoomPlugin /> }
    ]
  }
];

const Layout = () => (
  <Container maxWidth="lg" className="App">
    <Typography variant="h1">Yet Another React Lightbox</Typography>
    <iframe
      src="https://ghbtns.com/github-btn.html?user=igordanchenko&repo=yet-another-react-lightbox&type=star&count=true&size=large"
      frameBorder="0"
      scrolling="0"
      width="170"
      height="30"
      title="GitHub"
    ></iframe>
    <Divider />
    <nav>
      {navigation.map(({ section, items }) => (
        <section key={section.path}>
          <Typography>{section.name}:</Typography>
          {items.map(({ path, name }) => (
            <Link
              key={path}
              to={`/${section.path}/${path}`}
              component={NavLink}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal"
              })}
            >
              {name}
            </Link>
          ))}
        </section>
      ))}
    </nav>
    <Divider />
    <main>
      <Outlet />
    </main>
  </Container>
);

const Placeholder = () => (
  <Typography>Select one of the demos above</Typography>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Placeholder />} />
        {navigation.map(({ section, items }) => (
          <Route key={section.path} path={section.path}>
            <Route index element={<Placeholder />} />
            {items.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
