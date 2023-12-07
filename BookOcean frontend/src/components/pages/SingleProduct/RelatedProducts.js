import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
import "./RelatedProducts.css";
import { memo } from "react";
import ProductSlider from "../../../UI/ProductSlider";

const RelatedProducts = ({
  genreWiseProducts,
  handleAddToCart,
  handleWishlist,
  handleDetails,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow:
      genreWiseProducts?.result?.length === 1
        ? 1
        : genreWiseProducts?.result?.length > 4
        ? 4
        : genreWiseProducts?.result?.length,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box py={6} mb={8} sx={{ mx: { md: 16, xs: 4 } }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          py: 10,
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: "bold",
        }}
      >
        Related Products
      </Typography>

      <Slider {...settings}>
        {genreWiseProducts?.result?.length > 0 ? (
          genreWiseProducts?.result?.map((product) => (
            <ProductSlider
              key={product._id}
              product={product}
              handleWishlist={handleWishlist}
              handleAddToCart={handleAddToCart}
              handleDetails={handleDetails}
            />
          ))
        ) : (
          <Loading />
        )}
      </Slider>
    </Box>
  );
};

export default memo(RelatedProducts);
