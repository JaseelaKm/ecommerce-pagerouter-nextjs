import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryFilter() {
  return (
    <div>
      <div className="container-fluid bg-success-subtle">
        <div className="d-flex flex-column align-items-center">
          <div className="row w-100 ">
            <div className="col-6 col-md-3 mb-4 customLink">
              <Link
                href={'/categories/cat_aZWNoy0dEw80JA'}
                className="category-link "
              >
                <div className="text-center">
                  <Image
                    alt="category"
                    src={'/catbook.jpg'}
                    width={80}
                    height={50}
                    className="rounded mb-2 mt-4"
                  ></Image>
                  <span className="d-block" style={{ fontSize: "medium" }}>
                    Books
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3 mb-4 customLink">
              <Link
                href={'/categories/cat_BkyN5YxO9o0b69'}
                className="category-link "
              >
                <div className="text-center">
                  <Image
                    alt="category"
                    src={"/catgrocery.jpg"}
                    width={80}
                    height={50}
                    className="rounded mb-2 mt-4"
                  ></Image>
                  <span className="d-block" style={{ fontSize: "medium" }}>
                    Groceries
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3 mb-4,customLink">
              <Link
                href={'/categories/cat_31q0o3jO4wDdjR'}
                className="category-link "
              >
                <div className="text-center">
                  <Image
                    alt="category"
                    src={"/catkids.jpg"}
                    width={80}
                    height={50}
                    className="rounded mb-2 mt-4"
                  ></Image>
                  <span className="d-block" style={{ fontSize: "medium" }}>
                    Kids Fashion
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-4,customLink">
              <Link
                href={'/categories/cat_p6dP5grL9on7kA'}
                className="category-link "
              >
                <div className="text-center">
                  <Image
                    alt="category"
                    src={"/catelectronics.jpg"}
                    width={80}
                    height={50}
                    className="rounded mb-2 mt-4"
                  ></Image>
                  <span className="d-block" style={{ fontSize: "medium" }}>
                    Electronics
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
