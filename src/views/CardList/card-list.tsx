import JobCard from "../../components/job-card/job-card";

import { CardType } from "../../types";

import styles from "./card-list.module.css";

type CardListPropTypes = {
  list: CardType[];
};

const CardList = ({ list }: CardListPropTypes): JSX.Element => {
  return (
    <div className={styles.container}>
      {list.map((cardItem) => (
        <JobCard cardItem={cardItem} />
      ))}
    </div>
  );
};

export default CardList;
