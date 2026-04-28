import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MedicationIcon from "@mui/icons-material/Medication";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const navLinks = [
  { label: "Товары", to: "/eee" },
  { label: "Добавить", to: "/ttt" },
  { label: "Контакты", to: "/contacts" },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function AppNavbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "calc(100% + 60px)",
        ml: "-30px",
        mr: "-30px",
        px: 2,
        pt: 1.5,
        pb: 0.5,
        boxSizing: "border-box",
      }}
    >
      <AppBar
        position="static"
        elevation={4}
        sx={{
          borderRadius: "50px",
          background: "linear-gradient(90deg, #b8cad2 0%, #dde8ec 100%)",
          color: "#1a1a1a",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "64px !important",
            px: {
              xs: "16px !important",
              sm: "24px !important",
              md: "40px !important",
              lg: "64px !important",
            },
          }}
        >
          {/* ── LOGO + TITLE ── */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              textDecoration: "none",
              color: "inherit",
              flexShrink: 0,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.04)" },
              "&:active": { opacity: 0.7 },
            }}
          >
            <MedicationIcon sx={{ fontSize: 36, color: "#3a7ca5" }} />
            <Typography
              variant="h6"
              fontWeight={700}
              fontSize="1.35rem"
              letterSpacing={0.5}
              sx={{ color: "#1a2e3b" }}
            >
              Аптека
            </Typography>
          </Box>

          {/* ── NAV LINKS (desktop) ── */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", ml: 4, gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    color: "#2b3e4d",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    borderRadius: "30px",
                    px: 2.2,
                    textTransform: "none",
                    transition: "background 0.2s, color 0.2s",
                    "&:hover": {
                      background: "rgba(0,0,0,0.07)",
                      color: "#0a0a0a",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* ── SPACER ── */}
          <Box sx={{ flexGrow: 1 }} />

          {/* ── CART + LOGIN (desktop) ── */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton aria-label="cart" sx={{ color: "#1a2e3b" }}>
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              <Button
                component={Link}
                to="/login"
                variant="contained"
                size="small"
                sx={{
                  background: "#1a2e3b",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 3,
                  py: 0.9,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                  "&:hover": {
                    background: "#0d1c25",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Войти
              </Button>
            </Box>
          )}

          {/* ── HAMBURGER (mobile) ── */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton aria-label="cart" sx={{ color: "#1a2e3b" }}>
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "#1a2e3b" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* ── MOBILE DRAWER ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            pt: 2,
            background: "#edf2f5",
          },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 2 }}>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              fullWidth
              onClick={() => setDrawerOpen(false)}
              sx={{
                background: "#1a2e3b",
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { background: "#0d1c25" },
              }}
            >
              Войти
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}