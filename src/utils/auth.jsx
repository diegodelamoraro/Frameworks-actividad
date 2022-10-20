import { Form, Formik } from "formik";
import TextboxFor from "./textboxfor";
import Button from "./button";
import Loading from "./loading";

export default function Auth({ onLoginComplete, error, loading }) {
  return (
    <div className="container mt-3">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => await onLoginComplete(values)}
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
