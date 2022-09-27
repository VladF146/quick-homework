export default function Person({ name, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}/>
    </div>
  );
}
