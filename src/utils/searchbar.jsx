export default function SearchBar({ value, onSearch }) {
  return (
    <div className="form-group" style={{ margin: "15px 0" }}>
      <input
        type="email"
        className="form-control"
        id="text-search"
        aria-describedby="emailHelp"
        placeholder="Search"
        defaultValue={value}
        onKeyUp={onSearch}
      />
    </div>
  );
}
