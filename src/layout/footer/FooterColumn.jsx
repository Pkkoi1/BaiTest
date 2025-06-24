const links = [
  "Home",
  "Our Shop",
  "Shop Detail",
  "Shopping Cart",
  "Checkout",
  "Contact Us",
];

const FooterColumn = ({ title }) => (
  <div>
    <h3 className="text-lg text-left font-semibold mb-4">{title}</h3>
    <ul className="space-y-[3px] pl-[0px] text-left">
      {links.map((item) => (
        <li
          key={item}
          className="hover:underline cursor-pointer flex items-center gap-2"
        >
          <span>›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterColumn;
