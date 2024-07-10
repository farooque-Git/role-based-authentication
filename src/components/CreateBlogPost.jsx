import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb } from "../firebase/firebase";

const CreateBlogPost = () => {
  const [blog, setBlog] = useState({
    content: "",
    time: Timestamp.now(),
  });
  const [text, setText] = useState("");

  const addPost = async () => {
    if (blog.content === "") {
      return toast.error("Please fill all fields");
    }

    try {
      console.log("Attempting to add document with content:", blog.content);
      await addDoc(collection(fireDb, "posts"), blog);
      toast.success("Post created successfully!");

      setBlog({ content: "", time: Timestamp.now() });
      setText("");
    } catch (error) {
      console.error("Error adding document: ", error.message, error);
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="container m-24 mx-auto max-w-5xl ">
      <Editor
        apiKey="38r8xst2019qmr1vbu27xo9wqqzw848g07qex1xfhv6gxy86"
        onEditorChange={(newValue, editor) => {
          setBlog((prevBlog) => ({ ...prevBlog, content: newValue }));
          setText(editor.getContent({ format: "text" }));
          console.log(text);
        }}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: "text" }));
        }}
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue="Welcome to Dev Camp !!!"
      />
      <button
        className="w-full mt-5 bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={addPost}
      >
        Send
      </button>
    </div>
  );
};

export default CreateBlogPost;
