import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center text-center bg-[#2c3e50] text-white p-4">
      <Image
        src="/designconquer.jpg"
        alt="Design and Conquer Logo"
        className="logo"
        width="186"
        height="200"
      />

      <p className="mt-4 mb-2">
        <a className="text-purple-300 mx-2" href="sms:8434109229">
          (843) 410-9229
        </a>
      </p>

      <a href="https://www.google.com/maps/dir/?api=1&destination=9751 Moose Rd, Murrells Inlet, SC 29576">
        9751 Moose Rd, Murrells Inlet, SC 29576
      </a>
    </header>
  );
};

export default Header;
