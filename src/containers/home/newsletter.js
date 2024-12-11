import { useState } from "preact/hooks";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function Newsletter() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.submitter.classList.add("Mui-disabled");
    e.submitter.setAttribute("disabled", "");
    const timer = setTimeout(() => {
      setIsSuccess(true);
    }, 1500);

    return () => clearTimeout(timer);
  };

  return (
    <Box
      role="region"
      sx={{
        display: "grid",
        px: { xs: 0.75, md: 0 },
        gridTemplateColumns: { md: "repeat(2, 1fr)" },
        gridTemplateRows: { xs: "400px", md: "600px" },
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          display: { xs: "none", md: "block" },
          background:
            "url(../../../../assets/images/newsletter.jpg) center center / cover no-repeat",
        }}
      />

      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Card
          component="article"
          aria-labelledby="newsletter-label"
          sx={{
            maxWidth: "350px",
            height: "300px",
            display: "inherit",
            placeItems: "inherit",
          }}
        >
          <CardContent>
            <Typography
              component="h3"
              variant="h6"
              id="newsletter-label"
              sx={{ textTransform: "uppercase" }}
            >
              Subscribe to our newsletter
            </Typography>
            <Typography sx={{ mt: 2, mb: 3.5 }}>
              Promotions, new products and sales. Directly to your inbox.
            </Typography>
            {!isSuccess ? (
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  Subscribe
                </Button>
              </Box>
            ) : (
              <Alert severity="success">
                You have been subscribed to our newsletter.
              </Alert>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Newsletter;
