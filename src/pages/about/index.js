import React from "react";

import FirstIntroBlack from "../../components/firstIntroBlack";
import AboutComponent from "../../components/about";

export default function Projects() {
  return (
    <>
      <FirstIntroBlack showComponent={<AboutComponent />} />
      {/* <AboutComponent /> */}
    </>
  );
}
