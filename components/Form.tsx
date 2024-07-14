import React from "react";
import { Input } from "./ui/input";
import { MailIcon, User } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form action="" className="flex flex-col gap-y-4">
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="email" id="name" placeholder="" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Input */}
      <div className="relative flex items-center">
        <Textarea id="name" placeholder="" />
        <User className="absolute top-4 right-6" size={20} />
      </div>
      <Button>Let's Talk</Button>
    </form>
  );
};

export default Form;
