const Form = () => (
  <div className="form">
    <form>
      <h3>Add a Book</h3>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="author" placeholder="author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;
