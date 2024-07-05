import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box className="p-10 flex justify-center items-center flex-col">
      <Box>
        <IconButton>
          <FacebookIcon className="!w-7 !h-7 !text-[--color-dark--primary]" />
        </IconButton>
        <IconButton>
          <InstagramIcon className="!w-7 !h-7 !text-[--color-dark--primary]" />
        </IconButton>
        <IconButton>
          <TwitterIcon className="!w-7 !h-7 !text-[--color-dark--primary]" />
        </IconButton>
        <IconButton>
          <LinkedInIcon className="!w-7 !h-7 !text-[--color-dark--primary]" />
        </IconButton>
      </Box>
      <Typography
          as="p"
          className="!pt-3 !text-[--color-dark--primary] !font-normal !text-sm">
          Copyright ©2020 All rights reserved{" "}
        </Typography>
    </Box>
  );
};
export default Footer;
