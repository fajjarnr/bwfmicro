import React from "react";
import Link from "next/link";
import iconPlay from "public/images/icon-play.svg";

export default function RenderItem({ item }) {
  console.log("item :>> ", item);
  return (
    <div className="w-1/4 px-4">
      <div className="item relative">
        <figure className="item-image">
          <iconPlay />
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900">
            {item?.name ?? "Courses Name"}
          </h4>
          <h4 className="text-sm text-gray-600">
            {item?.level ?? "Courses Level"}
          </h4>
        </div>
        <Link href="/courses/[slug]" as={`/courses/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
