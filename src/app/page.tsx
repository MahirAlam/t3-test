import SearchAnime from '@/components/SearchAnime';

export default async function Home() {
  return (
    <div className="mt-20 flex p-4 justify-center gap-4 flex-row flex-wrap mx-10">
      <SearchAnime />
    </div>
  );
}
