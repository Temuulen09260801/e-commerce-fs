"use client";
import { Hero } from "@/components/home/page";
import { FeaturedProductCard, ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { products } from "@/lib/data";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //  type inference
  const [count, setCount] = useState<number>(100);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <main>
      <section className="mt-[60px] mb-24 max-w-[1100px] mx-auto ">
        <div className="flex gap-5">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-2">
              <Image
                src="/products/image2.png"
                alt="image1"
                width={67}
                height={67}
                className="rounded-lg"
              />
              <Image
                src="/products/image2.png"
                alt="image1"
                width={67}
                height={67}
                className="rounded-lg"
              />
              <Image
                src="/products/image2.png"
                alt="image1"
                width={67}
                height={67}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/products/image2.png"
                alt="image1"
                width={422}
                height={520}
                className="rounded-lg"
              />
            </div>
          </div>
          <div>
            <div className="mt-[100px] flex flex-col gap-4">
              <span className="border-[1px] border-[#2563EB] px-[10px] py-[2px] rounded-full text-xs text-[#09090B]">
                Шинэ
              </span>
              <div className="flex gap-2 items-center">
                <p className="text-2xl font-bold">Wildflower Hoodie</p>
                <Heart size={20} strokeWidth={1} className="" />
              </div>
              <p className="text-base">
                Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
              </p>
              <div>
                <p className="text-sm mb-2">Хэмжээний заавар</p>
                <div className="flex gap-1">
                  <p className="h-8 w-8 rounded-full border-[1px] border-[#18181B] flex items-center justify-center text-xs">
                    S
                  </p>
                  <p className="h-8 w-8 rounded-full border-[1px] border-[#18181B] flex items-center justify-center text-xs">
                    M
                  </p>
                  <p className="h-8 w-8 rounded-full border-[1px] border-[#18181B] flex items-center justify-center text-xs">
                    L
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={minus}
                  className="h-8 w-8 flex justify-center items-center border-[1px] border-[#18181B] rounded-full"
                >
                  -
                </button>
                <Label className="text-xs mx-2">{count}</Label>
                <button
                  onClick={add}
                  className="h-8 w-8 flex justify-center items-center border-[1px] border-[#18181B] rounded-full"
                >
                  +
                </button>
              </div>
              <div>
                <p className="text-xl font-bold mb-2">120000</p>
                <Button className="bg-[#2563EB] px-9 py-2 rounded-full text-sm">
                  Сагсанд нэмэх
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
