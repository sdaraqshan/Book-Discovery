import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Image from "./index";
import logo from "./../../../../public/assets/images/logo.png";
import avatar1 from "./../../../../public/assets/images/avatars/avatar_small_1.png";
import avatar2 from "./../../../../public/assets/images/avatars/avatar_medium_1.png";
import avatar3 from "./../../../../public/assets/images/avatars/avatar_large_1.png";
import book1 from "./../../../../public/assets/images/books/book_small_1.png";
import book2 from "./../../../../public/assets/images/books/book_medium_1.png";
import book3 from "./../../../../public/assets/images/books/book_large_1.png";
import book4 from "./../../../../public/assets/images/books/book_desc.png";
import book5 from "./../../../../public/assets/images/books/book_wide_1.png";
import topic from "./../../../../public/assets/images/topics/topic_large_1.png";

export default {
  title: "Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  src: logo,
  style: {
    width: "135px",
    height: "27.8px",
    background: "linear-gradient(90.14deg, #8C52C6 0.95%, #683799 100%)",
  },
};

export const Avatar1 = Template.bind({});
Avatar1.args = {
  src: avatar1,
  style: {
    width: "32px",
    height: "32px",
    borderRadius: "100%",
  },
};

export const Avatar2 = Template.bind({});
Avatar2.args = {
  src: avatar2,
  style: {
    width: "60px",
    height: "60px",
    borderRadius: "100%",
  },
};

export const Avatar3 = Template.bind({});
Avatar3.args = {
  src: avatar3,
  style: {
    width: "80px",
    height: "80px",
    borderRadius: "100%",
  },
};

export const Book1 = Template.bind({});
Book1.args = {
  src: book1,
  style: {
    width: "91px",
    height: "118px",
    borderRadius: "4px",
  },
};

export const Book2 = Template.bind({});
Book2.args = {
  src: book2,
  style: {
    width: "151px",
    height: "165px",
    borderRadius: "8px",
  },
};

export const Book3 = Template.bind({});
Book3.args = {
  src: book3,
  style: {
    width: "184px",
    height: "239px",
    borderRadius: "8px",
  },
};

export const Book4 = Template.bind({});
Book4.args = {
  src: book4,
  style: {
    width: "276px",
    height: "301px",
    borderRadius: "8px",
  },
};

export const Book5 = Template.bind({});
Book5.args = {
  src: book5,
  style: {
    width: "188px",
    height: "88px",
    borderRadius: "4px",
  },
};

export const Topic = Template.bind({});
Topic.args = {
  src: topic,
  style: {
    width: "178px",
    height: "134px",
    borderRadius: "8px",
  },
};
