import Form from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import React from "react";

const contacts = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text  & illustrations */}
        <div className=" grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              facere?
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contract_illustration_light dark:bg-contract_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid lg:grid-cols-2 mb-24 xl:mb-32 gap-0">
          {/* info text */}
          <div className="flex flex-col gap-y-2 xl:gap-y-4 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>alvannwanorim@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon className="text-primary" size={18} />
              <div>Yaba, Lagos, Nigeria</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall className="text-primary" size={18} />
              <div>+234 813 7391 422</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default contacts;
