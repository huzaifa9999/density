"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function AlternateTimeline() {
  return (

    <div className="flex  flex-col items-center justify-center p-[6rem] m-[7rem] border-2 border-white">
    <div className="flex flex-col text-[5rem] text-white">
<h1> Its easy Just look at the process </h1>

<br/>
<h2 className="text-[2rem] "> We do care for you!!!</h2>
    </div>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h1 className="text-[2rem] font-bold">Reach us</h1>
          <h2 className="text-[1.5rem] font-semibold">
            {" "}
            The first step is the biggest step , reach us and open the world of
            possiblities
          </h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h1 className="text-[2rem] font-bold">consult it</h1>
          <h2 className="text-[1.5rem] font-semibold">
            Remove al the anxiety in the head , take consulations from our
            experts , feel confident in the decision you make
          </h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h1 className="text-[2rem] font-bold">sign up </h1>
          <h2 className="text-[1.5rem] font-semibold">
            Do the hassle free signup process , we are the single document
            company
          </h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h1 className="text-[2rem] font-bold">Enjoy </h1>
          <h2 className="text-[1.5rem] font-semibold">
            Experience bliss , we make sure your things are done the perfect way
            you want , its our problem now
          </h2>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
