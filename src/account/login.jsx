import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import TextboxFor from "../utils/textboxfor";
import Button from "../utils/button";
import { useState } from "react";
import Loading from "../utils/loading";

export default function Login({ onLoginComplete }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  async function handleSubmit(values) {
    //john P4ssW0rd!#
    setError();

    var config = {
      method: "post",
      url: "https://three-points.herokuapp.com/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(values),
    };
    setLoading(true);
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setLoading(false);
        onLoginComplete();
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  }
  return (
    <div className="container mt-3">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => await handleSubmit(values)}
      >
        {(formikProps) => (
          <Form>
            {error ? (
              <div className="alert alert-danger" role="alert">
                Invalid email or password
              </div>
            ) : null}
            <TextboxFor label="Email" name="username" />
            <TextboxFor label="Password" name="password" type="password" />
            <div className="mb-3 d-grid">
              <Button disabled={formikProps.isSubmitting} type="submit">
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      {loading ? <Loading /> : null}
    </div>
  );
}
