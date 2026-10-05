import { Product } from "../data/products";
import Image from 'next/image';

interface CardProps {
    product: Product
}

export default function ProductCard({ product }: CardProps) {
    const { image, title, description, price } = product

    const isImageEmpty = !image || image.trim() === "";
  
    const fallbackSrc = "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='300' height='300' viewBox='0 0 300 300'><rect width='300' height='300' fill='%23e2e8f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2394a3b8'>Нет фото</text></svg>";

    const finalSrc = isImageEmpty ? fallbackSrc : image.trim();

    return (
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col justify-between max-w-sm h-full">
            
            <div>
                <div className="relative bg-[#F4F6F8] rounded-2xl w-full aspect-square flex items-center justify-center overflow-hidden mb-5">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                    priority={product.id === 1}
                />
                </div>

                <h3 className="font-bold text-[22px] leading-tight text-gray-950 mb-2 lowercase">
                {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {description}
                </p>
            </div>

            <div>
                <div className="text-gray-900 text-sm font-medium">
                {price.toLocaleString('ru-RU')} ₽
                </div>

                <button className="w-full mt-4 bg-[#0A2540] hover:bg-[#103458] text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 text-sm">
                в корзину
                </button>
            </div>

            </div>
    )
}
