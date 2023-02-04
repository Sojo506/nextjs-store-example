import Image from "next/image";
import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItems } from "../../services/itemService";
import styles from '../../styles/product.module.css'

export default function Store({ items }) {
  return (
    <Layout title="Store">
      <h1>Store</h1>
      <div className={styles.items}>
        {items &&
          items.map((i) => <Product key={i.id} item={i} showAs="Default" />)}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
