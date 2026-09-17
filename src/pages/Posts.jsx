import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 9,
          },
        },
      );

      if (!response.data) return;

      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);

  return (
    <section>
      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((itm, idx) => (
          <li key={itm.id} className="bg-white rounded-lg shadow-md p-6 border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="text-xl font-semibold capitalize mb-3">{itm.title}</h3>
            <p className="text-sm text-gray-600 grow">{itm.body}</p>
            <Link to={`/posts/${itm.id}`} className="mt-6 text-blue-600 hover:text-blue-800 active:text-blue-900 transition-all font-semibold flex items-center gap-1">View More<span>&rarr;</span></Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Posts;
