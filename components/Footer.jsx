import Link from "next/link";
import Image from "next/legacy/image";
import { footerLinks } from "../constants/footerLinks/FooterLinks";

const Footer = () => {
  return (
    <footer className="bg-light-grey-200 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center sm:px-16 px-16 py-4">
        <div className="flex-1 w-full flex md:justify-start flex-wrap">
          <Link href="/" className="font-semi-bold-plus text-primary-black-100 text-base uppercase mb-4 sm:mb-0">
            Marketplace.
          </Link>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap gap-5">
          {footerLinks.map((link) => (
            <span key={link.title}>
              <Link href={link.url}>
                <Image src={link.icon} alt={`Visit our ${link.title} page`} width={15} height={15} className="" />
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
