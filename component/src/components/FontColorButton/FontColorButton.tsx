import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import { Box, Tooltip } from "@mui/material";
import ColorPalettes from "../ColorPalettes/ColorPalettes";
import { Color } from "../../utils/constant";

const FontColorButton: React.FC<{
  textColor: string | null | undefined;
  style: any;
}> = ({ textColor, style }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "font-color-popover" : undefined;

  return (
    <Box>
      <Tooltip title='Text color'>
        <IconButton
          size='small'
          aria-describedby={id}
          sx={Object.assign({ mr: 1, borderRadius: 0 }, style)}
          onClick={handleClick}>
          <FormatColorTextIcon style={{ fontSize: "large" }} />
        </IconButton>
      </Tooltip>
      <ColorPalettes
        anchorEl={anchorEl}
        handleClose={handleClose}
        definedColor={textColor}
        feature={Color.COLOR}
      />
    </Box>
  );
};

export default FontColorButton;
