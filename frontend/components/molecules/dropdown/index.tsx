import * as React from "react";
import Button from "@mui/material/Button";
import DropdownIcon from "@mui/icons-material/ArrowDropDown";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import theme from "../../../themes/theme";

export default function DropDown() {
  return (
    <Stack direction="row" spacing={2} data-testid='dropdown'>
      <Button
        variant="outlined"
        endIcon={
          <DropdownIcon
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              fontSize: "14px",
            }}
          />
        }
        sx={{
          border: `1px solid ${theme.palette.greyColors.main100}`,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: `${theme.palette.textColor.mediumEmphasis}`,
            textTransform: "none",
            fontSize: "14px",
          }}
        >
          Categories
        </Typography>
      </Button>
      <Button
        variant="outlined"
        endIcon={
          <DropdownIcon
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              fontSize: "14px",
            }}
          />
        }
        sx={{
          border: `1px solid ${theme.palette.greyColors.main100}`,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: `${theme.palette.textColor.mediumEmphasis}`,
            textTransform: "none",
            fontSize: "14px",
          }}
        >
          Sort by
        </Typography>
      </Button>
    </Stack>
  );
}

