import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { ModalWindow } from "./ModalWindow";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ModalWindow,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
