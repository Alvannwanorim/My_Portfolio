"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    images: "/work/3.png",
    category: "react js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/4.png",
    category: "react js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/2.png",
    category: "react js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/1.png",
    category: "react js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/4.png",
    category: "next js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/3.png",
    category: "next js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/2.png",
    category: "next js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/1.png",
    category: "next js",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/1.png",
    category: "fullstack",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/3.png",
    category: "fullstack",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
  {
    images: "/work/2.png",
    category: "fullstack",
    name: "Nexa website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Cumque, quis?",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [initialCategory, setInitialCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return initialCategory === "all projects"
      ? project
      : project.category === initialCategory;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={initialCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setInitialCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:m-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={initialCategory} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
