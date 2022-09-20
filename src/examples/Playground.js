import * as React from "react";

import Lightbox from "yet-another-react-lightbox";

import { Paragraph, LightboxButton } from "../components";
import {
  Settings,
  CheckboxFilter,
  SliderFilter,
  SelectFilter,
  FlexLineBreak,
  TextFieldFilter
} from "../components/playground";
import slides from "../data/slides";

const Playground = () => {
  const [open, setOpen] = React.useState(false);

  const [finite, setFinite] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [count, setCount] = React.useState(slides.length);
  const [preload, setPreload] = React.useState(2);
  const [fade, setFade] = React.useState(250);
  const [swipe, setSwipe] = React.useState(500);
  const [imageFit, setImageFit] = React.useState("contain");
  const [renderPrev, setRenderPrev] = React.useState(true);
  const [renderNext, setRenderNext] = React.useState(true);
  const [padding, setPadding] = React.useState("16px");
  const [spacing, setSpacing] = React.useState("30%");

  const [paddingError, setPaddingError] = React.useState(false);
  const [spacingError, setSpacingError] = React.useState(false);

  return (
    <>
      <Paragraph>
        Here is an interactive playground to test various parameters in
        real-time.
      </Paragraph>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides.slice(0, count)}
        carousel={{
          finite,
          preload,
          imageFit,
          ...(!paddingError
            ? { padding: padding !== "0" && padding !== "" ? padding : "0px" }
            : null),
          ...(!spacingError
            ? { spacing: spacing !== "0" && spacing !== "" ? spacing : "0px" }
            : null)
        }}
        animation={{ fade, swipe }}
        on={{
          view: (index) => console.log("View", index),
          entering: () => console.log("Entering"),
          entered: () => console.log("Entered"),
          exiting: () => console.log("Exiting"),
          exited: () => console.log("Exited")
        }}
        render={{
          buttonPrev: renderPrev ? undefined : () => null,
          buttonNext: renderNext ? undefined : () => null
        }}
      />

      <LightboxButton onClick={() => setOpen(true)} />

      <Paragraph>You can adjust the live demo settings below.</Paragraph>

      <Settings>
        <SliderFilter
          label="Slides"
          min={1}
          max={slides.length}
          value={count}
          onChange={(event) => {
            const newCount = event.target.value;
            setCount(newCount);
            if (index >= newCount) {
              setIndex(newCount - 1);
            }
            if (preload * 2 + 1 > newCount) {
              setPreload(Math.floor((newCount - 1) / 2));
            }
          }}
        />

        <SliderFilter
          label="Index"
          min={0}
          max={count - 1}
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />

        <SliderFilter
          label="Preload"
          min={0}
          max={Math.floor((count - 1) / 2)}
          value={preload}
          onChange={(event) => setPreload(event.target.value)}
        />

        <SliderFilter
          label="Fade duration"
          min={0}
          max={3000}
          step={50}
          value={fade}
          onChange={(event) => setFade(event.target.value)}
        />

        <SliderFilter
          label="Swipe duration"
          min={0}
          max={3000}
          step={50}
          value={swipe}
          onChange={(event) => setSwipe(event.target.value)}
        />

        <SelectFilter
          label="imageFit"
          options={["contain", "cover"]}
          value={imageFit}
          onChange={(value) => setImageFit(value)}
        />

        <TextFieldFilter
          label="Padding"
          helperText="e.g., '16px', '5%' or '0'"
          error={paddingError}
          value={padding}
          onChange={(value) => {
            setPadding(value);
            setPaddingError(!CSS.supports("padding", value));
          }}
        />

        <TextFieldFilter
          label="Spacing"
          helperText="e.g., '30%', '100px' or '0'"
          value={spacing}
          error={spacingError}
          onChange={(value) => {
            setSpacing(value);
            setSpacingError(!CSS.supports("width", value));
          }}
        />

        <FlexLineBreak />

        <CheckboxFilter
          label="Infinite"
          checked={!finite}
          onChange={(checked) => setFinite(!checked)}
        />

        <CheckboxFilter
          label="Prev button"
          checked={renderPrev}
          onChange={(checked) => setRenderPrev(checked)}
        />

        <CheckboxFilter
          label="Next button"
          checked={renderNext}
          onChange={(checked) => setRenderNext(checked)}
        />
      </Settings>
    </>
  );
};

export default Playground;
