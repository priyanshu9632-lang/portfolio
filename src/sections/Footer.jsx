import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social Icons */}
        <div className="socials">
  {socialImgs.map((socialImg, index) => (
    <a
      key={index}
      href={socialImg.url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon"
    >
      <img src={socialImg.imgPath} alt={socialImg.name} />
    </a>
  ))}
</div>


        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Priyanshu Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
