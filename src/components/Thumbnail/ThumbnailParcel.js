import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Thumbnail } from "./Thumbnail";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Thumbnail,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
