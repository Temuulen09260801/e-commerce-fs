import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Cart() {
  return (
    <main className=" bg-[#f7f7f8] pt-[60px] pb-24">
      <section className="  max-w-[1100px] mx-auto min-h-[calc(100vh-363px)]">
        {/* nav */}
        <div className="flex items-center justify-center">
          <p className="h-8 w-8 flex items-center justify-center  border-[1px] border-[#2563EB] rounded-full text-white bg-[#2563EB]">
            ✓
          </p>
          <p className="h-[1px] border-[1px] border-[#2563EB] w-20"></p>
          <p className="h-8 w-8 flex items-center justify-center  border-[1px] border-[#2563EB] rounded-full text-white bg-[#2563EB]">
            2
          </p>
          <p className="h-[1px] border-[1px] border-[#18181B] w-20"></p>
          <p className="h-8 w-8 flex items-center justify-center  border-[1px] border-black rounded-full">
            3
          </p>
        </div>
        {/* sags */}
        <div className="flex gap-4 mt-[58px]">
          <div className="w-[333px]">
            <div className="bg-white p-8 rounded-2xl ">
              <h1 className="text-[18px] font-bold mb-4">
                Сагс <span className="text-[#71717A] font-medium">(4)</span>
              </h1>
              <div className="flex flex-col gap-4">
                {/* map */}
                <div className="flex justify-between gap-6">
                  <img
                    src="/products/image2.png"
                    alt="photo"
                    className="h-[80px] w-[80px] bg-contain rounded-2xl"
                  />
                  <div className="w-full">
                    <p className="text-base">Chunky Glyph Tee</p>
                    <p className="text-xs mt-1">1 x 120’000₮</p>
                    <p className="text-base mt-2 font-bold">120’000₮</p>
                  </div>
                </div>
                {/* map start */}
                <div className="flex justify-between gap-6">
                  <img
                    src="/products/image2.png"
                    alt="photo"
                    className="h-[80px] w-[80px] bg-contain rounded-2xl"
                  />
                  <div className="w-full">
                    <p className="text-base">Chunky Glyph Tee</p>
                    <p className="text-xs mt-1">1 x 120’000₮</p>
                    <p className="text-base mt-2 font-bold">120’000₮</p>
                  </div>
                </div>
                {/* map end */}
              </div>
              <div className="flex justify-between items-center mt-[42px]">
                <p className="text-[16px]">Нийт төлөх дүн:</p>
                <p className="text-[18px] font-bold">360’000₮</p>
              </div>
            </div>
          </div>
          {/* hurgeltiin medeelel oruulah */}

          <div className="w-full bg-white p-8 rounded-2xl ">
            <h3 className="text-[18px] font-bold text-[#09090B] pb-6 border-b-[1px] border-[#E4E4E7]">
              2. Хүргэлтийн мэдээлэл оруулах
            </h3>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Овог:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Нэр:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Утасны дугаар:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Имэйл хаяг:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Хаяг:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Нэмэлт мэдээлэл:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <span className="mt-2 text-xs text-[#71717A]">
                Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
              </span>
            </div>
            <div className="text-sm mt-9 flex justify-between">
              <Button className="bg-white px-9 py-2 rounded-full border-[1px] border-[#E4E4E7] text-black">
                Буцах
              </Button>
              <Button className="bg-[#2563EB] px-9 py-2 rounded-full  ">
                Мэдээлэл шинэчлэх
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
