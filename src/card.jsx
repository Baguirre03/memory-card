export default function Card({ data, index, handleClick }) {
  data.abilities.splice(2);
  return (
    <div onClick={() => handleClick(index)} className="card">
      <img id={data.id} src={data.img}></img>
      <p className="name">{data.name}</p>
      <ul>
        {data.abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}
