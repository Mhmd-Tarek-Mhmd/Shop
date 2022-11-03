import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";

function InformationCard({ user }) {
  return (
    <Card
      component="article"
      sx={{ mt: 15, mb: 5, pt: 13, position: "relative", overflow: "unset" }}
    >
      <Avatar
        src={user.photoURL}
        alt={user.displayName}
        sx={{
          width: 150,
          height: 150,
          position: "absolute",
          top: -75,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Box component="ul">
        <Item title="Name" value={user.displayName} />
        <Item title="Email" value={user.email} />
      </Box>

      <Link
        href="/settings"
        sx={{ display: "block", textAlign: "center", pb: 2 }}
      >
        Update your personal information
      </Link>
    </Card>
  );
}

export default InformationCard;

const Item = ({ title, value }) => (
  <li>
    <span>{title}: </span>
    <Box component="span" sx={{ fontWeight: 300, fontSize: 14 }}>
      {value || "unset"}
    </Box>
  </li>
);
