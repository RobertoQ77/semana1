import { Typography } from "@mui/material";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FlutterDashRoundedIcon from "@mui/icons-material/FlutterDashRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const TypographyIconBio = ({ text, icon, mt = 2 }) => {
  const icons = {
    company: <BusinessRoundedIcon />,
    email: <EmailRoundedIcon />,
    blog: <LanguageRoundedIcon />,
    social: <FlutterDashRoundedIcon />,
    people: <PeopleAltOutlinedIcon />,
    location: <FmdGoodRoundedIcon />,
  };

  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      mt={mt}
      variant="body2"
    >
      {icons[icon]}
      &nbsp;&nbsp; {text}
    </Typography>
  );
};

export default TypographyIconBio;