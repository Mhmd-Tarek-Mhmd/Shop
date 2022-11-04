import { useSelector } from "react-redux";

import { useDocumentTitle } from "../../hooks";

import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import OrdersTable from "./ordersTable";
import Section from "../../components/section";
import InformationCard from "./informationCard";

function Profile() {
  const user = useSelector((state) => state.authedUser);

  useDocumentTitle(user && user.displayName ? user.displayName : "Profile");

  return (
    <Section title="Profile">
      {user ? (
        <Container maxWidth="md">
          <InformationCard user={user} />
          <OrdersTable />
        </Container>
      ) : (
        <Typography sx={{ textAlign: "center" }}>
          You should <Link href="/auth/sign-in">sign in</Link> to see content of
          this page
        </Typography>
      )}
    </Section>
  );
}

export default Profile;
