import { useContext, useState } from "react";
import { login } from "../service/data-service";
import Auth from "../utils/auth";
import authContext from "../authContext";

export default function Login() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(authContext);
  function handleSubmit(values) {
    //john P4ssW0rd!#
    setError();
    login(values.username, values.password)
      .then((data) => {
        setLoading(false);
        setUser({
          username: values.username,
          token: data.token,
        });
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }

  return (
    <Auth
      onLoginComplete={async (values) => handleSubmit(values)}
      error={error}
      loading={loading}
    />
  );
}
