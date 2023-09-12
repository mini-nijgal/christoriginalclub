import React from "react";

import { Img, Line, List, Text } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[4454px] mx-auto relative w-full">
        <div className="h-[4454px] md:h-[4801px] sm:h-[5161px] m-auto md:px-5 w-full">
          <div className="h-[4454px] md:h-[4801px] sm:h-[5161px] m-auto w-full">
            <div className="h-[4454px] md:h-[4801px] sm:h-[5161px] m-auto w-full">
              <div className="bg-black-900 flex flex-col h-full items-center justify-start m-auto p-[59px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col justify-start mb-[9px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-[31px] items-center justify-start md:ml-[0] ml-[720px] w-[43%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-6 sm:mt-0 mt-1.5 w-6"
                        src="images/img_solarhomeanglebroken.svg"
                        alt="solarhomeangleb"
                      />
                      <Text
                        className="ml-4 sm:ml-[0] sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterRegular24"
                      >
                        Home
                      </Text>
                      <Text
                        className="ml-14 sm:ml-[0] sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterRegular24"
                      >
                        About us
                      </Text>
                      <a
                        href="javascript:"
                        className="sm:ml-[0] ml-[61px] sm:mt-0 mt-[7px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      >
                        <Text size="txtInterRegular24">Sign up</Text>
                      </a>
                      <div className="flex h-[43px] justify-end sm:ml-[0] ml-[51px] relative w-[21%] sm:w-full">
                        <a
                          href="javascript:"
                          className="mb-[5px] ml-[18px] mt-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        >
                          <Text size="txtInterRegular24">Sign in</Text>
                        </a>
                        <div className="absolute border-2 border-solid border-white-A700 h-[43px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_5b flex flex-col items-end justify-start p-[5px] rounded-[20px] w-full">
                      <Img
                        className="h-[35px] mr-3 w-[35px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </div>
                  </div>
                  <div className="font-alteron h-[677px] md:h-[683px] mt-[50px] relative w-[96%] md:w-full">
                    <div className="absolute md:h-[545px] h-[662px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute md:h-[545px] h-[618px] right-[0] top-[0] w-[63%] md:w-full">
                        <Img
                          className="absolute bottom-[0] h-[545px] inset-x-[0] mx-auto object-cover"
                          src="images/img_union.png"
                          alt="union"
                        />
                        <div className="absolute bottom-[8%] flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto w-full">
                          <div className="bg-gradient  h-20 rounded-[50%] w-20"></div>
                          <div className="bg-gradient1  h-[206px] rotate-[26deg] rounded-[130px] w-[32%]"></div>
                        </div>
                        <div className="absolute bg-gradient  h-20 left-[5%] rounded-[50%] top-[0] w-20"></div>
                      </div>
                      <div className="absolute bg-gradient  bottom-[0] h-20 left-[8%] rounded-[50%] w-20"></div>
                      <Text
                        className="absolute h-max inset-y-[0] leading-[91.00px] left-[0] my-auto md:text-5xl text-[80px] text-white-A700"
                        size="txtALTERON80"
                      >
                        <>
                          MUSIC
                          <br />
                          MEDIA
                          <br />
                          MOVEMENTS
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[633px] object-cover right-[15%] top-[0] w-[34%]"
                      src="images/img_pexelsabdullahtaha14015036.png"
                      alt="pexelsabdullaht"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row font-candara md:gap-5 items-start justify-start md:ml-[0] ml-[99px] mt-[663px] w-[76%] md:w-full">
                    <div className="bg-gray-900 h-[94px] md:mt-0 mt-[99px] rounded-[47px] shadow-bs w-[18%]"></div>
                    <div className="bg-teal-900 h-[94px] ml-2.5 md:ml-[0] md:mt-0 mt-[99px] rounded-[47px] shadow-bs w-[18%]"></div>
                    <Text
                      className="italic mb-[52px] md:ml-[0] ml-[158px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[49%] sm:w-full"
                      size="txtCandaraLightItalic24"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                  <div className="flex flex-col font-candara gap-[29px] items-start justify-start md:ml-[0] ml-[771px] mt-[968px]">
                    <Text
                      className="italic md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                      size="txtCandaraBoldItalic56"
                    >
                      Connect with us
                    </Text>
                    <Text
                      className="italic text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtCandaraLightItalic24"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                  <div className="flex flex-col font-candara md:gap-10 gap-[404px] items-center justify-start ml-3.5 md:ml-[0] mt-[441px] w-[99%] md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[99%]"
                      orientation="horizontal"
                    >
                      <div className="md:h-[254px] h-[286px] sm:ml-[0] relative w-full">
                        <div className="absolute bg-black-900_01 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[81px] shadow-bs1 w-full">
                          <Text
                            className="italic mt-[77px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[87%] sm:w-full"
                            size="txtCandaraLightItalic24"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-[66px] items-center justify-start left-[14%] p-1 rounded-[50%] top-[0] w-[66px]">
                          <div className="flex flex-col h-[58px] items-center justify-start w-[58px]">
                            <Img
                              className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                              src="images/img_pexelsabdullahtaha14015036_58x58.png"
                              alt="pexelsabdullaht"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[254px] h-[287px] sm:ml-[0] relative w-full">
                        <div className="absolute bg-black-900_01 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[81px] shadow-bs1 w-full">
                          <Text
                            className="italic mt-[63px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[90%] sm:w-full"
                            size="txtCandaraLightItalic24"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-[66px] items-center justify-start left-[13%] p-1 rounded-[50%] top-[0] w-[66px]">
                          <div className="flex flex-col h-[58px] items-center justify-start w-[58px]">
                            <Img
                              className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                              src="images/img_d0e34eacd2fffc7.png"
                              alt="d0e34eacd2fffcSeven"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[254px] h-[286px] sm:ml-[0] relative w-full">
                        <div className="absolute bg-black-900_01 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[81px] shadow-bs1 w-full">
                          <Text
                            className="italic mt-[63px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[90%] sm:w-full"
                            size="txtCandaraLightItalic24"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-[66px] items-center justify-start left-[15%] p-1 rounded-[50%] top-[0] w-[66px]">
                          <div className="flex flex-col h-[58px] items-center justify-start w-[58px]">
                            <Img
                              className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                              src="images/img_pexelsabdullahtaha14015036_1.png"
                              alt="pexelsabdullaht"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[37px] items-start justify-start md:mt-0 mt-[5px] w-1/4 md:w-full">
                        <Img
                          className="h-[101px] md:h-auto object-cover w-[93%]"
                          src="images/img_christuniversity.png"
                          alt="christuniversit"
                        />
                        <Text
                          className="italic text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                          size="txtCandaraLightItalic24"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-2/5 md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-4/5 md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraBold24"
                          >
                            ABOUT
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[89px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraBold24"
                          >
                            SERVICES
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[81px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraBold24"
                          >
                            OTHERS
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-8 w-[84%] md:w-full">
                          <Text
                            className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            History
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[93px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            How to Join
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[59px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Guidelines
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Our Team
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Programs
                          </Text>
                          <a
                            href="javascript:"
                            className="mb-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          >
                            <Text size="txtCandaraLight24">
                              Terms & Conditions
                            </Text>
                          </a>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-[78%] md:w-full">
                          <Text
                            className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Guidelines
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[61px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            How we work
                          </Text>
                          <a
                            href="javascript:"
                            className="sm:ml-[0] ml-[42px] sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          >
                            <Text size="txtCandaraLight24">Privacy</Text>
                          </a>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-0.5 w-[56%] md:w-full">
                          <Text
                            className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Help
                          </Text>
                          <Text
                            className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Our Products
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[53px] items-center justify-start mt-1.5 w-[51%] md:w-full">
                          <a
                            href="javascript:"
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          >
                            <Text size="txtCandaraLight24">Contact Us</Text>
                          </a>
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCandaraLight24"
                          >
                            Feedbacks
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-56 left-[0] object-cover rounded-[11px] top-[0] w-[29%]"
                src="images/img_artboard11.png"
                alt="artboardEleven"
              />
              <div
                className="absolute bg-cover bg-no-repeat flex md:flex-col flex-row font-candara md:gap-10 gap-[158px] h-[554px] inset-x-[0] items-start justify-start mx-auto p-8 sm:px-5 top-[23%] w-full"
                style={{ backgroundImage: "url('images/img_group14.png')" }}
              >
                <div className="h-[234px] md:h-[243px] mb-[9px] md:ml-[0] ml-[139px] md:mt-0 mt-[246px] relative w-[26%] md:w-full">
                  <div className="absolute flex flex-row gap-1.5 h-max inset-[0] items-end justify-between m-auto w-full">
                    <div className="flex h-[231px] justify-end relative w-1/2">
                      <div className="bg-gray-900_01 h-[94px] mt-auto mx-auto rounded-[47px] shadow-bs2 w-[98%]"></div>
                      <Img
                        className="absolute h-[231px] inset-[0] justify-center m-auto object-cover rounded-[48px] w-full"
                        src="images/img_pngwing2.png"
                        alt="pngwingTwo"
                      />
                    </div>
                    <div className="bg-lime-900 h-[94px] mt-[137px] rounded-[47px] shadow-bs w-[49%]"></div>
                  </div>
                  <Img
                    className="absolute h-[234px] inset-y-[0] my-auto object-cover right-[0] rounded-[48px] w-[49%]"
                    src="images/img_9658eaa1dc3bf7b.png"
                    alt="9658eaa1dc3bf7b"
                  />
                </div>
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:mt-0 mt-[381px] w-[36%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[92%] md:w-full">
                    <Line className="bg-blue_gray-100 h-6 sm:h-[3px] mb-2.5 sm:mt-0 mt-[3px] w-[3px] sm:w-full" />
                    <Text
                      className="italic sm:ml-[0] ml-[15px] sm:text-[27px] md:text-[29px] text-[31px] text-white-A700"
                      size="txtCandaraBoldItalic31"
                    >
                      Graphic Design
                    </Text>
                    <Line className="bg-blue_gray-100 h-6 sm:h-[3px] mb-2.5 ml-16 sm:ml-[0] sm:mt-0 mt-[3px] w-[3px] sm:w-full" />
                    <Text
                      className="italic sm:ml-[0] ml-[17px] sm:text-[27px] md:text-[29px] text-[31px] text-white-A700"
                      size="txtCandaraBoldItalic31"
                    >
                      Video Editing
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Line className="bg-blue_gray-100 h-[23px] sm:h-[3px] mb-[11px] sm:mt-0 mt-[5px] w-[3px] sm:w-full" />
                    <Text
                      className="italic ml-4 sm:ml-[0] sm:mt-0 mt-0.5 sm:text-[27px] md:text-[29px] text-[31px] text-white-A700"
                      size="txtCandaraBoldItalic31"
                    >
                      Photography
                    </Text>
                    <Line className="bg-blue_gray-100 h-6 sm:h-[3px] mb-3 sm:ml-[0] ml-[84px] sm:mt-0 mt-[3px] w-[3px] sm:w-full" />
                    <Text
                      className="italic mb-0.5 sm:ml-[0] ml-[17px] sm:text-[27px] md:text-[29px] text-[31px] text-white-A700"
                      size="txtCandaraBoldItalic31"
                    >
                      Cinematography
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex md:flex-col flex-row font-candara gap-[22px] h-max inset-[0] items-start justify-center m-auto p-[21px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group15.png')" }}
            >
              <div className="h-[321px] sm:h-[472px] md:h-[600px] mb-[184px] md:ml-[0] ml-[49px] md:mt-0 mt-[7px] relative w-[59%] md:w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-[57px]">
                      <Text
                        className="italic md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                        size="txtCandaraBoldItalic56"
                      >
                        Trending Now
                      </Text>
                      <Text
                        className="italic text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                        size="txtCandaraLightItalic24"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Text>
                    </div>
                    <div className="bg-gradient2  flex flex-col gap-[17px] items-center justify-start p-[39px] sm:px-5 rounded-[36px]">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtCandara17"
                      >
                        Fathima Sana
                      </Text>
                      <Text
                        className="italic text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCandaraBoldItalic24"
                      >
                        Dance with heart
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[2%] flex flex-col items-center justify-start right-[2%] w-[34%]">
                  <Img
                    className="h-[148px] md:h-auto object-cover rounded-bl-[36px] rounded-br-[36px] w-full"
                    src="images/img_95342ff32032826.png"
                    alt="95342ff32032826"
                  />
                </div>
                <div className="absolute bg-white-A700 flex flex-col h-[66px] items-center justify-start p-1 right-[12%] rounded-[50%] top-[0] w-[66px]">
                  <div className="flex flex-col h-[58px] items-center justify-start w-[58px]">
                    <Img
                      className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                      src="images/img_d0e34eacd2fffc7_58x58.png"
                      alt="d0e34eacd2fffcSeven"
                    />
                  </div>
                </div>
              </div>
              <div className="h-80 md:h-[148px] relative w-[21%] md:w-full">
                <div className="absolute bg-gradient2  flex flex-col gap-[25px] items-center justify-start p-[33px] sm:px-5 right-[0] rounded-[36px] top-[13%]">
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtCandara17"
                  >
                    Arjun P Alan
                  </Text>
                  <Text
                    className="italic mb-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtCandaraBoldItalic24"
                  >
                    Culture of Culture
                  </Text>
                </div>
                <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[94%]">
                  <Img
                    className="h-[148px] md:h-auto object-cover rounded-bl-[36px] rounded-br-[36px] w-full"
                    src="images/img_96a899fe36e4b45.png"
                    alt="96a899fe36e4bFortyFive"
                  />
                </div>
                <div className="absolute bg-white-A700 flex flex-col h-[66px] items-center justify-start p-1 right-[36%] rounded-[50%] top-[0] w-[66px]">
                  <div className="flex flex-col h-[58px] items-center justify-start w-[58px]">
                    <Img
                      className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                      src="images/img_pexelsabdullahtaha14015036_1.png"
                      alt="pexelsabdullaht_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-candara md:gap-10 gap-[443px] inset-x-[0] justify-start mx-auto top-[19%] w-[93%]">
              <div className="bg-gradient3  flex flex-col items-start justify-end p-[30px] sm:px-5 rounded-[52px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[103px] mt-[17px] w-[81%] md:w-full">
                  <div className="h-[133px] md:h-[98px] relative w-[9%] md:w-full">
                    <Text
                      className="absolute inset-x-[0] italic mx-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0] w-max"
                      size="txtCandaraBoldItalic32"
                    >
                      Events
                    </Text>
                    <Text
                      className="absolute bottom-[0] italic left-[0] md:text-5xl text-[80px] text-white-A700"
                      size="txtCandaraBoldItalic80"
                    >
                      07
                    </Text>
                  </div>
                  <div className="h-[130px] md:h-[98px] md:ml-[0] ml-[138px] md:mt-0 mt-1 relative w-[14%] md:w-full">
                    <Text
                      className="absolute italic right-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0]"
                      size="txtCandaraBoldItalic32"
                    >
                      Programs
                    </Text>
                    <Text
                      className="absolute bottom-[0] italic left-[0] md:text-5xl text-[80px] text-white-A700"
                      size="txtCandaraBoldItalic80"
                    >
                      17
                    </Text>
                  </div>
                  <div className="h-[132px] md:h-[98px] md:ml-[0] ml-[99px] md:mt-0 mt-[3px] relative w-[17%] md:w-full">
                    <Text
                      className="absolute inset-x-[0] italic mx-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0] w-max"
                      size="txtCandaraBoldItalic32"
                    >
                      Membership
                    </Text>
                    <Text
                      className="absolute bottom-[0] italic left-[0] md:text-5xl text-[80px] text-white-A700"
                      size="txtCandaraBoldItalic80"
                    >
                      03
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[136px] w-[28%] md:w-full">
                    <Text
                      className="italic md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtCandaraBoldItalic32"
                    >
                      Artists
                    </Text>
                    <div className="flex relative w-full">
                      <div className="flex my-auto w-[84%]">
                        <div className="flex my-auto w-[85%]">
                          <div className="flex my-auto w-[85%]">
                            <div className="flex my-auto w-[73%]">
                              <div className="flex my-auto w-[77%]">
                                <div className="flex flex-col h-[58px] items-center justify-start my-auto w-[58px]">
                                  <Img
                                    className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                                    src="images/img_9658eaa1dc3bf7b_58x58.png"
                                    alt="9658eaa1dc3bf7b_One"
                                  />
                                </div>
                                <div className="flex flex-col h-[58px] items-center justify-start ml-[-18.36px] my-auto w-[58px] z-[1]">
                                  <Img
                                    className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                                    src="images/img_d0e34eacd2fffc7_58x58.png"
                                    alt="d0e34eacd2fffcSeven_One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start ml-[-18px] my-auto w-[37%] z-[1]">
                                <Img
                                  className="h-[58px] md:h-auto object-cover rounded-bl-[29px] rounded-br-[29px] w-full"
                                  src="images/img_078300d2a2b81db.png"
                                  alt="078300d2a2b81db"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start ml-[-5.11px] my-auto w-[31%] z-[1]">
                              <Img
                                className="h-[58px] md:h-auto object-cover rounded-bl-[29px] rounded-br-[29px] w-full"
                                src="images/img_95342ff32032826_58x52.png"
                                alt="95342ff32032826_One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-[-20.4px] my-auto w-1/4 z-[1]">
                            <Img
                              className="h-[58px] md:h-auto object-cover rounded-bl-[29px] rounded-br-[29px] w-full"
                              src="images/img_2bab8f2458c81e1.png"
                              alt="2bab8f2458c81eOne"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-14.17px] my-auto w-[22%] z-[1]">
                          <Img
                            className="h-[58px] md:h-auto object-cover rounded-bl-[29px] rounded-br-[29px] w-full"
                            src="images/img_96a899fe36e4b45_58x51.png"
                            alt="96a899fe36e4bFortyFive_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col h-[58px] items-center justify-start ml-[-9.03px] my-auto w-[58px] z-[1]">
                        <Img
                          className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                          src="images/img_pexelsabdullahtaha14015036_2.png"
                          alt="pexelsabdullaht_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[114px] w-[26%] md:w-full">
                <Img
                  className="h-[237px] md:h-auto object-cover rounded-[50px] w-[51%]"
                  src="images/img_078300d2a2b81db_237x177.png"
                  alt="078300d2a2b81db_One"
                />
                <Img
                  className="h-[244px] md:h-auto object-cover rounded-[29px] w-[47%]"
                  src="images/img_616a072f55f1bdc.png"
                  alt="616a072f55f1bdc"
                />
              </div>
            </div>
            <Img
              className="absolute bottom-[26%] h-[396px] left-[0] object-cover w-[10%]"
              src="images/img_ellipse17.png"
              alt="ellipseSeventeen"
            />
          </div>
          <Img
            className="absolute bottom-[15%] h-[396px] object-cover right-[0] w-[2%]"
            src="images/img_ellipse18.png"
            alt="ellipseEighteen"
          />
          <Img
            className="absolute bottom-[27%] h-[749px] left-[9%] object-cover w-[748px]"
            src="images/img_iphone2.png"
            alt="iphoneTwo"
          />
        </div>
        <Img
          className="absolute bottom-[28%] h-[678px] left-[0] object-cover w-[45%]"
          src="images/img_iphone1.png"
          alt="iphoneOne"
        />
      </div>
    </>
  );
};

export default MacBookPro14OnePage;
