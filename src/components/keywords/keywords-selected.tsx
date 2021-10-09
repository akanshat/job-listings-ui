import styles from "./keywords-tags.module.css";

type KeywordSelectedPropTypes = {
  name: string;
  handleClickAction: () => void;
};

const KeywordSelected = ({
  name,
  handleClickAction,
}: KeywordSelectedPropTypes): JSX.Element => {
  return (
    <span className={styles.container}>
      <span className={styles.text}>{name}</span>
      <button onClick={() => handleClickAction()} className={styles.x}>
        &#x2715;
      </button>
    </span>
  );
};

export default KeywordSelected;
