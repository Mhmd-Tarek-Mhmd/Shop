import { useSelector, useDispatch } from "react-redux";

import { closeAlert } from "../store/actions";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Feedback() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const backdrop = useSelector((state) => state.backdrop);

  const handleAlertClose = () => dispatch(closeAlert());

  return (
    <>
      {backdrop.isOpen && (
        <Backdrop
          open
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {alert.isOpen && (
        <Snackbar open autoHideDuration={2000} onClose={handleAlertClose}>
          <Alert
            sx={{ width: "100%" }}
            severity={alert.severity}
            onClose={handleAlertClose}
          >
            {alert.msg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default Feedback;
