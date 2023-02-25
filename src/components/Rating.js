export const Rating = ({ type }) => {
    return (
        <div className="rating rating-lg rating-half">
            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-8 h-8" />
            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-8 h-8" />
            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-8 h-8" />
            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2 w-8 h-8" />
            <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1 w-8 h-8" />
        </div>
    )
}