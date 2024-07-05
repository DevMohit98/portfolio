import { Box, Typography, Button } from "@mui/material";
import user from "../../../asests/svg/user.svg";

const HeroSection = () => {
  return (
    <Box className="flex justify-center items-center flex-col md:flex-row mb-5 mt-4 p-4">
      <Box className="max-w-5xl order-last md:order-1">
        <Box className="w-full md:max-w-3xl flex justify-center items-center flex-col lg:flex-none lg:justify-start lg:items-start">
          <Typography
            as="h1"
            className="!font-bold !text-5xl !leading-snug text-center md:text-left">
            Hi, I am John, <br />
            Creative Technologist
          </Typography>

          <Typography
            as="p"
            className="!pt-4 !font-normal !leading-6 !text-[--color-dark--primary] md:w-9/12 w-full text-center md:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <Button
            variant="contained"
            className="!mt-7 !capitalize !font-medium !text-xl !bg-[--color-primary]">
            download resume
          </Button>
        </Box>
      </Box>
      <Box className="order-1 md:order-last">
        <img src={user} alt="user_image" />
      </Box>
    </Box>
  );
};

export default HeroSection;
