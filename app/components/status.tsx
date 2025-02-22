import React from "react";

interface StatusProps {
	status: "online" | "streaming" | "offline";
}

const getColor = (status: StatusProps["status"]) => {
  switch (status) {
  case "online":
    return "bg-green-300";
  case "streaming":
    return "bg-red-300";
  case "offline":
    return "bg-gray-300";
  default:
    return "bg-gray-300"; // Fallback color
  }
};

export const Status: React.FC<StatusProps> = ({ status }) => {
  return <div className={`h-3 w-3 ${getColor(status)} rounded-full`} />;
};
