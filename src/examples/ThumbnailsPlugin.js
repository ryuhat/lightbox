import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";

import { LightboxButton, Paragraph } from "../components";
import { SelectFilter, Settings, SliderFilter } from "../components/playground";
import slides from "../data/slides";

const InlinePlugin = () => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");
  const [width, setWidth] = React.useState(120);
  const [height, setHeight] = React.useState(80);
  const [border, setBorder] = React.useState(1);
  const [borderRadius, setBorderRadius] = React.useState(4);
  const [padding, setPadding] = React.useState(4);
  const [gap, setGap] = React.useState(16);
  const [preload, setPreload] = React.useState(2);

  return (
    <>
      <Paragraph>Thumbnails plugin adds thumbnails track.</Paragraph>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        carousel={{ preload }}
        plugins={[Thumbnails]}
        thumbnails={{
          position,
          width,
          height,
          border,
          borderRadius,
          padding,
          gap
        }}
      />

      <LightboxButton onClick={() => setOpen(true)} />

      <Paragraph>You can adjust the live demo settings below.</Paragraph>

      <Settings>
        <SelectFilter
          label="Position"
          options={["top", "bottom", "start", "end"]}
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <SliderFilter
          label="Width"
          min={50}
          max={150}
          value={width}
          onChange={(value) => setWidth(value)}
        />
        <SliderFilter
          label="Height"
          min={50}
          max={150}
          value={height}
          onChange={(value) => setHeight(value)}
        />
        <SliderFilter
          label="Border width"
          min={0}
          max={5}
          value={border}
          onChange={(value) => setBorder(value)}
        />
        <SliderFilter
          label="Border radius"
          min={0}
          max={20}
          value={borderRadius}
          onChange={(value) => setBorderRadius(value)}
        />
        <SliderFilter
          label="Padding"
          min={0}
          max={50}
          value={padding}
          onChange={(value) => setPadding(value)}
        />
        <SliderFilter
          label="Gap"
          min={0}
          max={200}
          value={gap}
          onChange={(value) => setGap(value)}
        />
        <SliderFilter
          label="Preload"
          min={0}
          max={10}
          value={preload}
          onChange={(value) => setPreload(value)}
        />
      </Settings>
    </>
  );
};

export default InlinePlugin;
