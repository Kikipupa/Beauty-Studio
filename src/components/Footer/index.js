import List from "./List";

function Footer({ list, ...rest }) {
  return (
    <div className="footer">
      {list.map((coll, index) => (
        <List key={index} collumn={coll} />
      ))}
    </div>
  );
}

export default Footer;
