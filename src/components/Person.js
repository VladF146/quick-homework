import "./Person.css";

export default function Person({ person }) {
  const { name, image, status } = person;
  return (
    <li className={status.toLowerCase()}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </li>
  );
}

/* export default function Person({ person }) {
    const { name, image, status } = person;
    console.log(status);
    return (
      <li
        style={{
          backgroundColor:
            status === "unknown" ? "grey" : status === "Alive" ? "red" : "green",
        }}
      >
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </li>
    );
  } */
