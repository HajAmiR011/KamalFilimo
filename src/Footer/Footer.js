const Footer = () => {
  return (
    <footer
      className="w-[100%] sticky bottom-0 z-10 bg-[#191919] h-[35px] flex items-center justify-center"
      style={{ maxWidth: "1600px" }}
    >
      <p className="mb-0 text-white">
        Created by{" "}
        <a
          href="https://github.com/HajAmiR011"
          className="hover:text-[orange] text-decoration-none transition-all duration-300 ease-linear"
        >
          HajAmIrZXN
        </a>
      </p>
    </footer>
  );
};

export default Footer;
