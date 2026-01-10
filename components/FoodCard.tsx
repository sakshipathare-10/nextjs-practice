export default function FoodCard({ name, rating }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-yellow-500">⭐ {rating}</p>
    </div>
  );
}
