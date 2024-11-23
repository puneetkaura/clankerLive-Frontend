import TokenInfo from './tokens/token';
import tokenInfo from './tokens/data/data.json';
export default function Tokens() {
  return (
    <div className="p-1 lg:p-0">
      <TokenInfo {...tokenInfo} />
    </div>
  );
}
