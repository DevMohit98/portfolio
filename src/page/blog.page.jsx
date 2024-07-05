import { Box, Typography } from "@mui/material";
import { BlogCard } from "../component";

const Blog = () => {
  return (
    <Box className="flex justify-center items-center">
      <Box className="max-w-5xl p-4">
        <Typography
          as="h1"
          className="!font-bold !text-5xl !text-[--color-dark--primary]">
          Blog
        </Typography>

        <Box className="mt-14">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Box>
      </Box>
    </Box>
  );
};
export default Blog;
