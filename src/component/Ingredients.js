const Ingredients = ({ ingredients }) => {
  return (
    <div className="contains">
      <ul>
        {ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
