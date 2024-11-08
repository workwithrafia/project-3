import React from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  buttonText: string;
}

const Feature: React.FC<FeatureProps> = () => {
  return (
    <section>
      {/* Use as Project Management area*/}
      <div className="bg-white text-primary min-h-screen w-full md:flex-row justify-center pt-24 space-y-8 md:space-y-0 md:space-x-4 px-2 md:px-10 py-10 pb-20">
        <div className="min-h-screen flex flex-col md:flex-row justify-center pt-24 space-y-8 md:space-y-0 md:space-x-4 px-2 md:px-10 py-5">
          <div className=" flex-col mt-[40px] mr-6 ">
            <h1 className="text-[48px] font-semibold  py-0 text-[#212529] leading-[60px] tracking-wide">
              Project <br />
              Management
            </h1>
            <p className="text-xs mb-6 text-[#212529] ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and <br /> diagrams directly from the app Take photos
              with the mobile app and save them <br /> to a note.
            </p>
            <button className="bg-[#4F9CF9] text-white text-xs py-3 px-3 rounded flex items-center">
              Try Whitepace free
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="bg-[#C4DEFD] text-black h-[360px] w-[485px] mr-2 ml-6 flex justify-center items-center shadow-lg md:mt-24"></div>
        </div>

        <div className="flex justify-center  pb-20">
          <Image
            className="text-7xl"
            src="/Logo.png"
            alt="Logo"
            width={950}
            height={910}
          />{" "}
          {/* Logo Image */}
        </div>
      </div>

      {/* Use as Extension */}
      <div className="bg-primary text-white h-[500px] w-full flex flex-col md:flex-row justify-center pt-24 space-y-4 md:space-y-0 md:space-x-8 md:px-10 py-10 mb-10">
        <div className=" flex-col mt-14 mr-24 ">
          <h1 className="text-[47px] font-bold mb-4">Use as Extension</h1>
          <p className="text-xs mb-6 ">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages <br /> or take screenshots as notes. .
          </p>
          <button className="bg-[#4F9CF9] text-white text-xs py-3 px-5 rounded flex items-center">
          Let&apos;s go
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="bg-[#C4DEFD] text-black h-[315px] w-[440px] flex justify-center items-center shadow-lg md:mt-24"></div>
      </div>

      {/* Use as  Customise it to your needs area */}

      <div className="h-[500px] flex flex-col md:flex-row justify-center items-center  space-y-8 md:space-y-0 md:space-x-4  md:px-10">
        <div className="bg-[#C4DEFD] text-black h-[360px] w-[485px] mr-10 mb-9  flex justify-center items-center shadow-lg "></div>

        <div className=" flex-col mb-14 ml-6 ">
          <h1 className="text-[48px] font-semibold  pb-7 text-[#212529] leading-[60px] tracking-wide">
            Customise it to <br />
            your needs
          </h1>
          <p className="text-xs mb-8 text-[#212529] ">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich <br /> Text or Markdown). Or create your own scripts
            and plugins using the Extension <br /> API.
          </p>
          <button className="bg-[#4F9CF9] text-white text-xs py-3 px-6 mb-14 rounded flex items-center">
            Let&apos;s go
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* \   section  Your work, everywhere you are */}
      <div className="bg-primary text-white h-[380px] w-full flex flex-col md:flex-row justify-center pt-24 space-y-4 md:space-y-0 md:space-x-8 md:px-10 py-10 mb-10">
        <div className=" flex-col flex  mr-24 mb-28 ">
          <h1 className="text-[50px] flex justify-center font-bold mb-4">
            {" "}
            Your work, everywhere you are
          </h1>
          <p className="text-xs flex justify-center tracking-wide mb-1 items-center ">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and 
          </p>
          <p className="text-xs flex justify-center items-center mb-6 ">
           OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#4F9CF9] flex justify-center mx-96  text-white text-xs py-3  px-5 rounded ">
          Try Taskey
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>



      <div className="bg-white text-primary h-[320px]  flex w-full md:flex-row justify-center pt-24 space-y-8 md:space-y-0 md:space-x-4 px-2 md:px-10 py-10 pb-20">


        <div className="flex justify-center items-center pb-20">
          <Image
            className="text-9xl"
            src="/Sponsors.png"
            alt="Logo"
            width={1400}
            height={910}
          />{" "}
          {/* Logo Image */}
        </div>
      </div>




    </section>
  );
};
export default Feature;
