import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { fireDb } from "../firebase/firebase";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(fireDb, "posts"), orderBy("time", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const blogsArray = [];
      querySnapshot.forEach((doc) => {
        blogsArray.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(blogsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container grid mx-auto mt-20 max-w-5xl">
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="mb-4 p-4 shadow-lg border rounded">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <p className="text-gray-600 text-sm mt-2">
              {new Date(blog.time.toDate()).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
