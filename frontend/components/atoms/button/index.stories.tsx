import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";
import { Typography } from "@mui/material";
import React from "react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    onMouseEnter: { action: "Mouse Enter" },
    onMouseLeave: { action: "Mouse Leave" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Discover = Template.bind({});
Discover.args = {
  style: {
    width: "103px",
    height: "38px",
    // top: '193px',
    // left: '48px',
    borderRadius: "4px",
    padding: "8px 24px 8px 24px",
    gap: "10px",
    backgroundColor: "#FF725E",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  children: (
    <Typography
      variant="body2"
      sx={{
        height: "22px",
        top: "8px",
        left: "24px",
        color: "#FFFFFF",
        fontWeight: "700",
        textTransform: "none",
      }}
    >
      Discover
    </Typography>
  ),
};

export const StartReading = Template.bind({});
StartReading.args = {
  style: {
    width: "165px",
    height: "38px",
    // top: '387px',
    // left: '401px',
    borderRadius: "4px",
    padding: "8px 24px 8px 24px",
    gap: "10px",
    backgroundColor: "#FF725E",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  children: (
    <Typography
      variant="body2"
      sx={{
        // height: '22px',
        top: "8px",
        left: "24px",
        color: "#FFFFFF",
        fontWeight: "700",
        textTransform: "none",
      }}
    >
      Start Reading
    </Typography>
  ),
};

export const StartYourJourney = Template.bind({});
StartYourJourney.args = {
  style: {
    width: "215px",
    height: "46px",
    // top: '548px',
    // left: '601px',
    borderRadius: "4px",
    padding: "12px 24px 12px 24px",
    gap: "10px",
    backgroundColor: "#FF725E",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  children: (
    <Typography
      variant="body2"
      sx={{
        // width: "117px",
        // height: '22px',
        top: "12px",
        left: "24px",
        color: "#FFFFFF",
        fontWeight: "700",
        textTransform: "none",
      }}
    >
      Start Your Journey
    </Typography>
  ),
};
