import React, { useState } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import DiceRollerWindow from "./DiceRollerWindow";

const DiceRoller = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <motion.button
                initial={false}
                onClick={() => setIsOpen(!isOpen)}
                className="dice-button"
            >
                Кубики
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {opacity: 1, height: "auto"},
                            collapsed: {opacity: 0, height: 0}
                        }}
                        transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
                    >
                        <DiceRollerWindow />
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}

export default DiceRoller;