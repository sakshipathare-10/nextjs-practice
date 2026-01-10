export default function RestaurantCard({ name, rating }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-green-600">⭐ {rating}</p>
    </div>
  );
}
