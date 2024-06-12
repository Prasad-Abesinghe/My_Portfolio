import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import webDesignImg from "../assets/services/webdesign.jpg";
import webDevImg from "../assets/services/webdeve.jpg";
import creativeDeign from "../assets/services/creative.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex justify-center items-center w-full h-64">
          <img
            src={webDesignImg}
            alt="web design"
            className="h-full rounded-2xl"
          />
        </div>
        <h2 className="my-10 text-center text-2xl">Web Design</h2>
        <p className="text-center px-4">
          Enhance your online presence with our expert web design services.
          Using HTML, CSS, JavaScript, React, and Ant Design, we create custom,
          responsive websites that reflect your brand and engage users. From SEO
          optimization to ongoing support, we deliver exceptional digital
          experiences.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex justify-center items-center w-full h-64">
          <img
            src={creativeDeign}
            alt="creative design"
            className="h-full rounded-2xl"
          />
        </div>
        <h2 className="my-10 text-center text-2xl">Creative Design</h2>
        <p className="text-center px-4">
          Elevate your brand with our creative design services. We specialize in
          crafting visually stunning and innovative designs that capture
          attention and communicate your brand's message effectively. From logo
          creation to comprehensive brand identities, our designs are tailored
          to reflect your unique style and vision, ensuring a memorable impact.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex justify-center items-center w-full h-64">
          <img
            src={webDevImg}
            alt="web development"
            className="h-full rounded-2xl"
          />
        </div>
        <h2 className="my-10 text-center text-2xl">Web Development</h2>
        <p className="text-center px-4">
          Enhance your online presence with our professional web development
          services. Using HTML, CSS, JavaScript, React, and Ant Design, we build
          custom, responsive websites that perform flawlessly across all
          devices. Our development services include SEO optimization, ensuring
          your site ranks well on search engines, and ongoing support to keep
          your website running smoothly.
        </p>
      </div>
    </Carousel>
  );
};

export default TestimonialSlider;
