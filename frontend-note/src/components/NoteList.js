import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (id) => {
    if (!id) {
      console.error("Invalid id:", id);
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
        <h1 className="title">Note List</h1>
        <button onClick={handleLogout} className="button is-danger is-small">
          Logout
        </button>
      </div>

      <Link to="add" className="button is-success mb-3">
        Add New Note
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th style={{ width: "40%" }}>Body</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={note.id}>
              <td>{index + 1}</td>
              <td>{note.title}</td>
              <td>{note.body}</td>
              <td>{note.category}</td>
              <td>
                <Link
                  to={`edit/${note.id}`}
                  className="button is-small is-info mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
