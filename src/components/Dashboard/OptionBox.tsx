import {Box, Typography} from "@mui/material";

interface OptionBoxProps {
  onClick: () => void;
  label: string;
  image: string;
}

export const OptionBox = ({label, image, onClick}: OptionBoxProps) => {
  return <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "4px",
      padding: "16px",
      width: "180px",
      height: "180px",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <img src={image} alt={`${label} image`} style={{height: "120px", width: "120px"}}/>
    <Typography variant={"subtitle1"} fontFamily={"Sansation"} color={"#3E4551"}>
      {label}
    </Typography>
  </Box>;
}
