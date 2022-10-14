import { Field } from "formik";
export default function TextboxFor(props) {
  return (
    <div className="mb-3">
      {props.label ? (
        <label className="form-label" htmlFor={props.name}>
          {props.label}
        </label>
      ) : null}
      <Field
        type={props.type}
        name={props.name}
        id={props.id}
        className={props.className}
        placeholder={props.placeHolder}
      />
    </div>
  );
}

TextboxFor.defaultProps = {
  type: "text",
  className: "form-control",
};
