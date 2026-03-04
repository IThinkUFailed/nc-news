import { useEffect, useState } from "react";
import { getAllTopics } from "../utility/api";
const SortBy = ({ sort }) => {
const [query, setQuery] = useState([])
  const sorting =[
    "author",
    "topic",
    "article_id",
    "title",
    "votes",
    "created_at",
    "article_img_url"
  ]
  const [topics, setTopics] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value)
  };

  return (
    <> <section className="topic">
      <label htmlFor="sorting" className="topic-title">Sort by: </label>
      <select name="sorting" id="sorting" onChange={handleChange}>
        <option value="">All</option>
        {sorting.map((sorted) => (
          <option key={sort_by} value={sort_by}>
            {sort_by[0].toUpperCase()}{sort_by.slice(1)} {/* Make it look like a title because lowercase was annoying me */}
          </option>
        ))}
      </select>
      </section>
    </>
  );
};

export default SortBy;