const Digest = ({ digets }) => {
  return (
    <div className="contains">
      <ul>
        {digets.map((dig) => (
          <li>
            {dig.label}: {Math.floor(Number(dig.total))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Digest;
