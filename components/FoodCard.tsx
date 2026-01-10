import Image from "next/image";

type Props = {
  name: string;
  rating: number;
  image: string;
  onView: () => void;
};

export default function FoodCard({ name, rating, image, onView }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
      <Image src={image} alt={name} width={300} height={200} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-yellow-500">⭐ {rating}</p>

        <button
          onClick={onView}
          className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          View Info
        </button>
      </div>
    </div>
  );
}
