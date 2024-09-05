import React from "react";

interface TabSwitcherProps {
  tabs: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="flex justify-evenly rounded-xl bg-black py-1 px-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`px-4 py-2 w-full rounded-xl transition ${
            selectedTab === tab
              ? "bg-[#28292E] text-white shadow-xl shadow-black"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
