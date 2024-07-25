import {
  FaFacebookF,
  FaGooglePlusG,
  FaLocationDot,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/images/logo.png";

const Footer = () => {

  return (
    <footer className="bg-[#1B1B1B] text-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 md:gap-6 gap-5 md:py-10 py-8 px-4 md:px-8 lg:px-16 xl:px-64 ">
        <div className="lg:col-span-2">
          <img src={logo} alt="" />
          <p className="md:w-3/4 max-w-3/4 w-full my-4 text-gray-400 text-base">
            Food Ordering is a Premium HTML Template. Best choice for your
            online store. Let purchase it to enjoy now
          </p>
          <div className="flex gap-4">
            <p className="p-2 bg-[#3C3C3C] rounded-full mb-2 cursor-pointer hover:bg-[#EA1B25] transition-all">
              <FaFacebookF />
            </p>
            <p className="p-2 bg-[#3C3C3C] rounded-full mb-2 cursor-pointer hover:bg-[#EA1B25] transition-all">
              <FaGooglePlusG />
            </p>
            <p className="p-2 bg-[#3C3C3C] rounded-full mb-2 cursor-pointer hover:bg-[#EA1B25] transition-all">
              <FaTwitter />
            </p>
            <p className="p-2 bg-[#3C3C3C] rounded-full mb-2 cursor-pointer hover:bg-[#EA1B25] transition-all">
              <FaPinterest />
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-4">INFORMATION</h4>
          <div className="text-gray-400 text-base">
            <p className="mb-2">Careers</p>
            <p className="mb-2">Investor Relations</p>
            <p className="mb-2">Press Releases</p>
            <p className="mb-2">Sop with Points</p>
            <p className="mb-2">More Branches</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">CUSTOMER CARE</h4>
          <div className="text-gray-400 text-base">
            <p className="mb-2">Returns</p>
            <p className="mb-2">Shipping Info</p>
            <p className="mb-2">Gift Cards</p>
            <p className="mb-2">Size Guide</p>
            <p className="mb-2">Money Back</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">GET IN TOUCH</h4>
          <div className="text-gray-400 text-base">
            <div className="flex items-start mb-3 gap-4">
              <p className="text-[#EA1B25] text-xl">
                <FaLocationDot />
              </p>
              <p>123 New Design Str, ABC Building, melbourne, Australia.</p>
            </div>
            <div className="flex items-center mb-3 gap-4">
              <p className="text-[#EA1B25] text-xl">
                <FaPhone />
              </p>
              <p>(0044) 8647 1234 587</p>
            </div>
            <div className="flex items-center mb-3 gap-4">
              <p className="text-[#EA1B25] text-xl">
                <IoMdMail />
              </p>
              <p>hello@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 pt-5">
        <p className="flex items-center justify-center gap-1 text-gray-400">
          © 2021 <p className="text-[#EA1B25]">WEBINANE.</p> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
