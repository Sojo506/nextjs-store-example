import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../libs/utils";
import styles from "../styles/product.module.css";
import AddButton from "./addButton";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src={item.image}
            alt={item.description}
            width={500}
            height={500}
          />
        </div>

        <div className={styles.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={styles.price}>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
          </div>
          <div>
            <AddButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={styles.listItem}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div className={styles.price}>
            <h3>{item.price}</h3>
            {qty === 0? "" : <p>{qty} units</p>}
            {qty === 0? "" : <p>SubTotal: ${qty * item.price}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image
            src={item.image}
            alt={item.description}
            width={500}
            height={500}
          />
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
        </h3>
      </div>

      <div>${item.price}</div>

      <div>
        <AddButton item={item} />
      </div>
    </div>
  );
}
