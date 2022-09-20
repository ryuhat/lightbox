import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

import { Paragraph } from "../components";
import slides from "../data/slides";

const InlinePlugin = () => (
  <>
    <Paragraph>
      Inline plugin allows rendering a lightbox inside the document.
    </Paragraph>

    <Lightbox
      slides={slides}
      plugins={[Inline]}
      inline={{
        style: {
          width: "100%",
          maxWidth: "900px",
          aspectRatio: "3 / 2"
        }
      }}
    />
  </>
);

export default InlinePlugin;
