import HeadObject from "../components/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HeadObject />
      <main className="flex flex-col w-full bg-[#6865D1] h-screen">
        <div className="flex h-10 border-l-2 background-color border-[#DCAAF3] bg-[#DCAAF3] items-center justify-center">
          <p className="bebas-neue text-white">
            🎔 made with love & sparkling water.
          </p>
        </div>
        <nav className="h-20 flex flex-row space-between">
          <div className="grow border-[#ACAAF3] bg-[#7673E5]"></div>
          <div className="border-l-2 grow border-[#ACAAF3] bg-[#6865D1]"></div>
          <div className="border-l-2 grow border-[#ACAAF3] bg-[#CCE822]"></div>
          <div className="border-l-2 grow border-[#ACAAF3] bg-[#7673E5]"></div>
        </nav>
        <nav className="h-7 flex flex-row space-between">
          <div className="border-t-2 grow border-[#ACAAF3] bg-[#7673E5]"></div>
          <div className="border-t-2 border-l-2 grow border-[#ACAAF3] bg-[#6865D1]"></div>
          <div className="border-t-2 border-l-2 grow border-[#ACAAF3] bg-[#CCE822]"></div>
          <div className="border-t-2 border-l-2 grow border-[#ACAAF3] bg-[#7673E5]"></div>
        </nav>

        <div className="absolute top-3 left-0 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 12.5L37.5 0L25 12.5L12.5 0L0 12.5L12.5 25L0 37.5L12.5 50L25 37.5L37.5 50L50 37.5L37.5 25L50 12.5ZM37.5 25L25 37.5L12.5 25L25 12.5L37.5 25Z"
              fill="#CCE822"
            />
          </svg>
        </div>

        <div className="absolute top-20 right-0 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="100"
            viewBox="0 0 28 50"
            fill="none"
          >
            <path
              d="M25.0048 24.9754L25 0L24.9952 24.9754L15.4329 1.903L24.9861 24.9792L7.32234 7.32234L24.9792 24.9861L1.903 15.4329L24.9754 24.9952L0 25L24.9754 25.0048L1.903 34.5671L24.9792 25.0139L7.32234 42.6776L24.9861 25.0208L15.4329 48.097L24.9952 25.0246L25 50L25.0048 25.0246"
              stroke="#CCE822"
              stroke-width="4"
            />
          </svg>
        </div>

        <section className="max-w-4xl	ml-10 my-10 grow text-[#D7C4E0]">
          <h1 className="domaine-bold-italic text-7xl	">Sahiti Dasari</h1>
          <br></br>
          <p className="domaine text-xl">
            hi! i’m sahiti, a high school student, in love with computer science
            and entrepreneurship.
            <br></br>
            <br></br>
            in the past, i organized Forsyth Hacks, a county wide hackathon for
            high-school students interested in application based coding.
          </p>
          <br></br>
          <br></br>

          <section className="absolute bottom-20 right-20">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="none"
              viewBox="0 0 55 55"
              variants={{
                start: {
                },
                end: {
                  rotate: 360
                },
              }}
              initial="start"
              animate="end"
              transition={{ delay: 1.5, repeat: Infinity, repeatType: "loop", duration: 10 }}
            >
              <circle
                cx="27.5"
                cy="27.5"
                r="27"
                fill="#CCE822"
                stroke="#000"
              ></circle>
              <circle
                cx="28"
                cy="27"
                r="18.5"
                fill="#CCE822"
                stroke="#000"
              ></circle>
              <motion.path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 24l5.273 12M13 24l15.818 6.667M13 24h7m-1.727 12h18.454L42 24M18.273 36l10.545-5.333M42 24l-13.182 6.667M42 24h-7m-17 2l8.867-8L37 26m-13 2l2.8-9 4.2 9"
                variants={{
                  hidden: {
                    pathLength: 0,
                  },
                  visible: {
                    pathLength: 1,
                  },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 10 }}
              ></motion.path>
            </motion.svg>
          </section>

          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.5" cy="8.5" r="8" fill="#DCAAF3" stroke="black" />
              <path
                d="M6 10.8339V6.75058M8.33333 10.8339V8.93808M8.33333 8.93808V6.75058M8.33333 8.93808C8.33333 6.75058 11.8333 6.75058 11.8333 8.93808V10.8339M6 5.00642L6.00583 5"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.5" cy="8.5" r="8" fill="#DCAAF3" stroke="black" />
              <path
                d="M10.4167 13.1789V11.8635C10.4339 11.645 10.4043 11.4253 10.33 11.219C10.2558 11.0128 10.1384 10.8247 9.98583 10.6673C11.425 10.5069 12.9375 9.96145 12.9375 7.45895C12.9374 6.81903 12.6912 6.20366 12.25 5.7402C12.4589 5.18035 12.4442 4.56152 12.2087 4.01228C12.2087 4.01228 11.6679 3.85186 10.4167 4.69061C9.36617 4.40591 8.25883 4.40591 7.20833 4.69061C5.95708 3.85186 5.41625 4.01228 5.41625 4.01228C5.18084 4.56152 5.16607 5.18035 5.375 5.7402C4.93047 6.2071 4.68407 6.82803 4.6875 7.4727C4.6875 9.95686 6.2 10.5023 7.63917 10.681C7.48837 10.8369 7.37208 11.0227 7.29785 11.2264C7.22362 11.4301 7.19312 11.6472 7.20833 11.8635V13.1789M7.20833 12.2623C5.83333 12.7082 4.6875 12.2623 4 10.8873"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.5" cy="8.5" r="8" fill="#DCAAF3" stroke="black" />
              <path
                d="M6.58218 6.91201C6.37579 6.72855 6.05975 6.74714 5.8763 6.95353C5.69284 7.15992 5.71143 7.47596 5.91782 7.65942L6.58218 6.91201ZM8.5 9.28571L8.16782 9.65942C8.35726 9.82781 8.64274 9.82781 8.83218 9.65942L8.5 9.28571ZM11.0822 7.65942C11.2886 7.47596 11.3072 7.15992 11.1237 6.95353C10.9402 6.74714 10.6242 6.72855 10.4178 6.91201L11.0822 7.65942ZM4 11.8571H3.5H4ZM4.9 5L4.9 4.5L4.9 5ZM12.1 5V4.5V5ZM5.91782 7.65942L8.16782 9.65942L8.83218 8.91201L6.58218 6.91201L5.91782 7.65942ZM8.83218 9.65942L11.0822 7.65942L10.4178 6.91201L8.16782 8.91201L8.83218 9.65942ZM4.5 11.8571V6.14286H3.5V11.8571H4.5ZM4.5 6.14286C4.5 5.93878 4.56482 5.76041 4.65642 5.64408L3.87079 5.02539C3.62483 5.33772 3.5 5.74073 3.5 6.14286H4.5ZM4.65642 5.64408C4.74573 5.53068 4.83772 5.5 4.9 5.5L4.9 4.5C4.48489 4.5 4.11905 4.71014 3.87079 5.02539L4.65642 5.64408ZM4.9 5.5H12.1V4.5H4.9V5.5ZM12.1 5.5C12.1623 5.5 12.2543 5.53068 12.3436 5.64408L13.1292 5.02539C12.881 4.71014 12.5151 4.5 12.1 4.5L12.1 5.5ZM12.3436 5.64408C12.4352 5.76041 12.5 5.93878 12.5 6.14286H13.5C13.5 5.74073 13.3752 5.33772 13.1292 5.02539L12.3436 5.64408ZM12.5 6.14286V11.8571H13.5V6.14286H12.5ZM12.5 11.8571C12.5 12.0612 12.4352 12.2396 12.3436 12.3559L13.1292 12.9746C13.3752 12.6623 13.5 12.2593 13.5 11.8571H12.5ZM12.3436 12.3559C12.2543 12.4693 12.1623 12.5 12.1 12.5V13.5C12.5151 13.5 12.881 13.2899 13.1292 12.9746L12.3436 12.3559ZM12.1 12.5H4.9V13.5H12.1V12.5ZM4.9 12.5C4.83772 12.5 4.74573 12.4693 4.65642 12.3559L3.87079 12.9746C4.11905 13.2899 4.48489 13.5 4.9 13.5V12.5ZM4.65642 12.3559C4.56482 12.2396 4.5 12.0612 4.5 11.8571H3.5C3.5 12.2593 3.62483 12.6623 3.87079 12.9746L4.65642 12.3559Z"
                fill="black"
              />
            </svg>
          </div>
        </section>

        <section id="footer">
          <div className="bebas-neue pl-10 py-2 pr-10 text-[#CCE822]">
            COPYRIGHT 2023 SAHITI DASARI.
          </div>
        </section>
      </main>
    </div>
  );
}