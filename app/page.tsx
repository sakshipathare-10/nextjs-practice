import CategoryCard from "@/components/CategoryCard";
import FoodCard from "@/components/FoodCard";
import RestaurantCard from "@/components/RestaurantCard";

export default function Home() {
  return (
    <main className="p-6 space-y-10">

      {/* SECTION 1: Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryCard title="Pizza" img="/pizza.png" />
          <CategoryCard title="Burger" img="/burger.png" />
          <CategoryCard title="Biryani" img="/biryani.png" />
        </div>
      </section>

      {/* SECTION 2: Popular Food */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Food</h2>
        <div className="grid grid-cols-3 gap-4">
          <FoodCard name="Cheese Pizza" rating="4.5" />
          <FoodCard name="Veg Burger" rating="4.3" />
          <FoodCard name="Chicken Biryani" rating="4.7" />
        </div>
      </section>

      {/* SECTION 3: Restaurants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
        <div className="grid grid-cols-3 gap-4">
          <RestaurantCard name="Domino's" rating="4.4" />
          <RestaurantCard name="Burger King" rating="4.2" />
          <RestaurantCard name="Biryani House" rating="4.6" />
        </div>
      </section>

    </main>
  );
}
