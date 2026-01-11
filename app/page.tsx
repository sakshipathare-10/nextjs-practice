"use client";

import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import FoodCard from "@/components/FoodCard";
import RestaurantCard from "@/components/RestaurantCard";

type Food = {
  name: string;
  rating: number;
  image: string;
  description: string;
};

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  useEffect(() => {
    fetch("/data/foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <main className="p-6 bg-slate-100 min-h-screen space-y-12">

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🍽 Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard title="Pizza" image="/pizza.png" />
          <CategoryCard title="Burger" image="/burger.png" />
          <CategoryCard title="Biryani" image="/biryani.png" />
          <CategoryCard title="Dessert" image="/pizza.png" />
        </div>
      </section>

      {/* Popular Food */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔥 Popular Food</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <FoodCard
              key={index}
              name={food.name}
              rating={food.rating}
              image={food.image}
              onView={() => setSelectedFood(food)} 
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-sm space-y-3">
            <h3 className="text-xl font-bold">{selectedFood.name}</h3>
            <p>{selectedFood.description}</p>
            <p className="text-yellow-500">⭐ {selectedFood.rating}</p>

            <button
              onClick={() => setSelectedFood(null)}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Restaurants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🏪 Restaurants</h2>
        <div className="space-y-4">
          <RestaurantCard name="Food Plaza" rating={4.3} />
          <RestaurantCard name="Spice Hub" rating={4.6} />
          <RestaurantCard name="Tandoori Nights" rating={4.4} />
        </div>
      </section>

    </main>
  );
}
