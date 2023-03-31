import { IProduct } from "./product";

interface IThumbnailProps {
  // product: IProduct;
  imageUrl: string;
}

export function Thumbnail(props: IThumbnailProps) {


  // I — Interface Segregation - Clients should not be forced to depend on methods that they do not use
  // only pass required props in a component
  // thumbnail doesn't need all products attributes but the image

  // const { product } = props;
  const { imageUrl } = props;

  return (
    <img
      className="p-8 rounded-t-lg h-48"
      src={imageUrl}
      alt="product image"
    />
  );
}
