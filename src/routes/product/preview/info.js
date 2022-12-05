import { useDispatch, useSelector } from "react-redux";

import { addReview } from "../../../firebase";
import { useFireAuthRedux } from "../../../hooks";
import { updateProduct, openAlert } from "../../../store/actions";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import Tabs from "../../../components/tabs";

function Info({ product, information, reviews }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authedUser);
  const addReviewHook = useFireAuthRedux(addReview, updateProduct);

  const handleAddReview = (e) => {
    e.preventDefault();

    let body = e.target.elements.review.value;
    if (user && body) {
      const review = { user, body };
      const prod = { ...product, reviews: [...reviews, review] };
      addReviewHook([prod], [prod], {
        cb: () => (e.target.elements.review.value = ""),
        getMsg: () => "Review added successfully",
      });
    } else {
      dispatch(openAlert("warning", "You should sign in to review a product"));
    }
  };

  return (
    <Tabs
      tabLabels={[
        "Information",
        reviews.length ? `Reviews (${reviews.length})` : "Reviews",
      ]}
      tabPanels={[
        <InformationPanel arr={information} />,
        <ReviewsPanel reviews={reviews} handleAddReview={handleAddReview} />,
      ]}
    />
  );
}

export default Info;

const InformationPanel = ({ arr }) => (
  <Box component="ul">
    {arr.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </Box>
);
const ReviewsPanel = ({ reviews, handleAddReview }) => (
  <Box>
    <Box component="ul" sx={{ p: 0, listStyle: "none" }}>
      {reviews.length ? (
        reviews.map(({ user, body }, i) => (
          <Card key={i} sx={{ mb: 1 }}>
            <CardContent
              sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
            >
              <Avatar size="small" src={user.photoURL} alt={user.displayName} />
              <Box>
                <Typography
                  component="strong"
                  sx={{ display: "block", fontWeight: 700 }}
                >
                  {user.displayName}
                </Typography>
                <Typography
                  color="grey.400"
                  component="span"
                  sx={{ display: "block", fontSize: 14 }}
                >
                  {user.email}
                </Typography>
                <Typography>{body}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            color: ({ palette }) => palette.text.secondary,
          }}
        >
          No reviews available
        </Typography>
      )}
    </Box>

    <Box
      component="form"
      onSubmit={handleAddReview}
      sx={{ display: "grid", rowGap: 1 }}
    >
      <TextField
        multiline
        fullWidth
        rows={4}
        name="review"
        placeholder="Enter your review"
        aria-label="Enter your review"
      />
      <Button
        disableElevation
        variant="contained"
        type="submit"
        sx={{ justifySelf: "end" }}
      >
        Add review
      </Button>
    </Box>
  </Box>
);
