const Counter = ({contador, incrementar, decrementar}) => {
    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    );
};
export default Counter;