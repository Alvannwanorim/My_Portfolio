import React from "react";
import {
  Users2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImage from "./DevImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";

const infoData = [
  {
    icon: <Users2 size={20} />,
    text: "Alvan Igwe",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+2348137391422",
  },
  {
    icon: <MailIcon size={20} />,
    text: "alvanigwe@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 27 May, 1993",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors degree in Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Lagos, Nigeria",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        school: "Udacity",
        degree: "Cloud Engineer Nanodegree",
        years: "2016 - 2021",
      },
      {
        school: "University of Lagos",
        degree: "Bachelor in Science",
        years: "2016 - 2021",
      },
      {
        school: "Yaba College of Technology",
        degree: "National Diploma",
        years: "2013 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Babban Gona",
        roles: "Senior Full Stack Developer",
        years: "2021 - 2024",
      },
      {
        company: "Aibanc",
        roles: "Backend Developer",
        years: "2021 - 2023",
      },
      {
        company: "Foodgital",
        roles: "Backend Developer",
        years: "2020 - 2021",
      },
      {
        company: "CHSG",
        roles: "Full Stack Developer",
        years: "2018 - 2020",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "JavaScript, TypeScript",
      },
      {
        name: "Backend-end Development",
      },
      {
        name: "Golang, Rust, Python",
      },
      {
        name: "Solidity, Blockchain",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: "/about/vscode.svg",
      },
      {
        imagePath: "/about/figma.svg",
      },
      {
        imagePath: "/about/notion.svg",
      },
      {
        imagePath: "/about/wordpress.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          About me
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        {/* image */}
        <div className="hidden xl:flex flex-1 relative">
          <DevImage
            containerStyles="bg-about_shape_light dar:bg-about_shape_light w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/about/developer.png"
          />
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger value="personal" className="w-[162px] xl:w-auto">
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            {/* tabs content  */}
            <div className="text-lg mt-12 xl:mt-8">
              {/* personal */}
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">
                    Unmatched Service Quality for Over 6 years
                  </h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    I specialize in crafting intuitive websites with
                    cutting-edge technology, delivering dynamic and engaging
                    user experience.
                  </p>
                  {/* Icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Languages */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language skills</div>
                    <div className="border-b border-border"></div>
                    <div>English, French, Spanish</div>
                  </div>
                </div>
              </TabsContent>
              {/* Qualifications */}
              <TabsContent value="qualifications">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    My Awesome Journey
                  </h3>
                  {/* Experience and education wrapper */}
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationsData, "experience").title}
                        </h4>
                      </div>
                      {/* lists */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationsData, "experience").data.map(
                          (
                            item: {
                              company: string;
                              roles: string;
                              years: string;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { company, roles, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>

                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {roles}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* education */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationsData, "education").title}
                        </h4>
                      </div>
                      {/* lists */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationsData, "education").data.map(
                          (
                            item: {
                              school: string;
                              degree: string;
                              years: string;
                            },
                            index: React.Key | null | undefined
                          ) => {
                            const { school, degree, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>

                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {school}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {degree}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8">What I use Everyday</h3>
                  {/* skills */}
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* skill list */}
                    <div>
                      {getData(skillsData, "skills").data.map(
                        (
                          item: { name: string },
                          index: React.Key | null | undefined
                        ) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  {/* tool */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                      Tools
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* tool list */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillsData, "tools").data.map(
                        (
                          item: { imagePath: string },
                          index: React.Key | null | undefined
                        ) => {
                          const { imagePath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imagePath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default About;
