import MuiLink from "@mui/material/Link";

const Link = ({ children, ...props }) => (
  <MuiLink {...props}>{children}</MuiLink>
);

export default Link;
