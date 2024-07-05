import { Work as WorkCard } from "../component";
import { Box, Typography } from "@mui/material";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
const Work = () => {
  const navigate=useNavigate();
  return (
    <Box className="flex justify-center items-center">
      <Box className="max-w-5xl p-4">
        <Typography
          as="h1"
          className="!font-black !text-5xl !text-[--color-dark--primary]">
          Work
        </Typography>
        <Box className="mt-7">
          {data.work.map((items, index) => {
            return (
              <WorkCard
                key={index}
                title={items.title}
                image={items.image}
                type={items.type}
                description={items.description}
                year={items.year}
                onClick={()=>navigate(`/work/${items.id}`)}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default Work;
