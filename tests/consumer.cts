import { harmonicMean } from '@lp-labs/harmonic-mean';
if (Math.abs(harmonicMean([1, 2, 4]) - 12 / 7) > 1e-12) throw new Error('Mean');
// @ts-expect-error invalid argument must be rejected by declarations
harmonicMean(['1']);
