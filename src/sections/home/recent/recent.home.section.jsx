import { Box, Typography } from "@mui/material";
const cardStyle = {
  boxShadow: "0px 4px 10px 0px #BBE1FA40",
};
const Recent = () => {
  return (
    <Box className="bg-[#EDF7FA] p-4 flex justify-center items-center">
      <Box className="max-w-5xl">
        <Box className="md:flex md:justify-between">
          <Typography
            as="h1"
            className="!font-normal  !text-2xl  !text-[--color-dark--primary] !text-center">
            Recent Posts
          </Typography>
          <Typography
            as="h1"
            className="!font-normal !text-[--color-secondary] hidden md:block">
            view all
          </Typography>
        </Box>
        <Box className="mt-4 flex flex-col md:flex-row md:justify-center">
          <Box className="bg-white p-6 w-full md:w-[35vw]" style={cardStyle}>
            <Typography
              as="h1"
              className="!font-bold !text-2xl !text-[--color-dark--primary]">
              Making a design system from scratch
            </Typography>
            <Box>
              <Typography className="pt-4 !font-normal !text-[--color-dark--primary] !text-lg">
                12 Feb | Design, Pattern
              </Typography>
            </Box>
            <Typography
              as="p"
              className="!font-normal !text-[--color-dark--primary] !leading-6 pt-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Box>
          <Box
            className="bg-white p-6 w-full md:w-[35vw] mt-3 md:ml-5 md:mt-0"
            style={cardStyle}>
            <Typography
              as="h1"
              className="!font-bold !text-2xl !text-[--color-dark--primary]">
              Making a design system from scratch
            </Typography>
            <Box>
              <Typography className="pt-4 !font-normal !text-[--color-dark--primary] !text-lg">
                12 Feb | Design, Pattern
              </Typography>
            </Box>
            <Typography
              as="p"
              className="!font-normal !text-[--color-dark--primary] !leading-6 pt-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Recent;
