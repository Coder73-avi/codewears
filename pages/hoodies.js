import Link from "next/link";

export default function hoodies() {
  return (
    <section className="text-gray-600 body-font mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Array(6)
            .fill()
            .map((val, indx) => (
              <div
                className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5"
                key={indx}
              >
                <Link href={"/product/slug=123"}>
                  <a>
                    <div className="m-auto md:mx-0 block relative h-[300px] w-[200px]  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-top object-cover w-full h-full block"
                        src="https://m.media-amazon.com/images/I/71ZE0VUjkSL._AC_UX522_.jpg"
                      />
                    </div>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
