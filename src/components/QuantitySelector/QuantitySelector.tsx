import styles from "./QuantitySelector.module.scss";

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantitySelector({ quantity, setQuantity }: Props) {
  return (
    <div className={styles.container}>
      <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
        -
      </button>

      <span>{quantity}</span>

      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
