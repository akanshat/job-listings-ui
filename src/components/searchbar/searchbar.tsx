import React, { useState } from "react";
import styles from "./searchbar.module.css";
import KeywordSelected from "../keywords/keywords-selected";

const Searchbar = ({
  options,
  onSubmit,
}: {
  options: string[];
  onSubmit: (selected: string[]) => void;
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [filter, setFilter] = useState("");
  const [toggle, setToggle] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleClick = (item: string) => {
    setSelected((prev) => [...prev, item]);
    setToggle(false);
  };

  const handleSubmit = () => {
    onSubmit(selected);
    setToggle(true);
  };

  const handleSkillButton = (item: string) => {
    setSelected((prev) => [...prev.filter((e) => e !== item)]);
    setToggle(false);
  };

  const handleClear = () => {
    setSelected([]);
    onSubmit([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className={styles.skills}>
          {selected.map((item) => (
            <KeywordSelected
              name={item}
              handleClickAction={() => handleSkillButton(item)}
            />
          ))}
        </span>
        <input
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
          <button onClick={handleSubmit} className={styles.search}>
            Submit
          </button>
        )}
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
                  className={styles.dropbtn}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Searchbar;
