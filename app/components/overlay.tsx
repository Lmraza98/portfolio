import React from "react";
interface OverlayProps {
	open: boolean;
	onClose: () => void;
	topOffset?: string;
}
export const Overlay: React.FC<OverlayProps> = ({
  open,
  topOffset,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 z-40 backdrop-blur-md ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ top: topOffset }}
    />
  );
};
