import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleTextToggleButton buttonText={"Show more"}
    onClick={function clickbutton(){}}/>);
    expect(container).toMatchSnapshot();
  });
});
