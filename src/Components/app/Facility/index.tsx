import React, { useState } from "react";
import Fuse from "fuse.js";

// Components:
import Activity from "./Activity";
import { Flex, Input } from "../../shared";
import { SubHeader, Title } from "../../shared/Header";

// Typescript: Models
import { Activities } from "../../../models/activities";
import { Facilities } from "../../../models/facilities";

// Redux:
import { useAppSelector } from "../../../redux";
import { selectActivity } from "../../../redux/slices/activitiesSlice";

// ===========================================================
// Component: < Facility /> ==================================
// ===========================================================
const Facility: React.FC<Facilities> = ({ id, name, tags }) => {
  // State:
  const activity = useAppSelector((state) => selectActivity(state, id));
  const [activities, setActivities] = useState(false);
  const [query, setQuery] = useState("");

  // Fuse: Fuzzy Search Config
  const fuse = new Fuse(activity, {
    keys: ["name", "tags.name"],
  });
  const results = fuse.search(query);
  const characterResults = query // Assign fuzzy search results, or all facilities if no input
    ? results.map((result) => result.item)
    : activity;

  // Fn: Filter Activities
  const _handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Fn: Toggle Activities
  const _handleToggle = () => {
    setActivities((prev) => !prev);
  };

  // --:-- Render --:-- \\
  return (
    <Flex // **-- Facilities: List --** \\
      key={id}
      mt="20px"
      hover
      alignSelf="flex-start"
    >
      <Title // **--  Name --** \\
        onClick={_handleToggle}
      >
        {name}
      </Title>

      <Flex // **--  Tags --** \\
        onClick={_handleToggle}
        mt="3px"
        direction="row"
        gap="5px"
      >
        <SubHeader>Tags:</SubHeader>
        {tags.map((tag, index) => {
          return (
            <SubHeader key={index}>
              {tag.name}
              {index === tags.length - 1 ? "" : ", "}
            </SubHeader>
          );
        })}
      </Flex>

      <Flex // **--  Activities --** \\
        mt="3px"
        direction="row"
        gap="5px"
      >
        {activities && (
          <Flex mt="5px">
            <Input // Input: Search (Fuzzy Search using Fuse.js)
              type="text"
              placeholder="Search Activities"
              value={query}
              onChange={_handleSearch}
            />

            <SubHeader color="#000" mb="3px" mt="10px">
              Activities:
            </SubHeader>
            <Flex onClick={_handleToggle}>
              {characterResults.map((activity: Activities, index: number) => {
                return (
                  <Activity key={index} activity={activity} index={index} />
                );
              })}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Facility;
