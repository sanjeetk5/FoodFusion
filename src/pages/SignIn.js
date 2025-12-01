// SignInPage.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  FormControlLabel,
  Checkbox,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignIn = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left,#ffe0e0 0,transparent 45%), radial-gradient(circle at bottom right,#ffe0b2 0,transparent 55%), #fff7f7",
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {/* LEFT: small creative panel (only on md+) */}
          <Grid
            item
            md={4}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: 4,
                overflow: "hidden",
                p: 3,
                background:
                  "linear-gradient(135deg, rgba(255,77,77,0.95), rgba(255,183,77,0.95))",
                color: "#fff",
                boxShadow: 6,
              }}
            >
              {/* Blur shapes */}
              <Box
                sx={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)",
                  top: -30,
                  right: -30,
                  filter: "blur(1px)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.14)",
                  bottom: -20,
                  left: -10,
                  filter: "blur(1px)",
                }}
              />

              <Stack
                spacing={3}
                sx={{ position: "relative", zIndex: 1, height: "100%" }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                      background: "rgba(255,255,255,0.9)",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    FoodFusion
                  </Typography>
                </Stack>

                <Box sx={{ mt: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, lineHeight: 1.1, mb: 1 }}
                  >
                    Welcome back, foodie 👋
                  </Typography>
                  <Typography variant="body2" sx={{ maxWidth: 260 }}>
                    Sign in to track your orders, reorder favourites and
                    discover new places to eat.
                  </Typography>
                </Box>

                {/* Small info cards */}
                <Stack spacing={1.5} sx={{ mt: 2 }}>
                  <Paper
                    sx={{
                      p: 1.5,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      background: "rgba(255,255,255,0.16)",
                      backdropFilter: "blur(10px)",
                    }}
                    elevation={0}
                  >
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "#ff4d4d",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      🔔
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">
                        Live order updates
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        Track your food in real-time.
                      </Typography>
                    </Box>
                  </Paper>

                  <Paper
                    sx={{
                      p: 1.5,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      background: "rgba(255,255,255,0.16)",
                      backdropFilter: "blur(10px)",
                    }}
                    elevation={0}
                  >
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "#ff8a65",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      ❤️
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">
                        Save your favourites
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        Quickly access your go-to dishes.
                      </Typography>
                    </Box>
                  </Paper>
                </Stack>

                <Box sx={{ flexGrow: 1 }} />

                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.85)" }}
                >
                  “People who love to eat are always the best people.”
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT: larger sign-in form */}
          <Grid item xs={12} md={8}>
            <Box
              component={Paper}
              elevation={6}
              sx={{
                borderRadius: 4,
                p: { xs: 3, sm: 4 },
                maxWidth: 520,
                mx: "auto",
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Stack spacing={2.5}>
                <Box textAlign={isMobile ? "center" : "left"}>
                  <Avatar
                    sx={{
                      width: 52,
                      height: 52,
                      mb: 1,
                      mx: isMobile ? "auto" : 0,
                      background:
                        "linear-gradient(135deg, #ff4d4d 0%, #ffb74d 100%)",
                    }}
                  >
                    <LockOutlinedIcon sx={{ fontSize: 26 }} />
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 0.5 }}
                  >
                    Sign in to your account
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Welcome back! Enter your details to continue.
                  </Typography>
                </Box>

                {/* Social login buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                >
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ borderRadius: 999 }}
                  >
                    Continue with Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    sx={{ borderRadius: 999 }}
                  >
                    Facebook
                  </Button>
                </Stack>

                <Divider>or sign in with email</Divider>

                {/* Form fields – UI only */}
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    label="Email address"
                    type="email"
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                  />

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={
                        <Typography variant="body2">
                          Remember me
                        </Typography>
                      }
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "primary.main", cursor: "pointer" }}
                    >
                      Forgot password?
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 999,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: 15,
                    background:
                      "linear-gradient(135deg, #ff4d4d 0%, #ff8a65 100%)",
                    boxShadow: "0 10px 25px rgba(255,77,77,0.4)",
                  }}
                >
                  Sign in
                </Button>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  Don’t have an account?{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Sign up
                  </Box>
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="center"
                >
                  We’ll use your account to keep your orders, favourites
                  and delivery details in sync.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignIn;
