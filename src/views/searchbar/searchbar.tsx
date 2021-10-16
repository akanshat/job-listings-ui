import React, { useState } from "react";
import styles from "./searchbar.module.css";
import KeywordSelected from "../../components/keywords/keywords-selected";
import { colors } from "../../styles/colors";

const Searchbar = ({
  options,
  onSubmit,
  selected,
  setSelected,
}: {
  options: string[];
  onSubmit: (selected: string[]) => void;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [filter, setFilter] = useState("");
  const [toggle, setToggle] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleClick = (item: string) => {
    setFilter("");
    setSelected((prev) => [...prev, item]);
    setToggle(false);
  };

  const handleSubmit = () => {
    onSubmit(selected);
    setToggle(true);
  };

  const handleSkillButton = (item: string) => {
    onSubmit(selected.filter((e) => e !== item));
    setSelected((prev) => [...prev.filter((e) => e !== item)]);
    setToggle(false);
  };

  const handleClear = () => {
    setSelected([]);
    onSubmit([]);
    setToggle(false);
  };

  const getHighlightedText = (item: string, searchString: string) => {
    const parts = item.split(new RegExp(`(${searchString})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === searchString.toLowerCase()
                ? { backgroundColor: colors.highlight }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className={styles.skills}>
          {selected.map((item) => (
            <KeywordSelected
              key={item}
              name={item}
              handleClickAction={() => handleSkillButton(item)}
            />
          ))}
        </span>
        <div className={styles.textfield}>
          <input
            className={styles.input}
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder={"Search"}
          ></input>
          {toggle ? (
            <button onClick={handleClear} className={styles.search}>
              Clear
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={selected.length === 0}
              className={styles.search}
            >
              Submit
            </button>
          )}
        </div>
        {
          <div className={styles.dropdown}>
            {options
              .filter((option) => {
                return (
                  option.toLowerCase().includes(filter) &&
                  !selected.includes(option)
                );
              })
              .map((item) => (
                <button
                  key={item}
                  className={styles.dropbtn}
                  onClick={() => handleClick(item)}
                >
                  {getHighlightedText(item, filter)}
                </button>
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Searchbar;
