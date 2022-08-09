import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUser, getRepos } from "../../services";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { TypographyIconBio } from "../../components";

const User = () => {
  const { username } = useParams();

  const [userDetail, setUserDetail] = useState(null);

  const [repos, setRepos] = useState([]);

  const fetchUser = async () => {
    const data = await searchUser(username);
    setUserDetail(data);
    console.log(data);
  };

  const fetchRepos = async () => {
    const data = await getRepos(username);
    setRepos(data);
    console.log("repos", data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Container maxWidth="md">
      {userDetail && (
        <Box mt={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box mb={1}>
                <img
                  style={{
                    borderRadius: "50%",
                  }}
                  width={200}
                  src={userDetail.avatar_url}
                  alt={userDetail.login}
                />
              </Box>
              <Typography mb={1} variant="h6">
                {userDetail.name}
              </Typography>
              <Typography mb={3} variant="h6" fontWeight="350" color="#BBBBBB">
                {userDetail.login}
              </Typography>
              <Typography mb={2} variant="body1">
                {userDetail.bio}
              </Typography>
              <Button variant="contained" fullWidth>
                Edit profile
              </Button>
              <TypographyIconBio
                icon="people"
                text={`${userDetail.followers} followers . ${userDetail.following} following`}
              />
              <TypographyIconBio icon="company" text={userDetail.company} />
              <TypographyIconBio icon="location" text={userDetail.location} />

              {userDetail.email && (
                <TypographyIconBio icon="email" text={userDetail.email} />
              )}
              <TypographyIconBio icon="blog" text={userDetail.blog} />
              <TypographyIconBio
                icon="social"
                text={userDetail.twitter_username}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">Repositories</Typography>
              <Box>
                {repos.length > 0 &&
                  repos.map((repo, index) => (
                    <Box key={index} mt={3}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" fontWeight="800">
                            {repo.name}
                          </Typography>
                          <Typography variant="body1">
                            {repo.language}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default User;