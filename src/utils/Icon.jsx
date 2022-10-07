import SvgIcon from "@mui/material/SvgIcon";

export default function Icon({ name, styles }) {
  return <SvgIcon component={name} style={styles} inheritViewBox />;
}
