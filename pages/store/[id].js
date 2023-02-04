import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItemData, getPathsFromIds } from "../../libs/utils";

export default function ProductPage({ product }) {

  return (
    <Layout>
      <Product item={product.data} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const product = await getItemData(id);

  return {
    props: {
      product,
    },
  };
}
