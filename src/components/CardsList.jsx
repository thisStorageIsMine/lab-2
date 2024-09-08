import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Card } from '.'

let dimensions = [500, 768, 1280]

const CardsList = ({ cards }) => {
    const [visibleCards, setVisibleCards] = useState(cards)
    const [dimension, setDimension] = useState(closestDimension(dimensions, window.innerWidth))

    function checkVisibleCards() {
        const newVisibleCards = cards.filter(c => {
            if (window.innerWidth > 768) return true

            if (window.innerWidth > 600) {
                return c.id !== "hij456" && c.id !== "mno345"
            }

            return c.id !== "hij456" && c.id !== "mno345" && c.id !== "bcd890" && c.id !== "def456" && c.id !== "abc123" && c.id !== "ghi789"
        })

        setVisibleCards(newVisibleCards)
    }


    useEffect(() => {
        checkVisibleCards()

        function cb() {
            setDimension(closestDimension(dimensions, window.innerWidth))
        }
        window.addEventListener('resize', cb)

        return () => window.removeEventListener('resize', cb)
    }, [])

    useEffect(() => {
        checkVisibleCards()
    }, [dimension])

    return (
        <AnimatePresence>
            {visibleCards.map(card =>
                <Card
                    key={card.id}
                    card={card}
                    initial={{ opacity: 0, height: 0 }} // Начальная анимация
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }} // Анимация исчезновения
                    transition={{ duration: 0.5 }} // Длительность анимации
                ></Card>
            )}
        </AnimatePresence>
    )
}

export { CardsList }



function closestDimension(dimensions, num) {

    for (let i = 0; i < dimensions.length; i++) {
        if (i === 0) {
            if (num < dimensions[0]) return dimensions[0]
            continue
        }

        if (i === dimensions.length - 1) {
            return dimensions[i]
        }

        if (num > dimensions[i - 1] && num <= dimensions[i]) return dimensions[i]

    }

}