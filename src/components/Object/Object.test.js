import React from "react";
import { shallow } from "enzyme";
import Object from "./Object";

describe("Object", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Object />);
    expect(wrapper).toMatchSnapshot();
  });
});
