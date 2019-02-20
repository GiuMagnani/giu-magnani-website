import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const LatestProjectItems = ({ projects }) => {
  console.log(projects);
  return <div>{projects.map(project => project.name)}</div>;
};

export default LatestProjectItems;
