export default async function Home() {
  const response = await fetch(
    `https://64f1bd810e1e60602d2436ba.mockapi.io/api/products`
  );
  const data = await response.json();
  console.log(data);

  return (
    <div className="flex items-center justify-center text-center h-screen">
      <div className="">
        <h1 className="font-bold text-4xl mb-10 text-center">
          NextJS 13 Tutorial
        </h1>
        <div className="grid grid-cols-5 gap-5">
          {data.map((product) => (
            <div key={product.id} className="bg-gray-100 text-center p-4">
              <div className="flex gap-1 font-bold text-lg items-center justify-center">
                <p>{product.id}</p> <h2>{product.name}</h2>
              </div>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
