function SliderItem(props) {
  return (
    <div className="studio-default">
      <img className={props.studioNumber} src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default SliderItem;
