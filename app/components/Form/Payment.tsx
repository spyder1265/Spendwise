interface IPayment {
  onSubmit?: () => void;
  plan?: "Starter" | "Company" | "Enterprise";
}

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
const Payment: React.FC<IPayment> = ({ onSubmit, plan }) => {
  return (
    <div className="flex h-screen w-full flex-col px-6">
      <h1 className="text-4xl font-bold">Payment</h1>
      {/* payment form */}
    </div>
  );
};
export default Payment;
