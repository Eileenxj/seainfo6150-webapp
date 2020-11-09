import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleList articles={[{"a":"b"}]}/>);
    expect(container).toMatchSnapshot();
  });
});
