import TokenInfo from './tokens/token';
import tokenInfo from './tokens/data/data.json';
export default function Tokens() {
  return (
    <div>
      <TokenInfo {...tokenInfo} />
    </div>
  );
}
