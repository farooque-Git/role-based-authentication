// Profile.js
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Typography, Avatar, Card, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDb } from "../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const q = query(
        collection(fireDb, "posts"),
        where("userId", "==", currentUser.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const blogsArray = [];
        querySnapshot.forEach((doc) => {
          blogsArray.push({ ...doc.data(), id: doc.id });
        });
        setBlogs(blogsArray);
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  const deleteBlog = async (id) => {
    try {
      await deleteDoc(doc(fireDb, "posts", id));
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
      toast.error("Failed to delete blog. Please try again.");
    }
  };
  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-20 w-full">
      <Card>
        <CardBody className=" bg-gray-100 flex flex-col items-center">
          <Avatar
            src={currentUser.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            size="xl"
            className="mb-4"
          />
          <Typography variant="h5" className="text-center mb-2">
            {currentUser.displayName || "Anonymous User"}
          </Typography>
          <Typography variant="body1" className="text-center">
            {currentUser.email}
          </Typography>
          <button
            className="bg-black hover:bg-gray-500 text-white font-semibold hover:text-black py-2 px-4 border border-gray-600 hover:border-transparent rounded"
            onClick={() => {
              navigate("/createblogpost");
            }}
          >
            Create Your Blog
          </button>
        </CardBody>
      </Card>
      <div className="container mx-auto mt-20 max-w-5xl">
        <Toaster />
        <h2 className="text-2xl font-bold mb-4">My Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Content</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="py-2 px-4 border-b">
                    <div
                      className="truncate"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(blog.time.toDate()).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Profile;
