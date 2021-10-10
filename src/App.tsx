import { useEffect, useState } from "react";

import JOB_INVENTORY from "./assets/data/inventory.json";
import COMPANY_DATA from "./assets/data/companies.json";

import CardList from "./views/CardList/card-list";
import { CardType, LabelTypes } from "./types";

import styles from "./app.module.css";
import Searchbar from "./components/searchbar/searchbar";

function App() {
  const [jobs, setJobs] = useState<CardType[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<CardType[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  let keywords = new Set(jobs.map((job) => job.keywords).flat());
  console.log(keywords);
  useEffect(() => {
    const allJobs = JOB_INVENTORY.map<CardType>((item) => {
      return {
        ...item,
        company: COMPANY_DATA[item.companyId as keyof typeof COMPANY_DATA],
        timePosted: new Date(item.timePosted),
        jobTags: item.jobTags as LabelTypes[],
      };
    });
    setJobs(allJobs);
    setFilteredJobs(allJobs);
  }, []);

  const onSubmit = (selectedKeywords: string[]) => {
    if (selectedKeywords.length === 0) {
      setFilteredJobs(jobs);
      return;
    }
    setFilteredJobs((prevState) =>
      prevState.filter((job) =>
        selectedKeywords.every((keyword) => job.keywords.includes(keyword))
      )
    );
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Searchbar
          options={Array.from(keywords)}
          onSubmit={onSubmit}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <CardList list={filteredJobs} selectKeyword={setSelected} />
    </div>
  );
}

export default App;
