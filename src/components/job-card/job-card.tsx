import { CardType } from "../../types";
import JobLabel from "../job-label/job-label";
import KeywordTag from "../keywords/keywords-tags";
import Logo from "./company-logo";

import styles from "./job-card.module.css";

type JobCardPropTypes = {
  cardItem: CardType;
  selectKeyword: React.Dispatch<React.SetStateAction<string[]>>;
};

const relativeTimeHelper = (date: Date): string => {
  const round = (num: number) => {
    return Math.round(Math.floor(num));
  };

  const today = new Date();
  let diff = Math.floor((today.getTime() - date.getTime()) / 86400000);
  if (diff === 0) {
    return "Today";
  }

  if (diff < 7) {
    return round(diff) + "d ago";
  }
  diff = diff / 7;
  if (diff < 2) {
    return round(diff) + " week ago";
  }

  if (diff <= 4) return round(diff) + " weeks ago";

  return "too old";
};

const JobCard = ({ cardItem, selectKeyword }: JobCardPropTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo logoName={cardItem.company.logo} />
        </div>
        <div className={styles.desc}>
          <div className={styles.details}>
            <span className={styles.cname}>{cardItem?.company?.name}</span>
            {cardItem?.jobTags.map((tag, idx) => (
              <JobLabel key={"joblabel_" + idx} label={tag} />
            ))}
          </div>
          <div className={styles.heading}>{cardItem.title}</div>
          <div className={styles.subtitle}>
            <span className={styles.subitem}>
              {relativeTimeHelper(cardItem?.timePosted)}
            </span>
            <span className={styles.subitem}>&#8226;</span>
            <span className={styles.subitem}>{cardItem?.jobType}</span>
            <span className={styles.subitem}>&#8226;</span>
            <span className={styles.subitem}>{cardItem?.location}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.skills}>
          {cardItem.keywords.map((keyword, idx) => (
            <button
              key={"carditem_" + idx}
              className={styles.selectbtn}
              onClick={() =>
                selectKeyword((prev) =>
                  prev.includes(keyword) ? prev : [...prev, keyword]
                )
              }
            >
              <KeywordTag name={keyword} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
