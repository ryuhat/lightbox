import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import { LightboxButton, Paragraph, Link } from "../components";
import slides from "../data/slides";

const FullscreenPlugin = () => {
  const [open, setOpen] = React.useState(false);
  const [auto, setAuto] = React.useState(false);

  const isFullscreenEnabled = () =>
    document.fullscreenEnabled ??
    document.webkitFullscreenEnabled ??
    document.mozFullScreenEnabled ??
    document.msFullscreenEnabled;

  return (
    <>
      <Lightbox
        open={open}
        fullscreen={auto}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Fullscreen]}
      />

      {isFullscreenEnabled() ? (
        <>
          <Paragraph>
            Fullscreen plugin adds the "fullscreen" button in browsers that
            support fullscreen mode.
          </Paragraph>

          <LightboxButton
            onClick={() => {
              setAuto(false);
              setOpen(true);
            }}
          />

          <Paragraph>
            The fullscreen mode can be requested automatically. However, this
            doesn't work in all browsers.
          </Paragraph>

          <LightboxButton
            onClick={() => {
              setAuto(true);
              setOpen(true);
            }}
          />
        </>
      ) : (
        <>
          <Paragraph>
            Fullscreen plugin doesn't work in some browsers (i.e. Safari on
            iPhone) or inside iframes.
          </Paragraph>

          <Paragraph>
            Please{" "}
            <Link
              href="https://9qvmif.csb.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              open this demo
            </Link>{" "}
            in a separate window or try a different browser.
          </Paragraph>
        </>
      )}
    </>
  );
};

export default FullscreenPlugin;
