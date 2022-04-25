import React from "react";

import Link from "./Link";

const SyllabusLink = () => {
  const getUrl = () => {
    return `https://umass.moonami.com/pluginfile.php/1975738/mod_resource/content/1/690A-Spring%2022-Syllabus.pdf`;
  };

  return (
    <Link url={getUrl()} title={"Here is a link to download the Syllabus"} />
  );
};

export default SyllabusLink;
