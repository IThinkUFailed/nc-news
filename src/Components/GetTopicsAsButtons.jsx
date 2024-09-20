import { useEffect, useState } from "react";
import { getAllTopics } from "../utility/api";
import { Link } from "react-router-dom";
const GetTopicsAsButtons = () => {
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

  return (
    <>
      <section className="navbar-items">
          <Link to="/"> Home</Link> 
          {topics.map((topic) => (
               <Link key={topic.slug} to={`/topics/${topic.slug}`}>
                {topic.slug[0].toUpperCase()}{topic.slug.slice(1)}</Link>

          ))}
      </section>
    </>
  );
};

export default GetTopicsAsButtons;