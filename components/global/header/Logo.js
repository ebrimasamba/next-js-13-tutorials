import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="866"
      height="242"
      viewBox="0 0 866 242"
    >
      <image
        width="866"
        height="242"
        xlink:href="data:img/png;base64,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"
      />
    </svg>
  );
};

export default Logo;
