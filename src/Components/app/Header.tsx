import React from "react";
import { Flex } from "../shared";

const HomeHeader = () => {
  return (
    <Flex // **-- Header --** \\
    >
      <div>
        <h1>Hey! Welcome to my tech test for Open Play</h1>

        <p>
          For this tech test, we will mock an api reqeust using json data (local
          files) & display data accordingly with a search input for fuzzy search
        </p>
      </div>
    </Flex>
  );
};

export default HomeHeader;
