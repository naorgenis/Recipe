const Form = ({ search, updateSearch, getSearch }) => {
  return (
    <form
      className="input-group mb-3 serach_form search_bar"
      onSubmit={getSearch}
    >
      <button className="btn btn-outline-secondary" type="submit">
        Search
      </button>
      <input
        type="text"
        className="form-control search_bar"
        value={search}
        onChange={updateSearch}
      />
    </form>
  );
};

export default Form;
