import { Hero } from "@/components/home/page";
import { FeaturedProductCard, ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="mt-[60px] mb-24 max-w-[1100px] mx-auto ">
        <div className="flex justify-between ">
          <div className="w-[245px]">
            <div>
              <p className="text-base font-bold">Ангилал</p>
              <div className="flex gap-2 mt-4">
                <input type="checkbox" defaultChecked className="checkbox" />
                <p>Малгай</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-base font-bold">Хэмжээ</p>
              <div className="flex gap-2 mt-4">
                <input type="checkbox" defaultChecked className="checkbox" />
                <p>Free</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-y-12 gap-x-5">
            {products.map((product, index) => {
              return (
                <>
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    discount={product.discount}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
