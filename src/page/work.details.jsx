import { Box, Typography } from "@mui/material";
import work2 from "../asests/png/work2.png";
import work3 from "../asests/png/work3.png";
import work4 from "../asests/png/work4.png";

const WorkDetails = () => {
  return (
    <Box className="flex justify-center items-center flex-col">
      <Box className="max-w-5xl p-4">
        <Typography
          as="h1"
          className="!font-bold !text-4xl md:text-3xl !text-[--color-dark--primary] !leading-snug w-full md:w-6/12">
          Designing Dashboards with usability in mind
        </Typography>
        <Box className="flex flex-row mt-8">
          <Typography
            as="h2"
            className="!font-black !text-lg bg-[--color-primary] !text-white !w-16 !h-1/4 rounded-2xl text-center">
            2020
          </Typography>
          <Typography
            as="h2"
            className="!font-normal !text-[--color-light] !text-xl capitalize !ml-5">
            Dashboard, User Experience Design
          </Typography>
        </Box>
        <Typography
          as="p"
          className="!font-normal !text-[--color-dark--primary] pt-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Box className="mt-9">
          <img
            src={work2}
            alt="work_details_image"
            className="w-screen !h-full"
          />
        </Box>

        <Box className="mt-8">
          <Typography
            as="h2"
            className="!font-medium !text-3xl !text-[--color-dark--primary]">
            Heading 1
          </Typography>
          <Typography
            as="h3"
            className="!font-medium !text-2xl !text-[--color-dark--primary]">
            Heading 2
          </Typography>
          <Typography
            as="p"
            className="!font-normal !text-[--color-dark-secondary] !leading-6 pt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <img
            src={work3}
            alt="work_details_image"
            className="w-screen !h-full mt-7"
          />
          <img
            src={work4}
            alt="work_details_image"
            className="w-screen !h-full mt-7"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default WorkDetails;
