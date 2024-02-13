import Image from "next/image";

interface ICard {
  name?: string;
  price?: string;
  img?: string;
}
// eslint-disable-next-line react/prop-types
const Card: React.FC<ICard> = ({ name, price, img }) => {
  return (
    <div className="card">
      <Image src={img || ""} height={24} width={24} alt={name || ""} />
      <div className="textBox">
        <p className="text head">{name}</p>
        <span>Cryptocurrency</span>
        <p className="text price">{price}</p>
      </div>
    </div>
  );
};
export default Card;
