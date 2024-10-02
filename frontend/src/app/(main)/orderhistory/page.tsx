import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

export default function OrderHistory() {
  return (
    <main className=" bg-[#f7f7f8] pt-[60px] pb-24">
      <section className="  max-w-[1100px] mx-auto min-h-[calc(100vh-363px)]">
        <div className="flex gap-[20px] text-sm">
          <div className="w-[244px]">
            <p className=" px-4 py-2 font-medium rounded-2xl">
              Хэрэглэгчийн хэсэг
            </p>
            <p className=" px-4 py-2 font-medium rounded-2xl  bg-white">
              Захиалгын түүх
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-[18px] font-bold text-[#09090B] pb-6 border-b-[1px] border-[#E4E4E7]">
              Захиалгын түүх
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              <div className="bg-white px-6 py-8 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <p className="text-base font-bold">2024-09-03 15:34</p>
                    <span className="bg-[#2563EB] rounded-full py-[2px] px-[10px] text-white text-xs">
                      хүргэлтэнд гарсан
                    </span>
                  </div>
                  <SlArrowUp size={10} />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex justify-between gap-2 items-center">
                    <img
                      src="/products/image2.png"
                      alt="photo"
                      className="h-9 w-9 bg-cover bg-center rounded"
                    />
                    <div className="w-full text-xs">
                      <p>Chunky Glyph Tee</p>
                      <p>1 x 120’000₮</p>
                    </div>
                    <p className="font-bold">120’000₮</p>
                  </div>
                  {/* map start */}
                  <div className="flex justify-between gap-2 items-center">
                    <img
                      src="/products/image2.png"
                      alt="photo"
                      className="h-9 w-9 bg-cover bg-center rounded"
                    />
                    <div className="w-full text-xs">
                      <p>Chunky Glyph Tee</p>
                      <p>1 x 120’000₮</p>
                    </div>
                    <p className="font-bold">120’000₮</p>
                  </div>
                  {/* map end */}
                </div>
                <div className="flex justify-between pt-4 mt-4 border-t-[1px] border-[#E4E4E7] text-base">
                  <p>Үнийн дүн:</p>
                  <p className="text-[18px] font-bold">480’000₮</p>
                </div>
              </div>
              {/* map ehlel */}
              <div className="bg-white px-6 py-8 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <p className="text-base font-bold">2024-09-03 15:34</p>
                    <span className="bg-[#2563EB] rounded-full py-[2px] px-[10px] text-white text-xs">
                      хүргэлтэнд гарсан
                    </span>
                  </div>
                  <SlArrowDown size={10} />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex justify-between gap-2 items-center">
                    <img
                      src="/products/image2.png"
                      alt="photo"
                      className="h-9 w-9 bg-cover bg-center rounded"
                    />
                    <div className="w-full text-xs">
                      <p>Chunky Glyph Tee</p>
                      <p>1 x 120’000₮</p>
                    </div>
                    <p className="font-bold">120’000₮</p>
                  </div>
                  {/* map start */}
                  <div className="flex justify-between gap-2 items-center">
                    <img
                      src="/products/image2.png"
                      alt="photo"
                      className="h-9 w-9 bg-cover bg-center rounded"
                    />
                    <div className="w-full text-xs">
                      <p>Chunky Glyph Tee</p>
                      <p>1 x 120’000₮</p>
                    </div>
                    <p className="font-bold">120’000₮</p>
                  </div>
                  {/* map end */}
                </div>
                <div className="flex justify-between pt-4 mt-4 border-t-[1px] border-[#E4E4E7] text-base">
                  <p>Үнийн дүн:</p>
                  <p className="text-[18px] font-bold">480’000₮</p>
                </div>
              </div>
              {/* map togsgol */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
