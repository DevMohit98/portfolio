import { Typography, Box } from "@mui/material";
import { Work } from "../../../component";
import data from "../../../data.json";
import { useNavigate } from "react-router-dom";

const WorkSection = () => {
  const navigate=useNavigate();
  return (
    <Box className="p-4 flex md:justify-center md:items-center">
      <Box className="max-w-5xl mt-3">
        <Typography
          as="h1"
          className="!font-normal !text-2xl !text-[--color-dark--primary]">
          Featured works
        </Typography>
        {data.work.map((items, index) => {
          return (
            <Work
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
  );
};
export default WorkSection;
