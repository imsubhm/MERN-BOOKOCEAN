import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import about from "../../../images/about.png";
import Footer from "../../shared/Footer";
import { Link as Routerlink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { md: 16, xs: 4 },
          py: 5,
          bgcolor: "#FF8E78",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textTransform: "uppercase", fontWeight: 600 }}
        >
          About
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" underline="hover" color="inherit" component={Routerlink}>
            Home
          </Link>
          <Typography color="text.primary">About</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ px: { md: 16, xs: 4 }, mb: 16, mt: 4 }}>
        <Grid
          container
          spacing={{ md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            sx={{ pr: { lg: 20 } }}
          >
            <Typography variant="h4" mb={6} sx={{ lineHeight: "50px" }}>
              Bookocean is India’s Largest and Cheapest Online Bookstore
              offering 40+ Million selections.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Dear readers, We offer a huge collection of books from diverse
              categories of Fiction, Non-fiction, Biographies, History,
              Religion, Self-Help, etc. We also offer a collection of
              Investments and Management, Computers, Engineering, Medical,
              College and School text reference books. We strive for customer
              satisfaction by offering a user-friendly search engine, efficient
              payment options and seamless delivery systems. Apart from all
              this, we also provide great deals and discounts on our products.
              All the Publishers, Distributors and Authors around the country
              are welcome to partner with us and grow the Bookswagon family. We
              would like to thank our customers for shopping with us. You can
              write to us on our e-mail id to share any suggestions or feedback
              you might have regarding our website or services.
            </Typography>
            <Typography variant="h6" mb={6} sx={{ lineHeight: "50px" }}>
              “I declare after all there is no enjoyment like reading!”
              <Typography
                sx={{
                  fontFamily: "Ruthie",
                  color: "#FF8E78",
                  fontSize: 25,
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                - Jane Austen, Pride and Prejudice.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <img
              src={about}
              alt="about_image"
              style={{ width: "100%", overflow: "hidden" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;
