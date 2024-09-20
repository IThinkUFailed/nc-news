import { useEffect, useState } from "react";
import { getAllTopics } from "../utility/api";
const GetTopics = ({ setTopic }) => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllTopics()
      .then(( data ) => {
        setTopics(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setTopic(event.target.value)
  };

  return (
    <> <section className="topic">
      <label htmlFor="topics" className="topic-title">Topic: </label>
      <select name="topics" id="topics" onChange={handleChange}>
        <option value="">All</option>
        {topics.map((topic) => (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug[0].toUpperCase()}{topic.slug.slice(1)} {/* Make it look like a title because lowercase was annoying me */}
          </option>
        ))}
      </select>
      </section>
    </>
  );
};

export default GetTopics;