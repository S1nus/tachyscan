import { describe, expect, it } from 'vitest';
import {
  formatZec,
  transactionPools,
  transactionValueBalance,
} from './lib';

describe('transaction display', () => {
  it('orders pool emojis to match the explorer legend', () => {
    expect(transactionPools({
      txid: 'abc',
      vin: [{}],
      ironwood: { actions: [{}] },
      tachyon: { actions: [], valueBalanceZat: 3 },
    })).toEqual(['ironwood', 'transparent', 'tachyon']);
  });

  it('totals the public shielded-pool value balances', () => {
    expect(transactionValueBalance({
      txid: 'abc',
      valueBalanceZat: 5,
      orchard: { valueBalanceZat: -2 },
      tachyon: { valueBalanceZat: 10 },
    })).toBe(13);
    expect(formatZec(13)).toBe('+0.00000013 ZEC');
  });
});
