import { getUser } from "../service/data-service";
import ProfileComponent from "../utils/profile";
import { useContext, useEffect, useState } from "react";
import authContext from "../authContext";
import Loading from "../utils/loading";
import jwt_decode from "jwt-decode";

export default function Profile() {
  const { currentUser } = useContext(authContext);
  const [profile, setProfile] = useState();
  useEffect(() => {
    const userDecoded = jwt_decode(currentUser.token);
    getUser(userDecoded.sub).then((data) => {
      setProfile(data);
    });
  }, []);
  return (
    <>
      {profile ? (
        <ProfileComponent
          avatar={profile.avatar}
          username={`@${profile.username}`}
          bio={profile.bio}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
