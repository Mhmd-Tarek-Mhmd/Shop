import { useState } from "react";
import { useDocumentTitle } from "../../hooks";

import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Container from "@mui/material/Container";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import Section from "../../components/section";
import ShippingAddress from "./shippingAddress";
import PaymentDetails from "./paymentDetails";
import Review from "./review";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ShippingAddress title={steps[step]} />;
    case 1:
      return <PaymentDetails title={steps[step]} />;
    case 2:
      return <Review titles={steps} />;
    default:
      throw new Error("Unknown step");
  }
}

function Checkout() {
  useDocumentTitle("Checkout - Shop");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Section title="Checkout">
      <Container maxWidth="xl">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5, flexWrap: "wrap", gap: { xs: 1, sm: 0 } }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}

                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {activeStep !== 0 && (
                    <Button variant="outlined" onClick={handleBack}>
                      Back
                    </Button>
                  )}

                  <Button variant="contained" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </Section>
  );
}

export default Checkout;
