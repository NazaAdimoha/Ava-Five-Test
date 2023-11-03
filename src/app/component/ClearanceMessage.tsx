import Link from "next/link";

const ClearanceMessage = () => {
  return (
    <section className="bg-[#F0F0F0] h-[50px] shrink-0 flex items-center justify-center">
      <p className="text-[#171520] flex md:items-center justify-center not-italic tracking-wide font-normal">
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status{""}
        <Link href="/order-status">
          <span className="text-primary ml-1 underline">here</span>
        </Link>
      </p>
    </section>
  );
};

export default ClearanceMessage;
