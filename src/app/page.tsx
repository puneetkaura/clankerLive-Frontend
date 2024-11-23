import Tokens from '@/components/Tokens';

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 pt-3 text-center text-2xl font-bold text-gray-900">
        🚀 Welcome to Acme Clanker
      </h1>
      <div className="flex flex-col gap-3">
        <Tokens />
        <Tokens />
        <Tokens />
      </div>
    </div>
  );
}
