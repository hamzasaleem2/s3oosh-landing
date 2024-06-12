import React from "react";
import GithubStar from "../github-stars";
import IntroScreen from "./intro-screen";
import PreviewBox from "./preview-box";

function Intro() {
  return (
    <div className="mx-auto max-w-md sm:max-w-lg text-center">
      <IntroScreen />
      <ul className="grid gap-2">
        <PreviewBox/>
      </ul>
      <div className="mt-10">
        <p className="text-gray-600 sm:text-sm mt-2 p-4">
        Explore, contribute, and unleash the magic of smash, smoosh, and swoosh in the GitHub repository!
        </p>
        <div className="flex items-center justify-center mt-2 py-3 sm:py-5 ">
          <GithubStar repo="hamzasaleem2/s3oosh" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
