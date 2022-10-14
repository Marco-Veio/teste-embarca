import React from "react";
import renderer from "react-test-renderer";

import { View, Text } from "../Themed";

describe("View component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <View>
          <Text>Star Wars</Text>
        </View>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
