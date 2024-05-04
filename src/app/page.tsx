import SearchAnime from '@/components/SearchAnime';

export default async function Home() {
  return (
    <div className="mt-20 flex py-4 px-2 justify-center gap-4 flex-row flex-wrap">
      <SearchAnime />
    </div>
  );
}
