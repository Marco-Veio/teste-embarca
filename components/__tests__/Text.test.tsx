import React from "react";
import renderer from "react-test-renderer";

import { Text } from "../Themed";

describe("Text component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Text>Star Wars</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
