import React from "react";
import renderer from "react-test-renderer";

import { StyledText } from "../StyledText";

describe("StyledText component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<StyledText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
