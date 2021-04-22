import React from "react";

import FirstIntroBlack from "../../components/firstIntroBlack";
import ProjectsComponent from "../../components/projects";

export default function Projects() {
  return (
    <>
      <FirstIntroBlack showComponent={<ProjectsComponent />} />
      {/* <ProjectsComponent /> */}
    </>
  );
}
