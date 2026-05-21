export function lgamma(x: number): number {
  const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (x < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - lgamma(1 - x);
  x -= 1; let a = c[0]; const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
export function binomPMF(n: number, k: number, p: number): number {
  if (k < 0 || k > n) return 0;
  if (p <= 0) return k === 0 ? 1 : 0;
  if (p >= 1) return k === n ? 1 : 0;
  const lc = lgamma(n + 1) - lgamma(k + 1) - lgamma(n - k + 1);
  return Math.exp(lc + k * Math.log(p) + (n - k) * Math.log(1 - p));
}
export function poissonPMF(lam: number, k: number): number {
  if (k < 0) return 0;
  return Math.exp(-lam + k * Math.log(lam) - lgamma(k + 1));
}
export function erf(x: number): number {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
export const normCDF = (x: number, mu = 0, sd = 1) => 0.5 * (1 + erf((x - mu) / (sd * Math.SQRT2)));
export const normPDF = (x: number, mu = 0, sd = 1) =>
  Math.exp(-0.5 * ((x - mu) / sd) * ((x - mu) / sd)) / (sd * Math.sqrt(2 * Math.PI));
