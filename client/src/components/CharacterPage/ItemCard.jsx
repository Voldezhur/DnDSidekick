// Импорт функционала
import { React, useEffect } from "react";
import useFetching from "../../hooks/useFetching";
import useDice from "../../hooks/useDice";


const ItemCard = ({ item_id }) => {
    const [fetchItem, item] = useFetching("http://localhost:8000/compendium/items/getItemById/" + item_id);
    const [rollDice] = useDice();

    useEffect(() => {
        fetchItem();
    }, []);

    const attack = (damage) => {
        let [amount, value] = damage.split('d');

        let attackRoll = rollDice(1, 20);
        let damageSum = rollDice(parseInt(amount), parseInt(value))

        if (attackRoll === 20) {
            damageSum *= 2;
            alert("Бросок на попадание - " + attackRoll + "\nКритическое попадание! Урон удвоен\nУрон - " + damageSum);
        }

        else {
            alert("Бросок на попадание - " + attackRoll + "\nУрон - " + damageSum);
        }
    }

    return (
        item.map((item, i) => {
            return(
                <div key={i} className="item-card-flex">
                    <div key={i} className="item-card">
                        {item.name}
                    </div>

                    {item.is_weapon &&
                        <button onClick={() => {attack(item.stats.damage_dice)}}>Совершить атаку</button>
                    }
                </div>
            )
        })
    );
}

export default ItemCard;