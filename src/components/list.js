import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "./Loading";

const List = ({ list, loading }) => {
  if (loading || !list.length) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 3,
      }}
    >
      {list.map((item) => (
        <Card
          key={item.id}
          sx={{
            borderRadius: 4,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            border: "none",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.25s, box-shadow 0.25s",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 12px 36px rgba(0,0,0,0.14)",
            },
            "&:hover .card-img": {
              transform: "scale(1.06)",
            },
          }}
        >
          {/* IMAGE */}
          <Box sx={{ height: 200, overflow: "hidden", position: "relative" }}>
            <Box
              component="img"
              className="card-img"
              src={
                item.image
                  ? `http://localhost:8080/uploads/${item.image}`
                  : "./images/default.png"
              }
              alt={item.name}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
          </Box>

          {/* CONTENT */}
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: 3,
            }}
          >
            <Typography variant="h6" fontWeight={700} noWrap>
              {item.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </Typography>

            <Typography variant="h6" fontWeight={600} sx={{ mt: "auto", pt: 1 }}>
              {item.price} ₽
            </Typography>

            <Button
              component={Link}
              to={`/eee/${item.id}`}
              variant="contained"
              disableElevation
              sx={{
                mt: 1,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
                background: "#1a2e3b",
                "&:hover": { background: "#0d1c25" },
              }}
            >
              Подробнее
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default List;