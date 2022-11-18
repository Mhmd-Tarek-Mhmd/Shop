import { useDispatch } from "react-redux";

import { updateAvatar } from "../../firebase";
import { update, openAlert } from "../../store/actions";
import { defaultErrorMessages } from "../auth/controller";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { visuallyHidden } from "@mui/utils";
import TextField from "@mui/material/TextField";

function InformationCard({ user }) {
  return (
    <Card
      component="article"
      sx={{ mt: 15, mb: 5, pt: 17, position: "relative", overflow: "unset" }}
    >
      <Box
        sx={{
          rowGap: 2,
          top: -75,
          left: "50%",
          display: "grid",
          position: "absolute",
          justifyItems: "center",
          transform: "translateX(-50%)",
        }}
      >
        <Avatar
          src={user.photoURL}
          alt={user.displayName}
          sx={{ width: 150, height: 150 }}
        />
        <FileInput />
      </Box>

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

const FileInput = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.files.length) {
      updateAvatar(e.target.files[0], (photoURL) => {
        dispatch(update({ photoURL }));
        dispatch(openAlert("success", "Avatar changed"));
      }).catch((error) => {
        console.log(error);
        const msg = defaultErrorMessages(error.code);
        dispatch(openAlert("error", msg));
      });
    }
  };

  return (
    <Button component="label" variant="contained">
      Change your avatar
      <TextField
        type="file"
        sx={visuallyHidden}
        onChange={handleChange}
        inputProps={{ accept: "image/*" }}
      />
    </Button>
  );
};
