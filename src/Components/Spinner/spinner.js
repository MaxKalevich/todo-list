import React from "react";

import SpinnerGif from "./unnamed.gif";

import {Img} from "./spinner-styled";

const Spinner = () => {
    return (
        <div>
            <Img src={SpinnerGif} alt="spinner" />
        </div>
    );
}

export {Spinner};
