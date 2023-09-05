import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div>
      <h3 className="uppercase font-bold tracking-wide text-secondary inline-block mb-1.5">
        {title}
      </h3>
      <h2 className="font-bold text-3xl md:text-4xl capitalize tracking-tight heading-font">
        {subTitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
