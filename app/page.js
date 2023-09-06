import { fetchGraphQL } from "@/utils";

export default async function Home() {
  const data = await fetchGraphQL(`query {
    heroSectionCollection{
      items{
        title
        tagline
      }
    }
  }
`);

  return (
    <div className={`flex items-center justify-center text-center h-screen`}>
      <div className=" max-w-3xl">
        <h1 className={`text-4xl mb-10 text-center`}>
          {data.data.heroSectionCollection.items[0].title}
        </h1>
        <p className="text-xl text-gray-500">
          {data.data.heroSectionCollection.items[0].tagline}
        </p>
      </div>
    </div>
  );
}
