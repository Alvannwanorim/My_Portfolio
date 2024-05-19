"use client";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda dolore ab quisquam, enim fugit ratione. Ipsum perspiciatis amet laudantium.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Richard Thompson",
    job: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda dolore ab quisquam, enim fugit ratione. Ipsum perspiciatis amet laudantium.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Richard Thompson",
    job: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda dolore ab quisquam, enim fugit ratione. Ipsum perspiciatis amet laudantium.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Richard Thompson",
    job: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda dolore ab quisquam, enim fugit ratione. Ipsum perspiciatis amet laudantium.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Richard Thompson",
    job: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda dolore ab quisquam, enim fugit ratione. Ipsum perspiciatis amet laudantium.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Richard Thompson",
    job: "Software Engineer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda dolore ab quisquam, enim fugit ratione. Ipsum perspiciatis amet laudantium.",
  },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dar:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader>
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        alt=""
                        width={70}
                        height={70}
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.job}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
