import { motion } from "framer-motion"
import './card.css'

const Card = ({ card }) => {
    const style = {
        "fontSize": "50px",
        "color": card.color,
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "border": "1px solid #ffffff",
        "borderRadius": "8px",
        "padding": "5px",
        "opacity": "0.9",
        "width": "100%", // Задает ширину 100%
        "boxSizing": "border-box" // Убедитесь, что padding и border учтены в ширине
    }

    return (
        <motion.div
            layout
            layoutId={card.id}
            style={style}
            id={card.id}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {card.content}
        </motion.div>
    )
}

export { Card }