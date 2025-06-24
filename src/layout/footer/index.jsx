import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import FooterContact from "./footerContact";

const Footer = () => {
  return (
    <footer className="bg-[#551760] text-[#fff] pt-[50px] pb-[30px]  text-[13px] ">
      <div className="max-w-6xl mx-[30px] grid grid-cols-4 md:grid-cols-3 gap-[60px]">
        <FooterContact />
        <FooterColumn title="Quick Links" />
        <FooterColumn title="Quick Links" />
      </div>

      <hr className="my-6 border-gray-400" />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
