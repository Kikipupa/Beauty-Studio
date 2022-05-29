function Icon(props) {
  return (
    <div
      className={
        props.classNameContainer ? props.classNameContainer : "icons-container"
      }
    >
      <img
        onClick={props.onIconClick}
        className={props}
        src={props.src}
        alt={props.className}
      />
    </div>
  );
}

export default Icon;
