import React, { useCallback, useEffect, useState } from "react";
import Fuse from "fuse.js";

// Components:
import { Container, Flex, Divider, Header, Input } from "../shared";
import Facility from "./Facility";

// Redux:
import { useAppDispatch, useAppSelector } from "../../redux";
import { fetchActivities } from "../../redux/slices/activitiesSlice";
import { fetchFacilities } from "../../redux/slices/FacilitiesSlice";

// Typescript: Models
import { Facilities } from "../../models/facilities";
import HomeHeader from "./Header";

// ===========================================================
// Component: < Home /> ======================================
// ===========================================================
const Home: React.FC = () => {
  // __Actions: Fetch Activities | Facilities
  const dispatch = useAppDispatch();

  // __State: Activites, Facilities, Search
  const [query, setQuery] = useState("");
  const facilities: Facilities[] = useAppSelector(
    (state) => state.facilities.data
  );

  // Fn: Fetch Facilities and Activities from -API-
  // UseEffect: Fetch activities
  const fetchAllData = useCallback(() => {
    dispatch(fetchActivities());
    dispatch(fetchFacilities());
  }, []);
  useEffect(() => {
    fetchAllData();
  }, []);

  // Fuse: Fuzzy Search Config
  const fuse = new Fuse(facilities, {
    keys: ["name", "tags.name"],
  });
  const results = fuse.search(query);
  const characterResults = query // Assign fuzzy search results, or all facilities if no input
    ? results.map((result) => result.item)
    : facilities;

  // Fn: Filter Activities
  const _handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // --:-- Render --:-- \\
  return (
    <Container>
      <HomeHeader // **-- Header: Intro --** \\
      />

      <Divider // **-- Divider --** \\
      />

      <Container // **-- Facilities --** \\
      >
        <Header>Facilities</Header>

        <Input // **-- Input: Search Facilities --** \\
          type="text"
          placeholder="Search Facilities"
          value={query}
          onChange={_handleSearch}
        />

        <Flex direction="row" responsive>
          {characterResults.map((item) => {
            return (
              <Facility
                key={item.id}
                id={item.id}
                name={item.name}
                tags={item.tags}
              />
            );
          })}
        </Flex>
      </Container>
    </Container>
  );
};

export default Home;
