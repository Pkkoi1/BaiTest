import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: <FacebookFilled />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <TwitterOutlined />,
  },
  {
    name: "LinkedIn",
    url: "https://www.instagram.com",
    icon: <LinkedinOutlined />,
  },
  {
    name: "Instagram",
    url: "https://www.linkedin.com",
    icon: <InstagramOutlined />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: <YoutubeOutlined />,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-[10px] mr-2 sm:mr-[20px]">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fff] hover:text-blue-500 mx-1 sm:mx-2 text-lg sm:text-xl"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
