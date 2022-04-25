import React from "react";

import Link from "./Link";

const MoodleLink = () => {
  const getUrl = () => {
    return `https://umass.moonami.com/course/view.php?id=30462`;
  };

  return (
    <Link url={getUrl()} title={"Moodle Course Page"} />
  );
};

export default MoodleLink;
