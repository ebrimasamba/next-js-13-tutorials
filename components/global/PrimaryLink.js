import Link from "next/link";
import React from "react";

const PrimaryLink = ({ href = "/", children }) => {
  return (
    <Link href={href} className="bg-primary">
      {children}
    </Link>
  );
};

export default PrimaryLink;
