import React from "react";
import Option from "./option";
import SocialMedia from "./socialMedia";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#551760] p-2 sm:p-[10px] z-50 gap-2 sm:gap-0">
      {/* Bỏ fixed, chỉ để static */}
      <Option />
      <SocialMedia />
    </div>
  );
};

export default Header;
