import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import { Paragraph } from "../components";
import photos from "../data/photos";
import slides from "../data/slides";

const PhotoGallery = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <Paragraph>
        Here is an example of a photo gallery with a lightbox. You can click any
        photo to open it in a lightbox.
      </Paragraph>

      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: "lazy" } }}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};

export default PhotoGallery;
