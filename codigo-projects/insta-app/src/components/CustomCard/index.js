import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const CustomCard = ({ user, handleClick }) => {
  return (
    <Box mt={3}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <Avatar src={user.avatar_url} />
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => handleClick(user.login)}
                variant="body1"
              >
                {user.login}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomCard;