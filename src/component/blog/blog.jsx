import { Box, Typography, Divider } from "@mui/material";
const DividerStyle = {
  border: "1px solid #E0E0E0",
};
const Blog = () => {
  return (
    <Box className="mt-8">
      <Typography
        as="h1"
        className="!font-medium !text-3xl !text-[--color-dark--primary]">
        UI Interactions of the week
      </Typography>
      <Box className="mt-3 flex justify-between flex-row  max-w-80 w-full">
        <Typography
          as="h2"
          className="!font-normal !text-xl !text-[--color-dark--primary]">
          12 Feb 2019
        </Typography>
        <Typography
          as="span"
          className="!font-normal !text-xl !text-[--color-dark-secondary]">
          |
        </Typography>
        <Typography
          as="span"
          className="!font-normal !text-xl !text-[--color-light]">
          Express, Handlebars
        </Typography>
      </Box>

      <Typography
        as="p"
        className="!font-normal !text-[--color-dark--primary] !leading-6 pt-3">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Typography>
      <Divider className="!mt-7" style={DividerStyle} />
    </Box>
  );
};
export default Blog;
