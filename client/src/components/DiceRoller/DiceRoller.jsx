import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DiceRollerWindow from "./DiceRollerWindow";

const DiceRoller = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="dice-button"
            >
                Кубики
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate={(isOpen ? 'open' : 'collapsed')}
                        // exit="collapsed"
                        variants={{
                            open: {opacity: 1, height: "auto"},
                            collapsed: {opacity: 0, height: 0}
                        }}
                        // transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
                    >
                        <DiceRollerWindow />
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}

export default DiceRoller;