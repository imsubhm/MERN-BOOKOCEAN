import { Drafts, LocalPhoneOutlined, LocationOn } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "../../shared/Footer";
import { Link as Routerlink } from "react-router-dom";
import { checkout } from "../../../utils/design";

const Contact = () => {
  return (
    <div>
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
          Contact
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" underline="hover" color="inherit" component={Routerlink}>
            Home
          </Link>
          <Typography color="text.primary">Contact</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ px: { md: 16, xs: 4 }, pb: 16 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", py: 8, textTransform: "uppercase" }}
        >
          CONTACT US FOR ANY QUERY
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <LocalPhoneOutlined
              fontSize="large"
              sx={{
                borderRadius: "10%",
                p: 2,
                bgcolor: "#FF8E78",
                color: "white",
              }}
            />
            <Typography sx={{ mt: 4, fontWeight: 600 }}> Mobile </Typography>
            <Typography sx={{ mt: 1 }}> +91 800 123 1234 </Typography>
            <Typography sx={{ mt: 1 }}> +91 900 128 1235 </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Drafts
              fontSize="large"
              sx={{
                borderRadius: "10%",
                p: 2,
                bgcolor: "#FF8E78",
                color: "white",
              }}
            />
            <Typography sx={{ mt: 4, fontWeight: 600 }}> Email</Typography>
            <Typography sx={{ mt: 1 }}> bookocean@email.com </Typography>
            <Typography sx={{ mt: 1 }}> support@bookocean.io </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <LocationOn
              fontSize="large"
              sx={{
                borderRadius: "10%",
                p: 2,
                bgcolor: "#FF8E78",
                color: "white",
              }}
            />
            <Typography sx={{ mt: 4, fontWeight: 600 }}> Address </Typography>
            <Typography sx={{ mt: 1 }}> 221B Baker Street </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={0} py={10} bgcolor="ghostwhite">
        <Grid container sx={{ px: { md: 16, xs: 4 } }} spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Topic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: "100%" }}
              id="filled-multiline-static"
              multiline
              rows={4}
              placeholder="Message"
            />
          </Grid>
        </Grid>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" sx={checkout}>
            Send Message
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;
