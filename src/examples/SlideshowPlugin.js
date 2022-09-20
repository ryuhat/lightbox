import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import { LightboxButton, Paragraph } from "../components";
import {
  Settings,
  CheckboxFilter,
  SliderFilter
} from "../components/playground";
import slides from "../data/slides";

const InlinePlugin = () => {
  const [open, setOpen] = React.useState(false);
  const [autoplay, setAutoplay] = React.useState(false);
  const [delay, setDelay] = React.useState(3000);

  return (
    <>
      <Paragraph>Slideshow plugin adds slideshow autoplay feature.</Paragraph>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        slideshow={{ autoplay, delay }}
        plugins={[Slideshow]}
      />

      <LightboxButton onClick={() => setOpen(true)} />

      <Paragraph>You can adjust the live demo settings below.</Paragraph>

      <Settings>
        <CheckboxFilter
          label="autoplay"
          checked={autoplay}
          onChange={(checked) => setAutoplay(checked)}
        />
        <SliderFilter
          label="delay"
          min={1_000}
          max={10_000}
          step={500}
          value={delay}
          onChange={(value) => setDelay(value)}
        />
      </Settings>
    </>
  );
};

export default InlinePlugin;
