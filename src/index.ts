function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function sample(values: readonly number[]): void {
  if (!Array.isArray(values) || !values.length || values.length > 100000)
    throw new RangeError('Sample size1..100000');
  for (const v of values) finite(v);
}
export function harmonicMean(values: readonly number[]): number {
  sample(values);
  let min = Infinity;
  for (const v of values) {
    if (v <= 0) throw new RangeError('Positive values required');
    min = Math.min(min, v);
  }
  let sum = 0;
  for (const v of values) sum += min / v;
  const result = min / (sum / values.length);
  if (!Number.isFinite(result) || result === 0) throw new RangeError('Mean resolution lost');
  return result;
}
