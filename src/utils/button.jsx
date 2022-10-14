export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "btn btn-primary",
};
