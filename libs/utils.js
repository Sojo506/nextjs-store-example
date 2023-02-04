import { getItems } from "../services/itemService";

export async function getPathsFromIds() {
  const items = await getItems();

  const ids = items.map((i) => {
    return {
      params: {
        id: convertToPath(i.title),
      },
    };
  });

  return ids;
}

export async function getItemData(id) {
  const items = await getItems();

  const product = items.find((i) => convertToPath(i.title) === id);

  return {
    id: id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
