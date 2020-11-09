import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleListItem article={{"title":"Airline etiquette"}} key={"120103104851-couple-airplane-cabin"}/>);
    expect(container).toMatchSnapshot();
  });
});
