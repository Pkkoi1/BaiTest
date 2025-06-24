const FooterBottom = () => (
  <div className="max-w-6xl mx-auto px-4 flex flex-row md:flex-row justify-between items-center">
    <p className="text-sm text-left md:text-left mx-[30px]">
      © <span className="font-bold">Your Site Name</span>. All Rights Reserved.
      Designed by <span className="font-bold">HTML Codex</span>{" "}
      <br className="md:hidden" />
      Distributed By <span className="font-bold">ThemeWagon</span>
    </p>
    <div className="flex space-x-2 mt-4 md:mt-0 mr-[30px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6YnQoM78NCEw3f--iWcGhpQFjBxfo9k6fw&s"
        alt="visa"
        className="h-6"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_STbCK7Q0McjdZ1-hM__y654OU8rWAtW_Q&s"
        alt="mastercard"
        className="h-6"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8wSllG_nCwDdeTl5TfIFpBL36Za-ul-kUQ&s"
        alt="paypal"
        className="h-6"
      />
      {/* Các loại khác giữ nguyên hoặc xóa nếu không cần */}
    </div>
  </div>
);

export default FooterBottom;
