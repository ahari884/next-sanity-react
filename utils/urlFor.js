import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default urlFor;
