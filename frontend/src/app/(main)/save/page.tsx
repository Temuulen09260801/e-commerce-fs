import { SavedProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function Save() {
  return (
    <main className=" bg-[#f7f7f8] pt-[60px] pb-24">
      <section className="  max-w-[1100px] mx-auto min-h-[calc(100vh-363px)]">
        <div>
          <h1 className="text-xl font-bold mb-4">
            Хадгалсан бараа{" "}
            <span className="font-medium text-[#5E6166]">(3)</span>
          </h1>
          <div className="flex flex-col gap-4">
            {products.map((product, index) => {
              return (
                <SavedProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  discount={product.discount}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
