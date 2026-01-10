import Image from "next/image";

export default function CategoryCard({ title, img }: any) {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:scale-105 transition">
      <Image src={img} alt={title} width={80} height={80} />
      <p className="mt-2 font-semibold text-slate-700">{title}</p>
    </div>
  );
}
