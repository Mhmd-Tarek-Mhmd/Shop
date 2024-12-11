import { useSelector } from "react-redux";

import Container from "@mui/material/Container";

import OrdersTable from "./ordersTable";
import InformationCard from "./informationCard";

function Profile() {
  const user = useSelector((state) => state.authedUser);

  return (
    <Container maxWidth="md">
      <InformationCard user={user} />
      <OrdersTable />
    </Container>
  );
}

export default Profile;
