import React from 'react';

interface TokenData {
  image: string;
  name: string;
  ticker: string;
  marketCap: string;
  totalVolume: string;
  launchedTime: string;
}

interface CreatorData {
  name: string;
  profilePic: string;
  bio: string;
  followers: number;
  notableClankerBadge?: boolean;
}

interface HolderData {
  name: string;
  profilePic: string;
  followers: number;
}

interface TokenInfoProps {
  token: TokenData;
  creator: CreatorData;
  holders: HolderData[];
}

const TokenInfo: React.FC<TokenInfoProps> = ({ token, creator, holders }) => {
  return (
    <div className="hover:shadow-3xl mx-auto max-w-4xl rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl transition-all duration-300">
      {/* Header */}

      {/* Token Section */}
      <div className="flex flex-wrap justify-between">
        <div className="mb-10 flex flex-col items-center gap-6 text-center">
          <div className="group relative">
            <img
              src={token.image}
              alt={token.name}
              className="h-24 w-24 rounded-full border-4 border-purple-300 shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-purple-100 opacity-70 blur-2xl transition-opacity group-hover:opacity-90"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{token.name}</h3>
            <p className="text-lg font-semibold text-purple-600">
              {token.ticker}
            </p>
            <p className="text-gray-800">
              <span className="font-bold">Market Cap:</span> {token.marketCap}
            </p>
            <p className="text-gray-700">{token.totalVolume}</p>
            <p className="text-sm text-gray-500">
              Launched: {token.launchedTime}
            </p>
          </div>
        </div>

        <div className="rounded-lg p-2 transition-all duration-300">
          <div className="flex items-center gap-6">
            <div className="group relative">
              <img
                src={creator.profilePic}
                alt={creator.name}
                className="h-20 w-20 rounded-full shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-yellow-200 opacity-80 blur-lg transition-opacity group-hover:opacity-100"></div>
            </div>
            <div>
              <a
                href={`https://farcaster.com/${creator.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:text-blue-500 hover:underline"
              >
                {creator.name}
              </a>
              <p className="mt-2 text-gray-700">{creator.bio}</p>
              <p className="mt-1 font-medium text-gray-800">
                {creator.followers} Followers
              </p>
              {creator.notableClankerBadge && (
                <span className="mt-2 inline-block rounded-lg bg-yellow-300 px-3 py-1 text-sm font-semibold text-yellow-900 shadow">
                  🌟 Notable Clanker
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Creator Section */}

      {/* Notable Holders Section */}
      <div>
        <h4 className="mb-6 text-2xl font-extrabold text-purple-600">
          Notable Holders
        </h4>
        <div className="flex justify-center gap-8">
          {holders.slice(0, 3).map((holder, index) => (
            <div
              key={index}
              className="group flex transform flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={holder.profilePic}
                  alt={holder.name}
                  className="h-16 w-16 rounded-full shadow-lg transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-blue-100 opacity-80 blur-lg transition-opacity group-hover:opacity-100"></div>
              </div>
              <p className="mt-2 font-medium text-gray-900">{holder.name}</p>
              <p className="text-sm text-gray-600">
                {holder.followers} Followers
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;