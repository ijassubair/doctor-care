import { styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    marginTop: "10px",
    backgroundColor: "#198754",
  },
  "&.notistack-MuiContent-error": {
    marginTop: "10px",
    backgroundColor: "#970C0C",
  },
}));

export default StyledMaterialDesignContent;
