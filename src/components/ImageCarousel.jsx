// ImageCarousel.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./imageCarousel.css"; // Import the CSS file for custom styles

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-arrow-left" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-arrow-right" onClick={onClick}>
      <FaArrowRight />
    </button>
  );
};

const CustomDot = ({ onClick, active }) => {
  return (
    <li>
      <button
        className={`custom-dot ${active ? "custom-dot-active " : ""}`}
        onClick={onClick}
      />
    </li>
  );
};

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    testimonial: "This is an amazing service!",
    image: "https://via.placeholder.com/56",
  },
  {
    name: "Jane Smith",
    role: "CTO, Company",
    testimonial: "Highly recommend to everyone.",
    image: "https://via.placeholder.com/56",
  },
  {
    name: "Jane Smith",
    role: "CTO, Company",
    testimonial: "Highly recommend to everyone.",
    image: "https://via.placeholder.com/56",
  },
  {
    name: "Jane Smith",
    role: "CTO, Company",
    testimonial: "Highly recommend to everyone.",
    image: "https://via.placeholder.com/56",
  },
  {
    name: "Jane Smith",
    role: "CTO, Company",
    testimonial: "Highly recommend to everyone.",
    image: "https://via.placeholder.com/56",
  },
  {
    name: "Jane Smith",
    role: "CTO, Company",
    testimonial: "Highly recommend to everyone.",
    image: "https://via.placeholder.com/56",
  },
  // Add more testimonials as needed
];

const ImageCarousel = () => {
  const settings = {
    width: "100%",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container w-100 my-4 bg-transparent">
      <Slider {...settings} classsName="bg-transparent">
        {testimonials.map((item, index) => (
          <div key={index} className="p-2">
            <Card className="h-100">
              <CardContent>
                <Avatar
                  alt={item.name}
                  src={item.image}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography variant="h6" component="div" className="mt-2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.role}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mt-2"
                >
                  {item.testimonial}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
