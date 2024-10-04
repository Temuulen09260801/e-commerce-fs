"use client";
import { ICategory, IProduct } from "@/app/utils/interfaces";
import { apiUrl } from "@/app/utils/util";
import { Hero } from "@/components/home/page";
import { FeaturedProductCard, ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const getAllProducts = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/product`);
    setProducts(response.data.products);
  };
  const getAllCategories = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/category`);
    setCategories(response.data.categories);
  };
  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);
  return (
    <main>
      <section className="mt-[60px] mb-24 max-w-[1100px] mx-auto ">
        <div className="flex justify-between ">
          <div className="w-[245px]">
            <div>
              <p className="text-base font-bold">Ангилал</p>

              {categories.map((category) => {
                return (
                  <div className="flex gap-2 mt-4">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    <p>{category.name}</p>
                  </div>
                );
              })}
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
                  <ProductCard key={product._id} product={product} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
