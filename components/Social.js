import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function Social() {
  return (
    <div className="mx-auto flex md:p-4 md:flex-col py-3 text-4xl text-teal-500 justify-around border-t-2 rounded-lg shadow-lg hover:shadow-md w-full h-full mt-6 m-auto">
      <FaFacebookSquare className="cursor-pointer hover:text-orange-500 duration-200 hover:scale-125" />
      <FaTwitterSquare className="cursor-pointer hover:text-orange-500 duration-200 hover:scale-125" />
      <FaYoutubeSquare className="cursor-pointer hover:text-orange-500 duration-200 hover:scale-125" />
      <FaWhatsappSquare className="cursor-pointer hover:text-orange-500 duration-200 hover:scale-125" />
    </div>
  );
}
