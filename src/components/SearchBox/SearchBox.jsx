import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <label className={s.labelWrap}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
