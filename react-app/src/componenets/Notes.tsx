function Notes() {
  return (
    <div>
      <h1 style={{ marginTop: 20, marginLeft: 20 }}>Notes</h1>
      <label>
        <textarea
          style={{ margin: 20, paddingTop: 20, paddingLeft: 20 }}
          name="postContent"
          placeholder="Type here..."
          rows={12}
          cols={150}
        />
      </label>
    </div>
  );
}

export default Notes;
