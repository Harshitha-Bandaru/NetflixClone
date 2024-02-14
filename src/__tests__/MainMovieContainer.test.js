// write unit test cases for MainMovieContainer component using jest
import { render } from "@testing-library/react";
import MainMovieContainer from "../components/MainMovieContainer";

describe("MainMovieContainer", () => {
  it("should render the component", () => {
    const { getByText } = render(
      <MainMovieContainer title="Title" desc="Description" />
    );
    const title = getByText("Title");
    const desc = getByText("Description");
    const playButton = getByText("▶️ Play");
    const moreInfoButton = getByText("ℹ️ More Info");
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
  });
});

// Path: src/__tests__/MainMovieContainer.js
// Compare this snippet from src/components/MainMovieContainer.jsx:
// import React from "react";
//
// const MainMovieContainer = ({ title, desc }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p className="w-1/2">{desc}</p>
//       <div className="flex gap-3">
//         <button className="">▶️ Play</button>
//         <button className="">ℹ️ More Info</button>
//       </div>
//     </div>
//   );
// };
//
// export default MainMovieContainer;
// write unit test cases for MainMovieContainer component using jest
describe("MainMovieContainer", () => {
  it("should render the component", () => {
    const { getByText } = render(
      <MainMovieContainer title="Title" desc="Description" />
    );
    const title = getByText("Title");
    const desc = getByText("Description");
    const playButton = getByText("▶️ Play");
    const moreInfoButton = getByText("ℹ️ More Info");
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(playButton).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
  });
});

// Path: src/__tests__/MainMovieContainer.js
// Compare this snippet from src/components/MainMovieContainer.jsx:
// import React from "react";
//
// const MainMovieContainer = ({ title, desc }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p className="w-1/2">{desc}</p>
//       <div className="flex gap-3">
//         <button className="">▶️ Play</
