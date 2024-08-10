
import Star from "./Star"

export default function Rating({
    score,
    activeColor = '#000',
    mutedColor = '#E3E3E3',
}) {
    return (
        <div className="rating" aria-label={`Note de ${score} sur 5`}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < score ? activeColor : mutedColor} />
            ))}
        </div>
    )
}
