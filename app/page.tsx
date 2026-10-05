import ProductCard from './componets/ProductCard';
import { products } from './data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center w-full">
          <button className="bg-[#0A2540] hover:bg-[#103458] text-white font-medium uppercase tracking-wider py-3 px-10 rounded-full transition-colors duration-200 text-sm shadow-sm">
            Смотреть всю коллекцию
          </button>
        </div>

      </div>
    </main>
  );
}
