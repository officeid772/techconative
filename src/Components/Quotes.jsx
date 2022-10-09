import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function Quotes() {
  const [qContent, setQContent] = useState();
  const [qAuthor, setQAuthor] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  async function updateQuote() {
    setLoading(true);
    // Fetch a random quote from the Quotable API
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        setLoading(false);
        setQContent(data.content);
        setQAuthor(data.author);
      } else {
        setLoading(false);
        setErr("An error occured");
      }
    } catch {
      setLoading(false);
      setErr("An error occured");
    }
  }
  useEffect(() => {
    updateQuote();
  }, []);

  const card = (
    <>
      {err ? (
        <Typography>{err}</Typography>
      ) : (
        <>
          <CardContent>
            <Typography color="text.secondary">Quote of the Day</Typography>
            <Typography variant="h5">{qAuthor}</Typography>
            <Typography variant="body">{qContent}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button variant="contained" onClick={() => updateQuote()}>
              Next Quote
            </Button>
          </CardActions>
        </>
      )}
    </>
  );

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="quote-container">
          <Box className="quote-box">
            <Card variant="outlined">{card}</Card>
          </Box>
        </div>
      )}
    </>
  );
}

export default Quotes;
