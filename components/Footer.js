import Logo from "@/icons/Logo";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full bg-primary-950 py-[72px]">
      <div className="mx-auto flex w-full max-w-6xl justify-between">
        <Logo className="fill-white" />
        <div className="flex gap-12">
          <div className="flex flex-col">
            <h4 className="footer-h4 ">Features</h4>
            <div className="flex flex-col gap-[10px]">
              <Link href="#">
                <span className="footer-link">Link Shortening</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Branded Links</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Analytics</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="footer-h4 ">Resources</h4>
            <div className="flex flex-col gap-[10px]">
              <Link href="#">
                <span className="footer-link">Blog</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Developers</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Support</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="footer-h4 ">Company</h4>
            <div className="flex flex-col gap-[10px]">
              <Link href="#">
                <span className="footer-link">About</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Our Team</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Careers</span>
              </Link>
              <Link href="#">
                <span className="footer-link">Contact</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 self-start">
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebook className="footer-social-icon" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <FaTwitter className="footer-social-icon" />
          </Link>
          <Link href="https://www.pinterest.com" target="_blank">
            <FaPinterest className="footer-social-icon" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram className="footer-social-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
