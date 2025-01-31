import { useState } from "react";

const Card = ({ onSubmit, onDelete }) => {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    if (!Note.title.trim() || !Note.content.trim()) {
      return;
    }
    onSubmit(Note); // Pass the new note to the parent component
    setNote({ title: "", content: "" }); // Clears the input fields
  }

  return (
    <div className="bg-white h-[200px] w-[350px] mt-2 ml-2 rounded-xl p-2 flex flex-col justify-between shadow-xl">
      <div>
        <form>
          <input
            name="title"
            onChange={handleChange}
            value={Note.title}
            placeholder="Title"
            className="text-2xl w-[330px]"
          ></input>
          <textarea
            name="content"
            onChange={handleChange}
            value={Note.content}
            placeholder="Type anything..."
            className="text-md w-[330px] h-[120px] align-text-top"
          ></textarea>
        </form>
        <button
          onClick={handleSubmit}
          className="bg-blue-300 rounded-md font text-xl w-full mt-1"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;