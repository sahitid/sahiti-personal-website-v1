import HeadObject from "../components/head";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <HeadObject />
      <main className="flex flex-col w-full bg-[#6865D1]">
        <div className="flex h-10 border-l-2 background-color border-[#DCAAF3] bg-[#DCAAF3] items-center justify-center">
          <Marquee>
            <p className="bebas-neue text-white">
              🎔 made with love & sparkling water.
            </p>
          </Marquee>
        </div>

        <div className="flex flex-row">
          <nav className="basis-1/4 w-36 flex flex-col">
            <div className="border-l-2 border-[#ACAAF3] bg-[#7673E5] h-20"></div>
            <div className="border-t-2 border-l-2 border-[#ACAAF3] bg-[#7673E5] h-7"></div>
          </nav>
          <nav className="basis-1/4 w-36 flex flex-col">
            <div className="border-l-2 border-[#ACAAF3] bg-[#6865D1] h-20"></div>
            <div className="border-t-2 border-l-2 border-[#ACAAF3] bg-[#6865D1] h-7"></div>
          </nav>
          <nav className="basis-1/4 w-36 flex flex-col text-right fade-in-black text-[#6865D1]">
            <div className="border-l-2 h-20 p-10 inter font-bold text-lg">
              <a href="/">HOME</a>
            </div>
            <div className="border-t-2 border-l-2 h-7"></div>
          </nav>
          <nav className="basis-1/4 w-36 flex flex-col">
            <div className="border-l-2 border-[#ACAAF3] bg-[#7673E5] h-20"></div>
            <div className="border-t-2 border-l-2 border-[#ACAAF3] bg-[#7673E5] h-7"></div>
          </nav>
        </div>

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

        <section className="flex flex-col">
          <div className="flex flex-row inter text-[#D7C4E0] justify-start m-5">
            <div className="m-10">
              {" "}
              <img
                src="https://cloud-cpez0fix1-hack-club-bot.vercel.app/0group_9__2_.png"
                width="500"
                height="600"
              ></img>
            </div>

            <div className="flex flex-col w-1/2 justify-center">
              <div className="text-3xl font-bold">DRIVE SMART</div>
              <br></br>
              <div className="text-lg">
                DriveSmart is an AI driving assistant mobile app that helps new
                drivers navigate safely and practice mastering the art of
                driving on the roads.
              </div>
              <br></br>
              <div className="flex flex-row">
                <div className="mr-2">
                  <a href="https://youtube.com" target="_blank">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M9.41667 8.5L7.8125 9.58333V7.41667L9.41667 8.5Z"
                        fill="black"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.91663 8.88296V8.1165C3.91663 6.54838 3.91663 5.76404 4.33142 5.25975C4.74667 4.75492 5.40025 4.73325 6.70696 4.68938C7.32571 4.66879 7.95821 4.65417 8.49996 4.65417C9.04125 4.65417 9.67375 4.66879 10.293 4.68938C11.5997 4.73325 12.2533 4.75492 12.668 5.25975C13.0833 5.76404 13.0833 6.54892 13.0833 8.1165V8.88296C13.0833 10.4516 13.0833 11.2354 12.6685 11.7403C12.2533 12.2445 11.6001 12.2668 10.293 12.3101C9.67421 12.3312 9.04171 12.3458 8.49996 12.3458C7.95867 12.3458 7.32617 12.3312 6.70696 12.3101C5.40025 12.2668 4.74667 12.2451 4.33142 11.7403C3.91663 11.2354 3.91663 10.4511 3.91663 8.8835V8.88296Z"
                        stroke="black"
                      />
                    </svg>
                  </a>
                </div>

                <div className="mr-2">
                  <a
                    href="https://github.com/sahitid/drive-smart"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M10.4167 13.1789V11.8635C10.4339 11.645 10.4043 11.4253 10.33 11.219C10.2558 11.0128 10.1384 10.8247 9.98583 10.6673C11.425 10.5069 12.9375 9.96145 12.9375 7.45895C12.9374 6.81903 12.6912 6.20366 12.25 5.7402C12.4589 5.18035 12.4442 4.56152 12.2087 4.01228C12.2087 4.01228 11.6679 3.85186 10.4167 4.69061C9.36617 4.40591 8.25883 4.40591 7.20833 4.69061C5.95708 3.85186 5.41625 4.01228 5.41625 4.01228C5.18084 4.56152 5.16607 5.18035 5.375 5.7402C4.93047 6.2071 4.68407 6.82803 4.6875 7.4727C4.6875 9.95686 6.2 10.5023 7.63917 10.681C7.48837 10.8369 7.37208 11.0227 7.29785 11.2264C7.22362 11.4301 7.19312 11.6472 7.20833 11.8635V13.1789M7.20833 12.2623C5.83333 12.7082 4.6875 12.2623 4 10.8873"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="mr-2">
                  <a
                    href="https://www.figma.com/file/FAxYHlUHsvF27wNF6SqC1O/drive-smart-wireframe"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M9 4.5H7.5C7.10218 4.5 6.72064 4.65804 6.43934 4.93934C6.15804 5.22064 6 5.60218 6 6C6 6.39782 6.15804 6.77936 6.43934 7.06066C6.72064 7.34196 7.10218 7.5 7.5 7.5H9M9 4.5V7.5M9 4.5H10.5C10.8978 4.5 11.2794 4.65804 11.5607 4.93934C11.842 5.22064 12 5.60218 12 6C12 6.39782 11.842 6.77936 11.5607 7.06066C11.2794 7.34196 10.8978 7.5 10.5 7.5H9"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 10.5C7.10218 10.5 6.72064 10.658 6.43934 10.9393C6.15804 11.2206 6 11.6022 6 12C6 12.3978 6.15804 12.7794 6.43934 13.0607C6.72064 13.342 7.10218 13.5 7.5 13.5C7.89782 13.5 8.27936 13.342 8.56066 13.0607C8.84196 12.7794 9 12.3978 9 12V10.5M7.5 10.5H9M7.5 10.5C7.10218 10.5 6.72064 10.342 6.43934 10.0607C6.15804 9.77936 6 9.39782 6 9C6 8.60218 6.15804 8.22064 6.43934 7.93934C6.72064 7.65804 7.10218 7.5 7.5 7.5H9V10.5M9 9C9 8.60218 9.15804 8.22064 9.43934 7.93934C9.72064 7.65804 10.1022 7.5 10.5 7.5C10.8978 7.5 11.2794 7.65804 11.5607 7.93934C11.842 8.22064 12 8.60218 12 9C12 9.39782 11.842 9.77936 11.5607 10.0607C11.2794 10.342 10.8978 10.5 10.5 10.5C10.1022 10.5 9.72064 10.342 9.43934 10.0607C9.15804 9.77936 9 9.39782 9 9Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row inter text-[#D7C4E0] justify-end m-5">
            <div className="flex flex-col w-1/2 justify-center">
              <div className="text-3xl font-bold text-right">
                ARTIFICIAL INTELLIGENCE & MACHINE LEARNING JAMS™
              </div>
              <br></br>
              <div className="text-lg text-right">
                Hack Club Jams™ are chosen collaborative coding workshops
                structured towards high school coding clubs around the world.
                <br></br>
                <br></br>
                The Artificial Intelligence & Machine Learning Jam is a
                four-part Batch Jams™ that introduces concepts of integrating
                Open AI language models, speech recognition APIs, and JavaScript
                to create your own smart voice assistant!
              </div>
              <br></br>
              <div className="flex flex-row justify-end">
                <div className="mr-2">
                  <a
                    href="https://jams.hackclub.com/batch/artificial-intelligence"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />

                      <path
                        d="M13.0834 8.5C13.0834 5.96863 11.0314 3.91667 8.50002 3.91667C5.96865 3.91667 3.91669 5.96863 3.91669 8.5C3.91669 11.0314 5.96865 13.0833 8.50002 13.0833"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.91665 8.5C3.91665 11.0314 5.96861 13.0833 8.49998 13.0833C11.0314 13.0833 13.0833 11.0314 13.0833 8.5C13.0833 5.96863 11.0314 3.91667 8.49998 3.91667"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.95836 3.93958C8.95836 3.93958 10.3334 5.75 10.3334 8.5M8.04169 13.0604C8.04169 13.0604 6.66669 11.25 6.66669 8.5C6.66669 5.75 8.04169 3.93958 8.04169 3.93958M4.20544 10.1042H8.50003M4.20544 6.89583H12.7946"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.04164 13.0604C8.04164 13.0604 6.66664 11.25 6.66664 8.5M8.95831 3.93958C8.95831 3.93958 10.3333 5.75 10.3333 8.5C10.3333 11.25 8.95831 13.0604 8.95831 13.0604M12.7946 6.89583L8.49997 6.89583M12.7946 10.1042H4.20539"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="mr-2">
                  <a
                    href="https://github.com/sahitid/artificial-intelligence-jams/"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M10.4167 13.1789V11.8635C10.4339 11.645 10.4043 11.4253 10.33 11.219C10.2558 11.0128 10.1384 10.8247 9.98583 10.6673C11.425 10.5069 12.9375 9.96145 12.9375 7.45895C12.9374 6.81903 12.6912 6.20366 12.25 5.7402C12.4589 5.18035 12.4442 4.56152 12.2087 4.01228C12.2087 4.01228 11.6679 3.85186 10.4167 4.69061C9.36617 4.40591 8.25883 4.40591 7.20833 4.69061C5.95708 3.85186 5.41625 4.01228 5.41625 4.01228C5.18084 4.56152 5.16607 5.18035 5.375 5.7402C4.93047 6.2071 4.68407 6.82803 4.6875 7.4727C4.6875 9.95686 6.2 10.5023 7.63917 10.681C7.48837 10.8369 7.37208 11.0227 7.29785 11.2264C7.22362 11.4301 7.19312 11.6472 7.20833 11.8635V13.1789M7.20833 12.2623C5.83333 12.7082 4.6875 12.2623 4 10.8873"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="m-10">
              {" "}
              <img
                src="https://cloud-pc4l26465-hack-club-bot.vercel.app/0group_11.png"
                width="500"
                height="600"
              ></img>
            </div>
          </div>

          <div className="flex flex-row inter text-[#D7C4E0] justify-start m-5">
            <div className="m-10">
              {" "}
              <img
                src="https://cloud-feebogv4x-hack-club-bot.vercel.app/0group_13.png"
                width="500"
                height="600"
              ></img>
            </div>

            <div className="flex flex-col w-1/2 justify-center">
              <div className="text-3xl font-bold">FITSPHERE</div>
              <br></br>
              <div className="text-2x1 font-bold">
                TECHNOVATION GIRLS CHALLENGE SEMINFINALIST
              </div>
              <br></br>
              <div className="text-lg">
                FitSphere is a progressive web app that helps users meet fitness
                goals and tansform their lifestyle. The application allows users
                to train their fitness form with an personal AI form trainer
                while doing exercises, as well as stay hydrated through H2O
                Flow.
                <br></br>
                <br></br>
                In H2O Flow, users join a daily water-drinking challenge. The
                app sends random notifications throughout the day, prompting
                users to drink water and share a photo of their water container
                on a social platform.
              </div>
              <br></br>
              <div className="flex flex-row">
                <div className="mr-2">
                  <a
                    href="https://www.youtube.com/watch?v=EqqaBN3X4lg"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M9.41667 8.5L7.8125 9.58333V7.41667L9.41667 8.5Z"
                        fill="black"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.91663 8.88296V8.1165C3.91663 6.54838 3.91663 5.76404 4.33142 5.25975C4.74667 4.75492 5.40025 4.73325 6.70696 4.68938C7.32571 4.66879 7.95821 4.65417 8.49996 4.65417C9.04125 4.65417 9.67375 4.66879 10.293 4.68938C11.5997 4.73325 12.2533 4.75492 12.668 5.25975C13.0833 5.76404 13.0833 6.54892 13.0833 8.1165V8.88296C13.0833 10.4516 13.0833 11.2354 12.6685 11.7403C12.2533 12.2445 11.6001 12.2668 10.293 12.3101C9.67421 12.3312 9.04171 12.3458 8.49996 12.3458C7.95867 12.3458 7.32617 12.3312 6.70696 12.3101C5.40025 12.2668 4.74667 12.2451 4.33142 11.7403C3.91663 11.2354 3.91663 10.4511 3.91663 8.8835V8.88296Z"
                        stroke="black"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mr-2">
                  <a
                    href="https://www.technovation.org/blogs/semifinalists-2023/"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />

                      <path
                        d="M13.0834 8.5C13.0834 5.96863 11.0314 3.91667 8.50002 3.91667C5.96865 3.91667 3.91669 5.96863 3.91669 8.5C3.91669 11.0314 5.96865 13.0833 8.50002 13.0833"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.91665 8.5C3.91665 11.0314 5.96861 13.0833 8.49998 13.0833C11.0314 13.0833 13.0833 11.0314 13.0833 8.5C13.0833 5.96863 11.0314 3.91667 8.49998 3.91667"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.95836 3.93958C8.95836 3.93958 10.3334 5.75 10.3334 8.5M8.04169 13.0604C8.04169 13.0604 6.66669 11.25 6.66669 8.5C6.66669 5.75 8.04169 3.93958 8.04169 3.93958M4.20544 10.1042H8.50003M4.20544 6.89583H12.7946"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.04164 13.0604C8.04164 13.0604 6.66664 11.25 6.66664 8.5M8.95831 3.93958C8.95831 3.93958 10.3333 5.75 10.3333 8.5C10.3333 11.25 8.95831 13.0604 8.95831 13.0604M12.7946 6.89583L8.49997 6.89583M12.7946 10.1042H4.20539"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row inter text-[#D7C4E0] justify-end m-5">
            <div className="flex flex-col w-1/2 justify-center">
              <div className="text-3xl font-bold text-right">
                FORSYTH HACKS WEBSITE
              </div>
              <br></br>
              <div className="text-lg text-right">
                Welcome to the 2nd annual Official Forsyth County hackathon for
                high school students.
                <br></br>
                <br></br>
                Forsyth Hacks is a FREE full-day high school hackathon (social
                coding event) for building projects, getting mentored, meeting
                other like-minded STEM students, and having fun for any high
                schooler that attends a Forsyth County school.
              </div>
              <br></br>
              <div className="flex flex-row justify-end">
                <div className="mr-2">
                  <a href="https://forsythhacks.dev/" target="_blank">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />

                      <path
                        d="M13.0834 8.5C13.0834 5.96863 11.0314 3.91667 8.50002 3.91667C5.96865 3.91667 3.91669 5.96863 3.91669 8.5C3.91669 11.0314 5.96865 13.0833 8.50002 13.0833"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.91665 8.5C3.91665 11.0314 5.96861 13.0833 8.49998 13.0833C11.0314 13.0833 13.0833 11.0314 13.0833 8.5C13.0833 5.96863 11.0314 3.91667 8.49998 3.91667"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.95836 3.93958C8.95836 3.93958 10.3334 5.75 10.3334 8.5M8.04169 13.0604C8.04169 13.0604 6.66669 11.25 6.66669 8.5C6.66669 5.75 8.04169 3.93958 8.04169 3.93958M4.20544 10.1042H8.50003M4.20544 6.89583H12.7946"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.04164 13.0604C8.04164 13.0604 6.66664 11.25 6.66664 8.5M8.95831 3.93958C8.95831 3.93958 10.3333 5.75 10.3333 8.5C10.3333 11.25 8.95831 13.0604 8.95831 13.0604M12.7946 6.89583L8.49997 6.89583M12.7946 10.1042H4.20539"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="mr-2">
                  <a
                    href="https://github.com/SFHSHackClub/forsyth-hacks-v2-site"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M10.4167 13.1789V11.8635C10.4339 11.645 10.4043 11.4253 10.33 11.219C10.2558 11.0128 10.1384 10.8247 9.98583 10.6673C11.425 10.5069 12.9375 9.96145 12.9375 7.45895C12.9374 6.81903 12.6912 6.20366 12.25 5.7402C12.4589 5.18035 12.4442 4.56152 12.2087 4.01228C12.2087 4.01228 11.6679 3.85186 10.4167 4.69061C9.36617 4.40591 8.25883 4.40591 7.20833 4.69061C5.95708 3.85186 5.41625 4.01228 5.41625 4.01228C5.18084 4.56152 5.16607 5.18035 5.375 5.7402C4.93047 6.2071 4.68407 6.82803 4.6875 7.4727C4.6875 9.95686 6.2 10.5023 7.63917 10.681C7.48837 10.8369 7.37208 11.0227 7.29785 11.2264C7.22362 11.4301 7.19312 11.6472 7.20833 11.8635V13.1789M7.20833 12.2623C5.83333 12.7082 4.6875 12.2623 4 10.8873"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mr-2">
                  <a
                    href="https://www.figma.com/file/KkG8A0KrT2ONkzjC1Pw5y0/forsyth-county-hacks-2.0-website"
                    target="_blank"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="8"
                        fill="#DCAAF3"
                        stroke="black"
                      />
                      <path
                        d="M9 4.5H7.5C7.10218 4.5 6.72064 4.65804 6.43934 4.93934C6.15804 5.22064 6 5.60218 6 6C6 6.39782 6.15804 6.77936 6.43934 7.06066C6.72064 7.34196 7.10218 7.5 7.5 7.5H9M9 4.5V7.5M9 4.5H10.5C10.8978 4.5 11.2794 4.65804 11.5607 4.93934C11.842 5.22064 12 5.60218 12 6C12 6.39782 11.842 6.77936 11.5607 7.06066C11.2794 7.34196 10.8978 7.5 10.5 7.5H9"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 10.5C7.10218 10.5 6.72064 10.658 6.43934 10.9393C6.15804 11.2206 6 11.6022 6 12C6 12.3978 6.15804 12.7794 6.43934 13.0607C6.72064 13.342 7.10218 13.5 7.5 13.5C7.89782 13.5 8.27936 13.342 8.56066 13.0607C8.84196 12.7794 9 12.3978 9 12V10.5M7.5 10.5H9M7.5 10.5C7.10218 10.5 6.72064 10.342 6.43934 10.0607C6.15804 9.77936 6 9.39782 6 9C6 8.60218 6.15804 8.22064 6.43934 7.93934C6.72064 7.65804 7.10218 7.5 7.5 7.5H9V10.5M9 9C9 8.60218 9.15804 8.22064 9.43934 7.93934C9.72064 7.65804 10.1022 7.5 10.5 7.5C10.8978 7.5 11.2794 7.65804 11.5607 7.93934C11.842 8.22064 12 8.60218 12 9C12 9.39782 11.842 9.77936 11.5607 10.0607C11.2794 10.342 10.8978 10.5 10.5 10.5C10.1022 10.5 9.72064 10.342 9.43934 10.0607C9.15804 9.77936 9 9.39782 9 9Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="m-10">
              {" "}
              <img
                src="https://cloud-5w4kr1b38-hack-club-bot.vercel.app/0group_14.png"
                width="500"
                height="600"
              ></img>
            </div>
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
