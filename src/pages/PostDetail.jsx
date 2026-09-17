import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Обратите внимание: обычно используется 'react-router-dom'

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        if (!response.data) return;
        setPost(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section>
        <p>Post was not found.</p>
      </section>
    );
  }

  return (
    <section>
      <h3 className="text-xl font-semibold capitalize mb-3">{post.title}</h3>
      <p className="text-sm text-gray-600 grow">{post.body}</p>
    </section>
  );
};

export default PostDetail;
