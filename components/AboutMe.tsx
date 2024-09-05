"use client";

import React, { useState } from "react";
import TabSwitcher from "./TabSwitcher";

const tabs = ["About Me", "Experiences", "Recommended"];

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const content: { [key: string]: string } = {
    "About Me":
      "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this  awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
    Experiences:
      "I have experience in sales, marketing, and customer service. Prior to joining Salesforce, I worked at a startup where I wore many hats, from lead generation to account management. This diverse experience has given me a holistic understanding of the sales process. At Salesforce, I've had the opportunity to work with clients across various industries, helping them leverage our CRM solutions to drive growth.",
    Recommended:
      "I recommend focusing on customer satisfaction and growth. Based on my experience, I've found that the key to success lies in truly understanding your customers' needs and aligning our solutions to meet those needs. I always advise my clients to leverage data-driven insights to make informed decisions. Additionally, I strongly believe in the power of continuous learning and staying updated with the latest industry trends. Lastly, building strong.",
  };

  return (
    <div className="bg-[#363C43] p-4 rounded-lg shadow-lg px-12">
      <div className=""></div>
      <div className="">
        <TabSwitcher
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="mt-4 text-[#8A8B8B] h-40">{content[selectedTab]}</div>
      </div>
    </div>
  );
};

export default AboutMe;
