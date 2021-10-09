import styles from "./keywords-tags.module.css";

type KeywordTagPropTypes = {
  name: string;
};

const KeywordTag = ({ name }: KeywordTagPropTypes): JSX.Element => {
  return (
    <span className={styles.tagcontainer}>
      <span className={styles.text}>{name}</span>
    </span>
  );
};

export default KeywordTag;
