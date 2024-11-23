'use client';
import Link from 'next/link';
import React, { useState } from 'react';
const BaseIcon = () => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 155 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.856 73.722C32.8562 72.8665 33.0253 72.0195 33.3538 71.2295C33.6822 70.4396 34.1634 69.7223 34.7698 69.1188C35.3762 68.5154 36.0958 68.0376 36.8873 67.713C37.6789 67.3884 38.5267 67.2234 39.3822 67.2274L50.2024 67.2626C51.9276 67.2626 53.5821 67.948 54.802 69.1678C56.0218 70.3877 56.7072 72.0422 56.7072 73.7674V114.68C57.9252 114.319 59.4897 113.933 61.2015 113.53C62.3906 113.251 63.4504 112.578 64.2089 111.621C64.9674 110.663 65.38 109.478 65.3798 108.256V57.5055C65.3798 55.7802 66.065 54.1256 67.2848 52.9055C68.5047 51.6855 70.1592 50.9999 71.8845 50.9995H82.7261C84.4514 50.9999 86.1059 51.6855 87.3258 52.9055C88.5456 54.1256 89.2309 55.7802 89.2309 57.5055V104.607C89.2309 104.607 91.9454 103.509 94.5894 102.393C95.5716 101.977 96.4097 101.282 96.9993 100.393C97.5889 99.5045 97.9038 98.462 97.9047 97.3955V41.2437C97.9047 39.5187 98.5898 37.8644 99.8094 36.6446C101.029 35.4247 102.683 34.7393 104.408 34.7389H115.25C116.975 34.7389 118.63 35.4243 119.849 36.6441C121.069 37.864 121.755 39.5185 121.755 41.2437V87.4835C131.154 80.6714 140.679 72.4788 148.238 62.6272C149.335 61.1972 150.061 59.5181 150.35 57.7396C150.64 55.9611 150.485 54.1384 149.9 52.4343C146.401 42.367 140.839 33.141 133.57 25.3467C126.301 17.5524 117.484 11.3614 107.685 7.16992C97.886 2.97846 87.3197 0.878835 76.6625 1.0054C66.0053 1.13196 55.4918 3.48194 45.795 7.90493C36.0981 12.3279 27.4313 18.7265 20.3493 26.6913C13.2673 34.656 7.92599 44.0115 4.66718 54.159C1.40838 64.3066 0.303866 75.0226 1.42431 85.6215C2.54475 96.2205 5.86549 106.469 11.174 115.711C12.0988 117.305 13.4592 118.602 15.0956 119.45C16.7321 120.298 18.5764 120.661 20.4121 120.497C22.4628 120.317 25.0161 120.061 28.0518 119.705C29.3733 119.555 30.5934 118.924 31.4796 117.932C32.3658 116.941 32.8562 115.658 32.8573 114.328V73.722"
      fill="#0A0B0D"
    />
    <path
      d="M32.856 73.722C32.8562 72.8665 33.0253 72.0195 33.3538 71.2295C33.6822 70.4396 34.1634 69.7223 34.7698 69.1188C35.3762 68.5154 36.0958 68.0376 36.8873 67.713C37.6789 67.3884 38.5267 67.2234 39.3822 67.2274L50.2024 67.2626C51.9276 67.2626 53.5821 67.948 54.802 69.1678C56.0218 70.3877 56.7072 72.0422 56.7072 73.7674V114.68C57.9252 114.319 59.4897 113.933 61.2015 113.53C62.3906 113.251 63.4504 112.578 64.2089 111.621C64.9674 110.663 65.38 109.478 65.3798 108.256V57.5055C65.3798 55.7802 66.065 54.1256 67.2848 52.9055C68.5047 51.6855 70.1592 50.9999 71.8845 50.9995H82.7261C84.4514 50.9999 86.1059 51.6855 87.3258 52.9055C88.5456 54.1256 89.2309 55.7802 89.2309 57.5055V104.607C89.2309 104.607 91.9454 103.509 94.5894 102.393C95.5716 101.977 96.4097 101.282 96.9993 100.393C97.5889 99.5045 97.9038 98.462 97.9047 97.3955V41.2437C97.9047 39.5187 98.5898 37.8644 99.8094 36.6446C101.029 35.4247 102.683 34.7393 104.408 34.7389H115.25C116.975 34.7389 118.63 35.4243 119.849 36.6441C121.069 37.864 121.755 39.5185 121.755 41.2437V87.4835C131.154 80.6714 140.679 72.4788 148.238 62.6272C149.335 61.1972 150.061 59.5181 150.35 57.7396C150.64 55.9611 150.485 54.1384 149.9 52.4343C146.401 42.367 140.839 33.141 133.57 25.3467C126.301 17.5524 117.484 11.3614 107.685 7.16992C97.886 2.97846 87.3197 0.878835 76.6625 1.0054C66.0053 1.13196 55.4918 3.48194 45.795 7.90493C36.0981 12.3279 27.4313 18.7265 20.3493 26.6913C13.2673 34.656 7.92599 44.0115 4.66718 54.159C1.40838 64.3066 0.303866 75.0226 1.42431 85.6215C2.54475 96.2205 5.86549 106.469 11.174 115.711C12.0988 117.305 13.4592 118.602 15.0956 119.45C16.7321 120.298 18.5764 120.661 20.4121 120.497C22.4628 120.317 25.0161 120.061 28.0518 119.705C29.3733 119.555 30.5934 118.924 31.4796 117.932C32.3658 116.941 32.8562 115.658 32.8573 114.328V73.722"
      stroke="white"
    />
    <path
      d="M32.6191 139.343C44.047 147.657 57.5522 152.647 71.6404 153.761C85.7285 154.876 99.8504 152.071 112.443 145.658C125.036 139.244 135.61 129.471 142.993 117.421C150.376 105.371 154.282 91.5135 154.278 77.3813C154.278 75.6178 154.196 73.8732 154.079 72.1387C126.091 113.88 74.415 133.395 32.6217 139.336"
      fill="#C0D0DB"
    />
  </svg>
);
const DexIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    fill="currentColor"
    fill-rule="evenodd"
    viewBox="0 0 252 300"
    focusable="false"
    className="chakra-icon custom-euf446"
  >
    <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"></path>
    <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"></path>
  </svg>
);

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="hover:shadow-3xl mx-auto max-w-4xl cursor-pointer rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 shadow-2xl transition-all duration-300"
      onClick={toggleExpand}
    >
      {/* Token and Creator Section */}
      <div className="flex flex-row gap-1 lg:justify-between">
        {/* Token Info */}
        <div className="flex flex-row items-center text-center lg:flex-1">
          <div className="group relative">
            <img
              src={token.image}
              alt={token.name}
              className="min-h-16 min-w-16 rounded-full border-4 border-purple-300 shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-purple-100 opacity-70 blur-2xl transition-opacity group-hover:opacity-90"></div>
          </div>
          <div className="mt-4">
            <h3 className="flex items-center justify-center text-2xl font-bold text-gray-900">
              {token.name}
              <span className="text-lg font-semibold text-purple-600">
                ({token.ticker})
              </span>
            </h3>
            <p className="text-gray-800">
              <span className="font-bold">Market Cap:</span> {token.marketCap}
            </p>
            <p className="text-gray-700">{token.totalVolume}</p>
            <p className="text-sm text-gray-500">
              Launched: {token.launchedTime}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Link
            target="_blank"
            href={
              'https://dexscreener.com/base/0x7a3eD718c9c1a23681b88672c0C425FE050e4049'
            }
          >
            <div className="scale-90 rounded-full shadow-purple-800 transition-all hover:scale-105 hover:shadow-xl">
              <DexIcon></DexIcon>
            </div>
          </Link>
          <Link
            target="_blank"
            href={
              'https://basescan.org/token/0x374A5AE1D608284645981816f5959f22757236D2'
            }
          >
            <div className="scale-90 rounded-full shadow-purple-800 transition-all hover:scale-105 hover:shadow-xl">
              <BaseIcon />
            </div>
          </Link>
        </div>
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <div className="mt-6">
          {/* Creator Info */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="group relative flex justify-center lg:justify-start">
              <img
                src={creator.profilePic}
                alt={creator.name}
                className="h-20 w-20 rounded-full shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full opacity-60 blur-lg transition-opacity group-hover:opacity-100"></div>
            </div>

            <div className="text-center lg:text-left">
              <Link
                href={`https://farcaster.com/${creator.name}`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
                className="block text-lg font-semibold text-blue-600 hover:text-blue-500 hover:underline"
              >
                {creator.name}
              </Link>

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

          {/* Links as Buttons */}
          <div className="mt-6 flex justify-center gap-6">
            <Link
              href="https://dexscreener.com/base/0x7a3eD718c9c1a23681b88672c0C425FE050e4049"
              passHref
            >
              <button className="rounded-lg bg-green-600 px-6 py-2 text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300">
                View on Dexscreener
              </button>
            </Link>

            <Link
              href="https://basescan.org/token/0x374A5AE1D608284645981816f5959f22757236D2"
              passHref
            >
              <button className="rounded-lg bg-purple-600 px-6 py-2 text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300">
                View on Basescan
              </button>
            </Link>
          </div>

          {/* Notable Holders Section */}
          <div className="mt-10">
            <h4 className="mb-6 text-2xl font-extrabold text-purple-600">
              Notable Holders
            </h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="mt-2 font-medium text-gray-900">
                    {holder.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {holder.followers} Followers
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenInfo;
