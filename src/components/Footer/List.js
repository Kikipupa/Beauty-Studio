function List(props) {
  return (
    <ul>
      {props.collumn.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}

export default List;
