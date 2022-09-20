import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import { LightboxButton, Paragraph } from "../components";
import slides from "../data/slides";

const InlinePlugin = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Paragraph>
        Captions plugin allows you to add titles and descriptions to your
        slides.
      </Paragraph>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            ...slides[2],
            title: "Flamingo",
            description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia"
          },
          {
            ...slides[3],
            title: "Starfish on a sand beach",
            description: "Pedro Lastra\n\nKey West, Florida, United States"
          },
          {
            ...slides[6],
            title:
              "The last night of a two week stay on the North Shore of Oahu, Hawaii",
            description:
              "Sean Oulashin\n\nNorth Shore, Waialua, Hawaii, United States"
          }
        ]}
        plugins={[Captions]}
      />

      <LightboxButton onClick={() => setOpen(true)} />
    </>
  );
};

export default InlinePlugin;
