import React from "react";
import { Activities } from "../../../../models/activities";
import { SubHeader } from "../../../shared/Header";

interface Props {
  activity: Activities;
  index: number;
}

const Activity: React.FC<Props> = ({ activity, index }) => {
  return (
    <>
      <SubHeader color="coral" center mt="5px" key={index}>
        {activity.name}
        {index === activity.length - 1 ? "" : ": "}
      </SubHeader>
      <SubHeader color="green">{activity.location}</SubHeader>
      <SubHeader>Start time: {activity.start_time}</SubHeader>
      <SubHeader>End time: {activity.end_time}</SubHeader>
      <SubHeader>Level: {activity.level}</SubHeader>
      <SubHeader mb="5px">
        Tags: {activity.tags.map((tag: { name: string }) => `${tag.name} `)}
      </SubHeader>
    </>
  );
};

export default Activity;
