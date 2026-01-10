type Props = {
  name: string;
  rating: number;
};

export default function RestaurantCard({ name, rating }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:bg-purple-50 hover:scale-[1.02] transition flex justify-between items-center">
      <h3 className="font-semibold">{name}</h3>
      <span className="text-yellow-500 font-bold">⭐ {rating}</span>
    </div>
  );
}
