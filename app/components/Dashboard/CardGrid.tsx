import Card from "./Card";

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-2 md:gap-x-7 md:px-2 lg:grid-cols-3 lg:gap-10 lg:px-4 xl:grid-cols-4">
      <Card price={"1.654,34€"} name="Eth" img="/crypto/eth.svg" />
      <Card price={"1.654,34€"} name="BTC" img="/crypto/btc.svg" />
      <Card price={"1.654,34€"} name="Ripple" img="/crypto/ripple.svg" />
    </div>
  );
};
export default CardGrid;
