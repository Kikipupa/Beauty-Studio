function Button(props) {
  return (
    <input type="button" className={props.className} value={props.text}></input>
  );
}

export default Button;
