function SliderItem(props) {
  return (
    <div className={props.className}>
      <img className="studio-img" src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default SliderItem;
