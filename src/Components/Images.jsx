import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Loader from "./Loader";
function Images() {
  const [image, setImage] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  async function updateImage() {
    setLoading(true);
    // Fetch a random image from the API
    try {
      const response = await fetch("https://picsum.photos/200/300?random");
      if (response.ok) {
        // Update DOM elements
        setLoading(false);
        setImage(response.url);
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
    updateImage();
  }, []);

  const card = (
    <>
      {err ? (
        <Typography>{err}</Typography>
      ) : (
        <>
          <CardContent>
            <Typography color="text.secondary">Image for the Day</Typography>
            <Typography>
              <img className="image" src={image} alt={err} />
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button variant="contained" onClick={() => updateImage()}>
              Next Image
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
        <div className="image-container">
          <Box className="image-box">
            <Card variant="outlined">{card}</Card>
          </Box>
        </div>
      )}
    </>
  );
}

export default Images;
