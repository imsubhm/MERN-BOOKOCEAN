import { Box, Typography } from "@mui/material";
import React from "react";
import fiction from "../../../images/fiction.png";
import nonfiction from "../../../images/nonfiction.png";
import kids from "../../../images/kids.png";

const Genres = ({ handleCollections }) => {
  const genres = [
    {
      title: "Fiction",
      image: fiction,
      link: "fiction",
    },
    {
      title: "Non-Fiction",
      image: nonfiction,
      link: "non-fiction",
    },
    {
      title: "Kids",
      image: kids,
      link: "kids",
    },
  ];

  return (
    <Box sx={{ px: { md: 16, xs: 4 } }} mt={4}>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          color: "#FFFFD0",
        }}
      >
        {genres.map((genre, i) => (
          <Box
            key={i}
            sx={{
              backgroundImage: `url(${genre.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              "&:hover > .MuiBox-root": {
                borderColor: "black",
                transitionDuration: "1s",
              },
              "&:hover > .MuiBox-root > .MuiBox-root > .MuiTypography-root": {
                color: "white",
                transitionDuration: "1s",
              },
              flexBasis: "100%",
            }}
          >
            <Box
              border={1}
              m={2}
              sx={{
                borderColor: "white",
                transitionDuration: "1s",
              }}
            >
              <Box p={3}>
                <Typography
                  variant="h4"
                  sx={{
                    textTransform: "uppercase",
                    color: "#FFFFD0",
                    transitionDuration: "1s",
                  }}
                >
                  {genre.title}
                </Typography>
                <Typography
                  pt={1}
                  variant="h6"
                  color="#FFFFD0"
                  sx={{ transitionDuration: "1s" }}
                >
                  {" "}
                  Collection
                </Typography>
                {/* <Typography
                  pt={2}
                  sx={{ cursor: "pointer", fontWeight: "bold" }}
                  // onClick={() => handleCollections(genre?.link)}
                >
                  view collection
                </Typography> */}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(Genres);
