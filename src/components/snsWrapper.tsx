import React, { useState } from "react";
import { Icon } from "./icon";

type PropsType = {
  children: React.ReactNode;
  sns: "twitter" | "facebook" | "instagram";
};

const color = {
  twitter: "text-blue-500",
  facebook: "text-blue-800",
  instagram: "text-pink-500",
};

export const SnsWrapper = ({ children, sns }: PropsType) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 p-4 w-full max-w-md rounded-lg">
      <div className="flex items-center justify-between w-full mb-4">
        <span />
        <h2 className={`text-2xl font-semibold letter-spacing-[0.2em] ${color[sns]}`}>{sns}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <Icon icon={isOpen ? "ioChevronUpSharp" : "ioChevronDownSharp"} size="1.5rem" />
        </button>
      </div>
      <div className="flex flex-col space-y-4 overflow-hidden w-[320px] md:w-[400px]">{isOpen && children}</div>
    </div>
  );
};
