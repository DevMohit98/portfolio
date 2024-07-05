import { Typography, Box, Divider } from "@mui/material";
import wor1 from "../../asests/png/work1.png";
const DividerStyle = {
  border: "1px solid #E0E0E0",
};
const Work = ({ title, image, description, type, year, onClick }) => {
  return (
    <Box onClick={onClick} className="cursor-pointer">
      <Box className="flex flex-col md:flex-row mt-4 mb-9">
        <img src={wor1} alt="work_image" />
        <Box className="ml-0 md:ml-5 mt-3 md:mt-0">
          <Typography
            as="h1"
            className="!font-bold !text-3xl !text-[--color-dark--primary]">
            {title}
          </Typography>
          <Box className="flex flex-row mt-4">
            <Typography
              as="h2"
              className="!font-black !text-lg bg-[#142850] !text-white !w-16 !h-auto rounded-2xl text-center">
              {year}
            </Typography>
            <Typography
              as="h2"
              className="!font-normal !text-[--color-light] !text-xl capitalize !ml-5">
              {type}
            </Typography>
          </Box>
          <Typography
            as="p"
            className="!font-normal !text-[--color-dark--primary] !leading-6 !mt-4">
            {description}
          </Typography>
        </Box>
      </Box>
      <Divider className="!mt-8" style={DividerStyle} />
    </Box>
  );
};
export default Work;
