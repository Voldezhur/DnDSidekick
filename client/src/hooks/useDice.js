const useDice = () => {
    const rollDice = (amount, value) => {
        let result = 0;
        
        for (let i = amount; i > 0; i--) {
            result += Math.floor(Math.random() * value + 1);
        }

        return(result);
    }

    return [rollDice];
}

export default useDice;