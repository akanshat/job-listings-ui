import JobCard from "../../components/job-card/job-card";

import { CardType } from "../../types";

import styles from "./card-list.module.css";

type CardListPropTypes = {
  list: CardType[];
  selectKeyword: React.Dispatch<React.SetStateAction<string[]>>;
};

const CardList = ({ list, selectKeyword }: CardListPropTypes): JSX.Element => {
  return (
    <div className={styles.container}>
      {list.map((cardItem) => (
        <JobCard
          key={cardItem.id}
          cardItem={cardItem}
          selectKeyword={selectKeyword}
        />
      ))}
    </div>
  );
};

export default CardList;
