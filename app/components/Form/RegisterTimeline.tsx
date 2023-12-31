"use client";

import { Timeline } from "flowbite-react";
import React from "react";
import { HiCalendar } from "react-icons/hi";

interface IRegisterTimeline {
  Horizontal?: boolean;
  Vertical?: boolean;
  classname?: string;
}

const RegisterTimeline: React.FC<IRegisterTimeline> = function ({
  Horizontal = false,
}) {
  return (
    <Timeline horizontal={Horizontal}>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="md:pr-28">Basic Info</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="md:pr-28">
            Credentials{"   "}
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="md:pr-28">Payment{"   "}</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default RegisterTimeline;
