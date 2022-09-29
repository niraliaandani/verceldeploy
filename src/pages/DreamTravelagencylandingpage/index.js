import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  SelectBox,
  List,
  Stack,
  RatingBar,
} from "components";

const DreamTravelagencylandingpagePage = () => {
  const navigate = useNavigate();

  function handleBackNavigation1() {
    navigate(-1);
  }

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Column className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]">
          <Column
            className="bg-cover bg-repeat items-center w-[100%]"
            style={{ backgroundImage: "url('images/img_image.png')" }}
          >
            <Column
              className="bg-cover bg-repeat items-center lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group13.png')" }}
            >
              <header className="w-[85%]">
                <Row className="items-center w-[100%]">
                  <Img
                    src="images/img_logo.png"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[10%]"
                    alt="Logo"
                  />
                  <Text className="cursor-pointer hover:font-medium font-medium font-poppins lowercase lg:ml-[203px] xl:ml-[232px] 2xl:ml-[261px] 3xl:ml-[313px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_e0 w-[auto]">
                    FIND A TRIP
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-medium font-poppins lowercase lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_e0 w-[auto]">
                    DESTINATIONS
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-medium font-poppins lowercase lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_e0 w-[auto]">
                    WHY BESNIK
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-medium font-poppins lowercase lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_e0 w-[auto]">
                    CONTACT
                  </Text>
                  <Button
                    className="font-inter font-normal lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[13%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineBluegray400"
                  >
                    Create Account
                  </Button>
                </Row>
              </header>
              <Text className="font-bold font-poppins lg:leading-[60px] xl:leading-[69px] 2xl:leading-[78px] 3xl:leading-[93px] lg:mt-[105px] xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:text-[48px] xl:text-[55px] 2xl:text-[62px] 3xl:text-[74px] text-center text-white_A700 tracking-ls1 w-[47%]">
                Exploring The World In Comfort.
              </Text>
              <Text className="font-inter font-medium lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-white_A700_a9 w-[36%]">
                You do not have the right to remain silent… let us know what it
                takes to challenge you
              </Text>
              <Row className="font-inter items-center justify-center lg:mb-[128px] xl:mb-[146px] 2xl:mb-[165px] 3xl:mb-[198px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[54%]">
                <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius4 shadow-bs2 w-[77%]">
                  <Img
                    src="images/img_vector.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[3%]"
                    alt="Vector"
                  />
                  <Line className="bg-gray_300 lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[1px]" />
                  <Text className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_87 w-[auto]">
                    Search destination
                  </Text>
                  <Line className="bg-gray_301 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mb-[1px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[1px]" />
                  <Img
                    src="images/img_icon.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[2%]"
                    alt="icon"
                  />
                  <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_87 w-[auto]">
                    C. Location
                  </Text>
                  <Line className="bg-gray_301 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[1px]" />
                  <SelectBox
                    className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_400 w-[18%]"
                    placeholderClassName="text-gray_400"
                    name="Group15"
                    placeholder="2 Person"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_vector_1.png"
                        className="mr-[0] lg:w-[7px] lg:h-[4px] xl:w-[8px] xl:h-[5px] 2xl:w-[9px] 2xl:h-[5px] 3xl:w-[10px] 3xl:h-[6px]"
                        alt="Vector"
                      />
                    }
                  ></SelectBox>
                </Row>
                <Button
                  className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[20%]"
                  onClick={handleBackNavigation1}
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlue400"
                >
                  Search
                </Button>
              </Row>
            </Column>
          </Column>
          <Text className="font-bold lg:mt-[108px] xl:mt-[124px] 2xl:mt-[140px] 3xl:mt-[168px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-bluegray_900 tracking-ls1 w-[auto]">
            We Provide Best
          </Text>
          <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[43%]">
            Take high quality online courses from the best online instrictors
            <br />
            around the world & develop your skills.
          </Text>
          <List
            className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[74%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 hover:cursor-pointer lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 hover:shadow-bs3 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_icon_1.png"
                className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] rounded-radius8 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                alt="Icon"
              />
              <Text className="font-semibold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                Select Destination
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[95%]">
                At first choose the place you wanted to go
              </Text>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 hover:shadow-bs3 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_icon_2.png"
                className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] rounded-radius8 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                alt="Icon"
              />
              <Text className="font-semibold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                Book a Trip
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[95%]">
                book your tip form our exclusive offers
              </Text>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 hover:shadow-bs3 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_icon_3.png"
                className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] rounded-radius8 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                alt="Icon"
              />
              <Text className="font-semibold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                Take your flight
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[84%]">
                Take your flight on selected date and joy
              </Text>
            </Column>
          </List>
        </Column>
        <Row className="lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] w-[73%]">
          <Column className="w-[55%]">
            <Text className="font-semibold ml-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 2xl:tracking-ls2 xl:tracking-ls2 lg:tracking-ls2 3xl:tracking-ls3 w-[auto]">
              ABOUT US
            </Text>
            <Text className="font-bold lg:leading-[40px] xl:leading-[46px] 2xl:leading-[52px] 3xl:leading-[62px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[71%]">
              Explore all corners of
              <br />
              the world with us.
            </Text>
          </Column>
          <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[45%]">
            These exercises ran in parallel with a series of focus groups
            comprising of parents. These exercises ran in parallel with a series
            of focus groups comprising of parents.
          </Text>
        </Row>
        <Column className="items-end lg:mt-[63px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] lg:pl-[108px] xl:pl-[124px] 2xl:pl-[140px] 3xl:pl-[168px] w-[100%]">
          <Row className="justify-end w-[100%]">
            <Column className="bg-white_A700 items-center lg:pb-[31px] xl:pb-[35px] 2xl:pb-[40px] 3xl:pb-[48px] rounded-radius12 shadow-bs4 w-[42%]">
              <Stack className="lg:h-[259px] xl:h-[297px] 2xl:h-[334px] 3xl:h-[400px] w-[100%]">
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] top-[0] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group12.png')" }}
                >
                  <Img
                    src="images/img_image_1.png"
                    className="absolute lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image"
                  />
                </Stack>
                <Button
                  className="absolute bottom-[0] flex 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] items-center justify-center left-[8%] rounded-radius50 3xl:w-[105px] lg:w-[68px] xl:w-[78px] 2xl:w-[88px]"
                  size="lgIcn"
                  variant="icbOutlineBlack90014"
                >
                  <Img
                    src="images/img_icon_4.png"
                    className="flex items-center justify-center"
                    alt="icon"
                  />
                </Button>
              </Stack>
              <Column className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[85%]">
                <Text className="font-semibold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 tracking-ls1 w-[auto]">
                  Nanjing, China
                </Text>
                <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[100%]">
                  These exercises ran in parallel with a series of focus groups
                  comprising of parents. These exercises ran in parallel with a
                  series.
                </Text>
              </Column>
            </Column>
            <Column className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] w-[56%]">
              <Row className="items-center justify-between w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center w-[74%]"
                  style={{ backgroundImage: "url('images/img_group10.png')" }}
                >
                  <div className="bg-gradient  lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] rounded-radius12 w-[100%]"></div>
                </Column>
                <Column
                  className="bg-cover bg-repeat items-center w-[21%]"
                  style={{ backgroundImage: "url('images/img_group11.png')" }}
                >
                  <div className="bg-gradient  lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[0] w-[100%]"></div>
                </Column>
              </Row>
              <Img
                src="images/img_arrow.png"
                className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:ml-[154px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] 2xl:mt-[101px] 3xl:mt-[121px] lg:mt-[78px] xl:mt-[89px] w-[20%]"
                alt="Arrow"
              />
            </Column>
          </Row>
        </Column>
        <Column className="items-center lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] 2xl:px-[103px] 3xl:px-[123px] lg:px-[80px] xl:px-[91px] w-[100%]">
          <Text className="font-bold lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-bluegray_900 tracking-ls1 w-[auto]">
            Featured Tour Places
          </Text>
          <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 text-center tracking-ls1 w-[42%]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Text>
          <List
            className="lg:gap-[27px] xl:gap-[31px] 2xl:gap-[35px] 3xl:gap-[42px] grid grid-cols-4 min-h-[auto] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
              <Stack className="lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] mt-[1px] w-[100%]">
                <Img
                  src="images/img_image_2.png"
                  className="absolute lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] left-[0] rounded-radius10 w-[100%]"
                  alt="image"
                />
                <div className="absolute bg-gradient  lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] right-[0] rounded-radius12 w-[100%]"></div>
              </Stack>
              <Text className="font-semibold ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                Spain Places
              </Text>
              <Row className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Img
                  src="images/img_clock1.png"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="clock1"
                />
                <Text className="font-medium mb-[2px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 tracking-ls1 w-[auto]">
                  7 Days/6 Nights
                </Text>
                <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-deep_orange_400 tracking-ls1 w-[auto]">
                  $544.00
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
              <Stack className="lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] mt-[1px] w-[100%]">
                <Img
                  src="images/img_image_3.png"
                  className="absolute lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] left-[0] rounded-radius10 w-[100%]"
                  alt="image"
                />
                <div className="absolute bg-gradient  lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] right-[0] rounded-radius12 w-[100%]"></div>
              </Stack>
              <Text className="font-semibold ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                Japa Places
              </Text>
              <Row className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Img
                  src="images/img_clock1_1.png"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="clock1"
                />
                <Text className="font-medium mb-[2px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 tracking-ls1 w-[auto]">
                  7 Days/6 Nights
                </Text>
                <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-deep_orange_400 tracking-ls1 w-[auto]">
                  $544.00
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius12 w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center w-[100%]"
                style={{
                  backgroundImage: "url('images/img_group100000240.png')",
                }}
              >
                <div className="bg-gradient  lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] rounded-radius12 w-[100%]"></div>
              </Column>
              <Text className="font-semibold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                London Places
              </Text>
              <Row className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Img
                  src="images/img_clock1_2.png"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="clock1"
                />
                <Text className="font-medium mb-[2px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 tracking-ls1 w-[auto]">
                  7 Days/6 Nights
                </Text>
                <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-deep_orange_400 tracking-ls1 w-[auto]">
                  $544.00
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius12 w-[100%]">
              <Stack className="lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] mt-[1px] w-[100%]">
                <Img
                  src="images/img_image_4.png"
                  className="absolute lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] left-[0] rounded-radius10 w-[100%]"
                  alt="image"
                />
                <div className="absolute bg-gradient  lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] right-[0] rounded-radius12 w-[100%]"></div>
              </Stack>
              <Text className="font-semibold ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 tracking-ls1 w-[auto]">
                Canada Places
              </Text>
              <Row className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Img
                  src="images/img_clock1_3.png"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="clock1"
                />
                <Text className="font-medium mb-[2px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_401 tracking-ls1 w-[auto]">
                  7 Days/6 Nights
                </Text>
                <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-deep_orange_400 tracking-ls1 w-[auto]">
                  $544.00
                </Text>
              </Row>
            </Column>
          </List>
          <Text className="font-bold lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-bluegray_900 tracking-ls1 w-[auto]">
            Our Tour Partner
          </Text>
          <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 text-center tracking-ls1 w-[42%]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Text>
          <Img
            src="images/img_partnerslogo.png"
            className="lg:h-[108px] xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[84%]"
            alt="partnerslogo"
          />
        </Column>
        <Text className="font-semibold lg:ml-[109px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 2xl:tracking-ls2 xl:tracking-ls2 lg:tracking-ls2 3xl:tracking-ls3 w-[auto]">
          TOP CITYS{" "}
        </Text>
        <Text className="font-bold lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[auto]">
          Our popular cities
        </Text>
        <Column className="items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:px-[107px] xl:px-[122px] 2xl:px-[138px] 3xl:px-[165px] w-[100%]">
          <Row className="justify-between w-[100%]">
            <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[34%]">
              We’re a team of humans with the strategy, tools, and solutions and
              digital products.
            </Text>
            <Img
              src="images/img_arrow_1.png"
              className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] w-[12%]"
              alt="Arrow"
            />
          </Row>
          <List
            className="lg:gap-[27px] xl:gap-[31px] 2xl:gap-[35px] 3xl:gap-[42px] grid grid-cols-3 min-h-[auto] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]"
            orientation="horizontal"
          >
            <Column
              className="bg-cover bg-repeat items-center w-[100%]"
              style={{ backgroundImage: "url('images/img_image_5.png')" }}
            >
              <Column className="bg-gradient1  lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[100%]">
                <Button
                  className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 w-[38%]"
                  shape="CircleBorder25"
                  variant="Outline"
                >
                  Japan
                </Button>
                <Text className="font-bold lg:mt-[245px] xl:mt-[280px] 2xl:mt-[315px] 3xl:mt-[378px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-shadow-ts text-white_A700 w-[auto]">
                  Japan
                </Text>
                <Text className="font-medium 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_ab tracking-ls1 w-[auto]">
                  10 Popular Places
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center w-[100%]"
              style={{ backgroundImage: "url('images/img_image_6.png')" }}
            >
              <Column className="bg-gradient1  lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[100%]">
                <Button
                  className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 w-[49%]"
                  shape="CircleBorder25"
                  variant="Outline"
                >
                  Indonesia
                </Button>
                <Text className="font-bold lg:mt-[245px] xl:mt-[280px] 2xl:mt-[315px] 3xl:mt-[378px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-shadow-ts text-white_A700 w-[auto]">
                  Bali
                </Text>
                <Text className="font-medium 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_ab tracking-ls1 w-[auto]">
                  10 Popular Places
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center w-[100%]"
              style={{ backgroundImage: "url('images/img_image_7.png')" }}
            >
              <Column className="bg-gradient2  lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[100%]">
                <Button
                  className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 w-[50%]"
                  shape="CircleBorder25"
                  variant="Outline"
                >
                  Barcelona
                </Button>
                <Text className="font-bold lg:mt-[245px] xl:mt-[280px] 2xl:mt-[315px] 3xl:mt-[378px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-shadow-ts text-white_A700 w-[auto]">
                  Spain
                </Text>
                <Text className="font-medium 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_ab tracking-ls1 w-[auto]">
                  10 Popular Places
                </Text>
              </Column>
            </Column>
          </List>
          <Row className="lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] w-[100%]">
            <Column className="lg:mb-[17px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] w-[88%]">
              <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-indigo_600 2xl:tracking-ls2 xl:tracking-ls2 lg:tracking-ls2 3xl:tracking-ls3 w-[auto]">
                TESTIMONIALS
              </Text>
              <Text className="font-bold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[auto]">
                What our client say
              </Text>
              <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[36%]">
                Create a visual identity for your company, and an overall brand
              </Text>
            </Column>
            <Img
              src="images/img_arrow_2.png"
              className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[92px] w-[12%]"
              alt="Arrow"
            />
          </Row>
        </Column>
        <Column className="items-end lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:pl-[108px] xl:pl-[124px] 2xl:pl-[140px] 3xl:pl-[168px] w-[100%]">
          <List
            className="lg:gap-[27px] xl:gap-[31px] 2xl:gap-[35px] 3xl:gap-[42px] grid grid-cols-4 min-h-[auto] w-[100%]"
            orientation="horizontal"
          >
            <Stack className="lg:h-[300px] xl:h-[343px] 2xl:h-[386px] 3xl:h-[463px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius12 w-[100%]">
                <Text className="font-semibold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  Sayem Ahmed
                </Text>
                <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 tracking-ls1 w-[auto]">
                  Product designer
                </Text>
                <Column className="mb-[4px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
                  <Line className="bg-gray_200 h-[1px] w-[100%]" />
                  <RatingBar
                    className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px]"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A200)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 w-[97%]">
                    Before we define any approach, we need to define the brands'
                    overall goal. We then need to dive.
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_image_8.png"
                className="absolute lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] lg:w-[59px] xl:w-[68px] 2xl:w-[77px] 3xl:w-[92px]"
                alt="image"
              />
            </Stack>
            <Stack className="lg:h-[300px] xl:h-[343px] 2xl:h-[386px] 3xl:h-[463px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius12 shadow-bs3 w-[100%]">
                <Column className="items-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[47%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    John Smith
                  </Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 tracking-ls1 w-[auto]">
                    Product designer
                  </Text>
                </Column>
                <Column className="mb-[4px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
                  <Line className="bg-gray_200 h-[1px] w-[100%]" />
                  <RatingBar
                    className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px]"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A200)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 w-[97%]">
                    Before we define any approach, we need to define the brands'
                    overall goal. We then need to dive.
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_image_9.png"
                className="absolute lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] lg:w-[59px] xl:w-[68px] 2xl:w-[77px] 3xl:w-[92px]"
                alt="image"
              />
            </Stack>
            <Stack className="lg:h-[300px] xl:h-[343px] 2xl:h-[386px] 3xl:h-[463px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius12 w-[100%]">
                <Column className="items-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[50%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Rowhan Doe
                  </Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 tracking-ls1 w-[auto]">
                    Product designer
                  </Text>
                </Column>
                <Column className="mb-[4px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
                  <Line className="bg-gray_200 h-[1px] w-[100%]" />
                  <RatingBar
                    className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px]"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A200)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 w-[97%]">
                    Before we define any approach, we need to define the brands'
                    overall goal. We then need to dive.
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_image_10.png"
                className="absolute lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] lg:w-[59px] xl:w-[68px] 2xl:w-[77px] 3xl:w-[92px]"
                alt="image"
              />
            </Stack>
            <Stack className="lg:h-[300px] xl:h-[343px] 2xl:h-[386px] 3xl:h-[463px] w-[100%]">
              <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius12 w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[47%]">
                  <Text className="absolute bottom-[0] font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_500 tracking-ls1 w-[auto]">
                    Product designer
                  </Text>
                  <Text className="absolute font-semibold inset-x-[0] lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mx-[auto] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_900 top-[0] tracking-ls1 w-[93%]">
                    Adnan Roe
                  </Text>
                </Stack>
                <Column className="mb-[4px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]">
                  <Line className="bg-gray_200 h-[1px] w-[100%]" />
                  <RatingBar
                    className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px]"
                    value={5}
                    starCount={5}
                    activeColor="var(--orange_A200)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 w-[97%]">
                    Before we define any approach, we need to define the brands'
                    overall goal. We then need to dive.
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_image_11.png"
                className="absolute lg:h-[60px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] inset-x-[0] mx-[auto] rounded-radius385 top-[0] w-[25%]"
                alt="image"
              />
            </Stack>
          </List>
        </Column>
        <Column className="items-center lg:mt-[132px] xl:mt-[151px] 2xl:mt-[170px] 3xl:mt-[204px] w-[100%]">
          <Stack className="lg:h-[445px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] w-[100%]">
            <Row className="absolute bg-black_900 bottom-[0] items-end 2xl:p-[100px] 3xl:p-[120px] lg:p-[77px] xl:p-[88px] w-[100%]">
              <Column className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] w-[34%]">
                <Img
                  src="images/img_logo_1.png"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[27%]"
                  alt="Logo"
                />
                <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_87 w-[58%]">
                  There are many variations of passages of available
                </Text>
              </Column>
              <List
                className="gap-[0] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] min-h-[auto] lg:mt-[126px] xl:mt-[144px] 2xl:mt-[162px] 3xl:mt-[194px] w-[27%]"
                orientation="vertical"
              >
                <Row className="2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                  <Button
                    className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_facebook.png"
                      className="flex items-center justify-center"
                      alt="Facebook"
                    />
                  </Button>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_d6 tracking-ls1 w-[auto]">
                    Facebook
                  </Text>
                  <Button
                    className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_linkedin.png"
                      className="flex items-center justify-center"
                      alt="Linkedin"
                    />
                  </Button>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_d6 tracking-ls1 w-[auto]">
                    Linkedin
                  </Text>
                </Row>
                <Row className="2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                  <Button
                    className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_twitter.png"
                      className="flex items-center justify-center"
                      alt="Twitter"
                    />
                  </Button>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_d6 tracking-ls1 w-[auto]">
                    Twitter
                  </Text>
                  <Button
                    className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] rounded-radius50 lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    size="smIcn"
                  >
                    <Img
                      src="images/img_pinterest.png"
                      className="flex items-center justify-center"
                      alt="Pinterest"
                    />
                  </Button>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_d6 tracking-ls1 w-[auto]">
                    Pinterest
                  </Text>
                </Row>
              </List>
              <Column className="lg:ml-[185px] xl:ml-[212px] 2xl:ml-[239px] 3xl:ml-[286px] lg:mt-[112px] xl:mt-[128px] 2xl:mt-[144px] 3xl:mt-[172px] w-[14%]">
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  Recent Post
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_87 tracking-ls1 w-[auto]">
                  Top 5 Himalayan Treks
                </Text>
                <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_87 tracking-ls1 w-[auto]">
                  May 17,2021
                </Text>
              </Column>
            </Row>
            <Stack className="absolute lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] inset-x-[0] mx-[auto] top-[0] w-[81%]">
              <Stack className="absolute bg-blue_400 lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] rounded-radius16 w-[100%]">
                <Img
                  src="images/img_maskgroup.png"
                  className="absolute lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                  alt="MaskGroup"
                />
              </Stack>
              <Row className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] w-[85%]">
                <Column className="w-[51%]">
                  <Text className="font-bold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-white_A700 tracking-ls1 w-[auto]">
                    Get our pro offers{" "}
                  </Text>
                  <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_a9 w-[74%]">
                    Create a visual identity for your company, and an overall
                    brand
                  </Text>
                </Column>
                <Row className="bg-white_A700 items-center justify-between lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius4 shadow-bs5 w-[49%]">
                  <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]">
                    Type your email here
                  </Text>
                  <Button
                    className="capitalize font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[28%]"
                    shape="RoundedBorder4"
                    variant="OutlineIndigo90020"
                  >
                    Subscribe
                  </Button>
                </Row>
              </Row>
            </Stack>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default DreamTravelagencylandingpagePage;
