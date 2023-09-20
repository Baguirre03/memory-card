export default function Card({ data, index, handleClick }) {
  return (
    <div className="card-holder">
      <div>{data.name}</div>
      <div>{data.id}</div>
      <img onClick={() => handleClick(index)} id={data.id} src={data.img}></img>
    </div>
  );
}
