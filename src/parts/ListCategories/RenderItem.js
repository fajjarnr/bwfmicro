import Link from "next/link";
import formatThousand from "src/helpers/FormatThousand";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="card relative transition-all duration-300">
        {item.imageName}
        <div className="card-meta mt-10">
          <h4 className="text-lg text-gray-900 transition-all duration-200 w-1/2">
            {item.name}
          </h4>
          <h5 className="text-sm text-gray-600 transition-all duration-500 mt-2">
            {formatThousand(item.total)}
          </h5>
        </div>
        <Link href="#">
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
