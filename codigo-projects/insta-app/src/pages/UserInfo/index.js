import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUser } from "../../services";
import { Container, Grid, Typography } from "@mui/material";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);

  const { username } = useParams();

  const fetchUserData = async () => {
    const { success, data } = await searchUser(username);

    if (success) {
      setUserData(data);
    }

    console.log(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Container maxWidth="md">
      {userData && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              crossOrigin="anonymous"
              src={userData.profile_pic_url_hd}
              width={200}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">{userData.full_name}</Typography>
            <Typography variant="body1">
              {userData.edge_owner_to_timeline_media.count} Posts
            </Typography>
            <Typography variant="body1">
              {userData.edge_followed_by.count} Followers
            </Typography>
            <Typography variant="body1">
              {userData.edge_follow.count} Following
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default UserInfo;