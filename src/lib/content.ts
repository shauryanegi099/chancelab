/* ============================================================
   THE CHANCE LAB — Codex of Fate · content
   Math written with \( \) inline and $$ $$ display (rendered by mathHtml).
   ============================================================ */

import { GENERATED } from "./lessons.generated";

export type Diff = "easy" | "med" | "hard";

export type QQ =
  | { type: "mcq"; diff: Diff; q: string; choices: string[]; answer: number; explain: string }
  | { type: "num"; diff: Diff; q: string; answer: number; tol: number; explain: string };

export type Section =
  | { type: "text"; html: string; dropcap?: boolean }
  | { type: "formula"; tex: string; caption?: string; seal?: string }
  | { type: "note"; variant: "key" | "tip" | "warn"; html: string }
  | { type: "example"; title: string; problem: string; steps: string[]; answer: string }
  | { type: "code"; lang: string; title: string; code: string }
  | { type: "sketch"; label: string; html: string }
  | { type: "widget"; id: string; title: string; caption?: string; config?: string };

export type Rite = { q: string; a: string };

export type Lesson = {
  id: string; num: string; title: string; jp: string; subtitle: string;
  blurb: string; plain: string; plainJp: string;
  sections: Section[]; rites: Rite[]; quiz: QQ[];
};

export type TomeItem = { slug: string; num: string; title: string; ready: boolean };
export type Tome = { id: string; label: string; jp: string; items: TomeItem[] };

/* ---------- the catalog (full syllabus; 4 are unsealed) ---------- */
export const TOMES: Tome[] = [
  { id: "i", label: "Tome I · Counting", jp: "算", items: [
    { slug: "counting", num: "I.i", title: "The Multiplication Rite", ready: true },
    { slug: "permutations", num: "I.ii", title: "Permutations", ready: true },
    { slug: "combinations", num: "I.iii", title: "Combinations", ready: true },
  ]},
  { id: "ii", label: "Tome II · Probability", jp: "確率", items: [
    { slug: "probability", num: "II.i", title: "The Nature of Chance", ready: true },
    { slug: "conditional", num: "II.ii", title: "Conditional & Independence", ready: true },
    { slug: "bayes", num: "II.iii", title: "Bayes — The Judgment", ready: true },
  ]},
  { id: "iii", label: "Tome III · Random Variables", jp: "変数", items: [
    { slug: "randomvars", num: "III.i", title: "Random Variables", ready: true },
    { slug: "expectation", num: "III.ii", title: "Expectation & Variance", ready: true },
  ]},
  { id: "iv", label: "Tome IV · Discrete Distributions", jp: "分布", items: [
    { slug: "discrete", num: "IV.i", title: "Discrete & Uniform", ready: true },
    { slug: "binomial", num: "IV.ii", title: "Bernoulli & Binomial", ready: true },
    { slug: "poisson", num: "IV.iii", title: "Poisson & Geometric", ready: true },
    { slug: "jointrv", num: "IV.iv", title: "Multiple Variables", ready: true },
  ]},
  { id: "v", label: "Tome V · The Continuous", jp: "連続", items: [
    { slug: "calculus", num: "V.i", title: "The Calculus Toolkit", ready: true },
    { slug: "continuous", num: "V.ii", title: "Continuous & Uniform", ready: true },
    { slug: "exponential", num: "V.iii", title: "The Exponential", ready: true },
    { slug: "normal", num: "V.iv", title: "The Bell — Normal Law", ready: true },
  ]},
  { id: "vi", label: "Tome VI · Statistics", jp: "統計", items: [
    { slug: "statistics", num: "VI.i", title: "Sample & Population", ready: true },
    { slug: "dispersion", num: "VI.ii", title: "Dispersion & Box Plot", ready: true },
    { slug: "covariance", num: "VI.iii", title: "Covariance & Correlation", ready: true },
  ]},
  { id: "vii", label: "Tome VII · Inference", jp: "推論", items: [
    { slug: "lln", num: "VII.i", title: "Law of Large Numbers", ready: true },
    { slug: "clt", num: "VII.ii", title: "Central Limit Theorem", ready: true },
    { slug: "estimation", num: "VII.iii", title: "Estimation & MLE", ready: true },
  ]},
];

export const READY_ORDER = ["counting", "permutations", "combinations", "probability", "conditional", "bayes", "randomvars", "expectation", "discrete", "binomial", "poisson", "jointrv", "calculus", "continuous", "exponential", "normal", "statistics", "dispersion", "covariance", "lln", "clt", "estimation"];

/* ====================================================== LESSONS ====================================================== */
const BESPOKE: Record<string, Lesson> = {

  /* ----------------------------------------- PROBABILITY */
  probability: {
    id: "probability", num: "II.i", title: "The Nature of Chance", jp: "確率",
    subtitle: "Outcomes, events, and the immutable laws every gamble obeys.",
    blurb: "Sample spaces, events as sets, the three axioms, and the addition rule that forbids double-counting fate.",
    plainJp: "やさしく",
    plain: `<p>Probability is just a number from <strong>0 to 1</strong> saying how likely something is: 0 = never, 1 = certain, 0.5 = a coin's edge. For fair games it is simply <em>(ways it can happen) ÷ (ways anything can happen)</em>.</p><p>Cast a die — the chance of a 4 is <strong>1 favourable face ÷ 6 faces = 1/6</strong>. Every spell in this entire codex is carved upon that one stone.</p><div class="eg"><b>Omen:</b> if two fates cannot occur together, add their chances; if they can overlap, subtract the overlap once so you never count it twice.</div>`,
    sections: [
      { type: "text", dropcap: true, html: `<p>Before fortune can be measured, it must be <em>named</em>. A <strong>random experiment</strong> is any rite whose outcome cannot be foretold with certainty. The <strong>sample space</strong> \\(S\\) is the set of all outcomes it may yield. An <strong>event</strong> is any subset of \\(S\\) — any fate you care to watch for.</p>` },
      { type: "text", html: `<p>Cast a fair die and \\(S=\\{1,2,3,4,5,6\\}\\); the event "even" is \\(\\{2,4,6\\}\\). A space of \\(n\\) outcomes harbours \\(2^{n}\\) possible events. We bind events with the old set-operations:</p>
        <ul><li><strong>Complement</strong> \\(A^c\\) — all that is <em>not</em> \\(A\\).</li><li><strong>Union</strong> \\(A\\cup B\\) — in \\(A\\), or \\(B\\), or both.</li><li><strong>Intersection</strong> \\(A\\cap B\\) — in <em>both</em>.</li><li><strong>Mutually exclusive</strong> — \\(A\\cap B=\\varnothing\\), they cannot both come to pass.</li></ul>` },
      { type: "formula", seal: "I", tex: `0 \\le P(A) \\le 1, \\qquad P(S)=1, \\qquad P(\\varnothing)=0, \\qquad P(A)=\\dfrac{n(A)}{n(S)}`,
        caption: "Kolmogorov's axioms chain probability between 0 and 1. The ratio form holds only when every outcome is equally likely." },
      { type: "widget", id: "coin-lln", title: "The Coin of Convergence", caption: "Cast a coin ten thousand times — watch the share of heads crawl toward its destined 0.5." },
      { type: "text", html: `<p>When two events cannot overlap, their chances simply add. When they <em>can</em> overlap, blind addition counts the shared fate twice — so subtract it once. This is the <strong>law of inclusion and exclusion</strong>.</p>` },
      { type: "formula", seal: "II", tex: `P(A\\cup B) = P(A) + P(B) - P(A\\cap B)`,
        caption: "The Addition Rule. The overlap was tallied twice; strike one copy from the ledger." },
      { type: "example", title: "Of apples and bananas", problem: "In a hall of 50 souls, 30 favour apples, 25 favour bananas, and every soul favours at least one. How many favour both?",
        steps: [`\"At least one\" means \\(A\\cup B\\) covers all 50.`, `Inclusion–exclusion: \\(50 = 30 + 25 - n(A\\cap B)\\).`, `Solve for the overlap.`],
        answer: "5 souls favour both." },
      { type: "note", variant: "key", html: `<strong>Independence.</strong> If knowing \\(A\\) came to pass does not stir \\(B\\)'s chance, the two are independent, and only then does \\(P(A\\cap B)=P(A)\\,P(B)\\). Two non-impossible mutually-exclusive fates can <em>never</em> be independent.` },
      { type: "code", lang: "python", title: "scrying probability by simulation", code: `import random

def p_at_least_one_head(trials=200_000):
    hits = 0
    for _ in range(trials):
        if any(random.random() < 0.5 for _ in range(2)):
            hits += 1
    return hits / trials

print(p_at_least_one_head())   # ~0.75   (the prophecy: 3/4)` },
    ],
    rites: [
      { q: "Recite the three axioms of probability.", a: `<p>(1) <strong>Non-negativity:</strong> \\(P(A)\\ge 0\\). (2) <strong>Normalization:</strong> \\(P(S)=1\\). (3) <strong>Countable additivity:</strong> for mutually exclusive \\(A_1,A_2,\\dots\\), \\(P(\\bigcup_i A_i)=\\sum_i P(A_i)\\). Every other law — even \\(P(A^c)=1-P(A)\\) — is descended from these three.</p>` },
      { q: "Derive the addition rule.", a: `<p>Split \\(A\\cup B\\) into disjoint pieces \\((A\\setminus B),(A\\cap B),(B\\setminus A)\\). Additivity gives \\(P(A\\cup B)=P(A\\setminus B)+P(A\\cap B)+P(B\\setminus A)\\). Since \\(P(A)=P(A\\setminus B)+P(A\\cap B)\\) and likewise for \\(B\\), substitution yields \\(P(A)+P(B)-P(A\\cap B)\\) — the overlap, counted twice, is struck once.</p>` },
      { q: "Why can two non-impossible mutually-exclusive events never be independent?", a: `<p>Mutually exclusive ⇒ \\(P(A\\cap B)=0\\). Independence demands \\(P(A\\cap B)=P(A)P(B)\\). If both are non-impossible, \\(P(A)P(B)>0\\neq 0\\) — a contradiction. Knowing one occurred tells you the other certainly did not: the deepest possible dependence.</p>` },
    ],
    quiz: [
      { type: "mcq", diff: "easy", q: "A coin is cast twice. P(at least one head)?", choices: ["1/2", "1/4", "3/4", "2/3"], answer: 2, explain: "S = {HH,HT,TH,TT}; 3 of 4 outcomes = 3/4." },
      { type: "num", diff: "easy", q: "A reliquary holds 4 red, 3 blue, 5 green stones. P(red or blue), as a decimal?", answer: 0.5833, tol: 0.01, explain: "7/12 ≈ 0.583." },
      { type: "num", diff: "med", q: "P(Math)=0.72, P(Physics)=0.65, P(at least one)=0.88. P(both)?", answer: 0.49, tol: 0.005, explain: "Addition rule: 0.72 + 0.65 − 0.88 = 0.49." },
      { type: "num", diff: "med", q: "Draw 2 from 3 cursed + 7 pure relics (no replacement). P(at least one cursed)?", answer: 0.5333, tol: 0.01, explain: "1 − (7/10)(6/9) = 8/15 ≈ 0.533." },
      { type: "mcq", diff: "hard", q: "Two non-impossible events are mutually exclusive. Independent?", choices: ["Always", "No — they are dependent", "Only if equally likely", "Only for coins"], answer: 1, explain: "MX ⇒ P(A∩B)=0 ≠ P(A)P(B)>0." },
      { type: "num", diff: "hard", q: "A 5-card hand: P(exactly 2 aces & 3 kings) × 10⁵ ≈ ? (enter ≈9.2)", answer: 9.2, tol: 0.3, explain: "C(4,2)C(4,3)/C(52,5) = 24/2,598,960 ≈ 9.2×10⁻⁶." },
    ],
  },

  /* ----------------------------------------- BAYES */
  bayes: {
    id: "bayes", num: "II.iii", title: "Bayes — The Judgment", jp: "審判",
    subtitle: "Flipping a conditional fate around — the engine behind every test that judges you.",
    blurb: "From P(evidence | cause) to P(cause | evidence), and why a positive omen can still mean you are spared.",
    plainJp: "やさしく",
    plain: `<p>A test names you a carrier of a <strong>rare</strong> affliction. Dread — but stay your hand. If almost no soul carries it, even a fine test conjures many <em>false omens</em>. Bayes' Theorem is the careful rite that weds <strong>"how rare it is"</strong> to <strong>"how true the test is"</strong> and returns your <em>real</em> chance of being marked.</p><p>It flips the question you can measure — "chance of a positive test if you ARE marked" — into the one you fear — "chance you are marked GIVEN the positive test."</p><div class="eg"><b>Verdict:</b> with a 1-in-1000 curse and a 99% test, a single positive omen still usually means you are clean — the rarity prevails.</div>`,
    sections: [
      { type: "text", dropcap: true, html: `<p>You know the world <em>forwards</em>: the chance an omen appears given a hidden cause. Yet you crave the <em>reverse</em> — the chance of the cause, given the omen. Bayes' Theorem is the incantation that turns the arrow around.</p>` },
      { type: "formula", seal: "審", tex: `P(B_r\\mid A) = \\dfrac{P(A\\mid B_r)\\,P(B_r)}{\\displaystyle\\sum_i P(A\\mid B_i)\\,P(B_i)}`,
        caption: "The denominator is the Law of Total Probability for P(A). The numerator is the single cause you interrogate." },
      { type: "note", variant: "key", html: `<strong>Read it as a verdict.</strong> Prior belief \\(P(B_r)\\) × how well the cause explains the omen \\(P(A\\mid B_r)\\), divided by how likely the omen was across <em>all</em> causes. What emerges is your updated belief — the posterior.` },
      { type: "example", title: "The seatbelt and the speeding charge", problem: "9 in 10 wear belts. Booked-for-speeding rates: 20% (belted) vs 60% (un-belted). A driver is booked — P(they wore a belt)?",
        steps: [`Numerator (belted & booked): \\(0.9 \\times 0.2 = 0.18\\).`, `Denominator (any booking): \\(0.9(0.2)+0.1(0.6)=0.24\\).`, `\\(P=\\dfrac{0.18}{0.24}\\).`],
        answer: "0.75." },
      { type: "widget", id: "bayes", title: "The Base-Rate Tribunal", caption: "Turn the dials of prevalence, sensitivity, specificity. A field of 1,000 souls reveals why rare curses deceive good tests." },
      { type: "note", variant: "warn", html: `<strong>The base-rate snare.</strong> A 99%-true test for a 1-in-1000 curse yields mostly <em>false</em> condemnations — the multitude of the clean drowns the few afflicted. A positive omen multiplies your prior; it does not replace it.` },
      { type: "code", lang: "python", title: "a tribunal in three lines", code: `def posterior(prior, sens, spec):
    p_pos = prior*sens + (1-prior)*(1-spec)
    return prior*sens / p_pos        # P(cursed | positive)

print(posterior(0.01, 0.99, 0.95))  # 0.1667  -- the base-rate snare
print(posterior(0.20, 0.99, 0.95))  # 0.8319` },
    ],
    rites: [
      { q: "State and prove Bayes' Theorem.", a: `<p>For a partition \\(B_1,\\dots,B_k\\) and event \\(A\\) with \\(P(A)>0\\): \\(P(B_r\\mid A)=\\dfrac{P(A\\mid B_r)P(B_r)}{\\sum_i P(A\\mid B_i)P(B_i)}\\). <strong>Proof:</strong> by definition \\(P(B_r\\mid A)=\\dfrac{P(A\\cap B_r)}{P(A)}\\). The numerator is \\(P(A\\mid B_r)P(B_r)\\) (multiplication rule); the denominator is \\(\\sum_i P(A\\mid B_i)P(B_i)\\) (total probability). Substitute.</p>` },
      { q: "Explain the base-rate fallacy.", a: `<p>It is mistaking the test's accuracy for the probability of the condition, ignoring the prior. With prevalence 1%, sensitivity 99%, specificity 95%, among 1000 souls ~10 are afflicted (≈10 true positives) but ~50 healthy souls also test positive. Thus \\(P(\\text{cursed}\\mid +)=10/60\\approx 17\\%\\) — far below 99%. The vast healthy population dominates.</p>` },
      { q: "Distinguish prior, likelihood and posterior.", a: `<p><strong>Prior</strong> \\(P(B_r)\\): belief before the omen. <strong>Likelihood</strong> \\(P(A\\mid B_r)\\): how probable the omen is under that cause. <strong>Posterior</strong> \\(P(B_r\\mid A)\\): belief after seeing the omen. Bayes binds them: posterior ∝ likelihood × prior.</p>` },
    ],
    quiz: [
      { type: "num", diff: "easy", q: "Engine available 0.98, ambulance 0.92, independent. P(both)?", answer: 0.9016, tol: 0.005, explain: "0.98 × 0.92 = 0.9016." },
      { type: "num", diff: "med", q: "35% of letters are cursed. P('WIN'|cursed)=0.70, P('WIN'|pure)=0.08. A 'WIN' letter — P(cursed)?", answer: 0.8249, tol: 0.01, explain: "Total P(WIN)=0.297; posterior = 0.245/0.297 ≈ 0.825." },
      { type: "num", diff: "med", q: "Curse afflicts 5%. Sensitivity 90%, false-positive 5%. A positive omen — P(cursed)?", answer: 0.486, tol: 0.02, explain: "P(+)=0.0925; posterior = 0.045/0.0925 ≈ 0.486." },
      { type: "num", diff: "hard", q: "Fraud 1%. Sensitivity 96%, false-positive 4%. A flagged rite — P(fraud)?", answer: 0.195, tol: 0.02, explain: "P(flag)=0.0492; posterior = 0.0096/0.0492 ≈ 0.195." },
      { type: "mcq", diff: "hard", q: "Why is the fraud verdict so low despite 96% detection?", choices: ["The test is broken", "The pure multitude breeds false positives (base rate)", "Fraud is impossible", "Mere rounding"], answer: 1, explain: "99% legitimate × 4% false-positive swamps the 1% fraud base." },
    ],
  },

  /* ----------------------------------------- EXPECTATION */
  expectation: {
    id: "expectation", num: "III.ii", title: "Expectation & Variance", jp: "期待",
    subtitle: "The centre of a fortune, and how wildly destiny scatters around it.",
    blurb: "E[X] as the long-run average, the variance shortcut, the unbroken law of linearity, and why diversification tames risk.",
    plainJp: "やさしく",
    plain: `<p>A game pays ₹100 half the time and ₹0 the other half. What do you "expect"? Not 100, not 0 — it is <strong>₹50</strong>, the average you would reap if you played until the end of days. That is <em>expectation</em>: the long-run average.</p><p>Then <em>variance</em> asks the next question: do the spoils huddle near that average, or lurch wildly? Small variance = steady fate; large variance = a gambler's ruin.</p><div class="eg"><b>Heed:</b> the expected value need not even be attainable — averaging 0 and 100 gives 50, a sum the game never pays.</div>`,
    sections: [
      { type: "text", dropcap: true, html: `<p>Imagine living the same uncertain month across a thousand parallel fates, then averaging your gain over all of them. That phantom average is the <strong>expected value</strong> — a probability-weighted mean.</p>` },
      { type: "formula", seal: "期", tex: `E[X] = \\sum_x x\\,p_X(x) \\qquad\\Big(\\text{continuous: } \\textstyle\\int x f_X(x)\\,dx\\Big)`,
        caption: "Each value, weighted by its chance, summed — the point where the distribution would balance on a knife's edge." },
      { type: "note", variant: "key", html: `<strong>Linearity of expectation</strong> — the most reliable blade in the armory: \\(E[aX+bY]=aE[X]+bE[Y]\\), <em>always</em>, with no oath of independence. Also \\(E[c]=c\\) and \\(E[\\mathbb{1}_A]=P(A)\\).` },
      { type: "widget", id: "expectation", title: "The Wheel of Fortune", caption: "Inscribe payouts and their odds, then spin a thousandfold and watch the running average descend upon E[X]." },
      { type: "text", html: `<p>Two souls may both average 50 marks — yet one is steadfast and the other a tempest. We need a measure of <em>scatter</em>. Variance is the average squared distance from the mean:</p>` },
      { type: "formula", seal: "σ", tex: `\\operatorname{Var}(X) = E[(X-\\mu)^2] = E[X^2] - (E[X])^2, \\qquad \\sigma=\\sqrt{\\operatorname{Var}(X)}`,
        caption: "The right-hand 'shortcut' form is almost always the easier rite to perform." },
      { type: "example", title: "The ice-cream ledger", problem: "Sales X take values 10,15,20,25,30 with chances .20,.25,.15,.30,.10. Find Var(X).",
        steps: [`\\(E[X] = 19.25\\).`, `\\(E[X^2] = 413.75\\).`, `\\(\\operatorname{Var}(X) = 413.75 - 19.25^2\\).`],
        answer: "Var ≈ 43.19, so σ ≈ 6.57." },
      { type: "note", variant: "tip", html: `<strong>Laws of variance.</strong> \\(\\operatorname{Var}(c)=0\\); \\(\\operatorname{Var}(aX)=a^2\\operatorname{Var}(X)\\) (mark the square!); for <em>independent</em> X,Y, \\(\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)\\). That \\(a^2\\) is precisely why scattering gold across independent ventures shrinks a portfolio's peril.` },
      { type: "code", lang: "python", title: "E[X] and Var(X) from a PMF", code: `import numpy as np
x = np.array([10,15,20,25,30])
p = np.array([.20,.25,.15,.30,.10])
EX  = (x*p).sum()
var = (x**2*p).sum() - EX**2
print(EX, var, var**0.5)   # 19.25  43.1875  6.572` },
    ],
    rites: [
      { q: "Prove the variance shortcut Var(X) = E[X²] − (E[X])².", a: `<p>Let \\(\\mu=E[X]\\). \\(\\operatorname{Var}(X)=E[(X-\\mu)^2]=E[X^2-2\\mu X+\\mu^2]\\). By linearity \\(=E[X^2]-2\\mu E[X]+\\mu^2=E[X^2]-2\\mu^2+\\mu^2=E[X^2]-\\mu^2\\).</p>` },
      { q: "State linearity of expectation. Does it require independence?", a: `<p>\\(E[aX+bY]=aE[X]+bE[Y]\\) for any constants and any variables. It follows straight from the definition (sums/integrals are linear) and holds <strong>without</strong> independence — its great power. Variance, by contrast, only adds for <em>independent</em> variables.</p>` },
      { q: "Why is Var(aX) = a²Var(X), not aVar(X)?", a: `<p>\\(\\operatorname{Var}(aX)=E[(aX-a\\mu)^2]=a^2E[(X-\\mu)^2]=a^2\\operatorname{Var}(X)\\). Scaling stretches each deviation by \\(a\\), and variance squares deviations — hence \\(a^2\\). (Standard deviation scales by \\(|a|\\).)</p>` },
    ],
    quiz: [
      { type: "num", diff: "easy", q: "Win 10 on {1,2,3}, lose 5 on {4,5,6} of a fair die. E[winnings]?", answer: 2.5, tol: 0.01, explain: "10(½) − 5(½) = 2.5." },
      { type: "mcq", diff: "easy", q: "If Var(X) = 0, then X is…", choices: ["impossible", "constant", "uniform", "negative"], answer: 1, explain: "Zero scatter means X never strays — a constant." },
      { type: "num", diff: "med", q: "PMF P(1)=.5, P(5)=.3, P(10)=.2. Find Var(X).", answer: 12, tol: 0.1, explain: "E[X]=4, E[X²]=28, Var=12." },
      { type: "mcq", diff: "med", q: "Doubling every wager (2X) multiplies the variance by…", choices: ["2", "4", "√2", "1"], answer: 1, explain: "Var(2X)=2²·Var(X)=4·Var(X)." },
      { type: "num", diff: "hard", q: "Venture A: E=100,Var=400. Venture B: E=80,Var=250. Independent, plus a fixed bond of 50. Portfolio variance?", answer: 650, tol: 0, explain: "The constant adds 0; independence ⇒ 400+250 = 650." },
      { type: "num", diff: "hard", q: "Portfolio 0.5·Stocks(Var=100)+0.3·Bonds(Var=25)+0.2·Cash(Var=0), independent. Var(P)?", answer: 27.25, tol: 0.05, explain: ".25·100 + .09·25 + 0 = 27.25." },
    ],
  },

  /* ----------------------------------------- NORMAL */
  normal: {
    id: "normal", num: "V.iv", title: "The Bell — Normal Law", jp: "正規",
    subtitle: "The sovereign curve, and how the z-score bends every bell into one.",
    blurb: "The Gaussian density, the 68–95–99.7 rule, standardisation Z=(X−μ)/σ, and reading the standard normal.",
    plainJp: "やさしく",
    plain: `<p>Heights, marks, the trembling of a measuring hand — most values gather in the <strong>middle</strong>, fewer at the edges, forming a smooth, symmetric <strong>bell</strong>. That is the <em>Normal</em> law, the most powerful curve in all of statistics.</p><p>A useful charm (68–95–99.7): about <strong>68%</strong> of values fall within one step (σ) of the mean, about <strong>95%</strong> within two, and nearly all within three.</p><div class="eg"><b>The z-score</b> asks "how many steps above the mean am I?" — turning any bell into one standard bell readable from a single table.</div>`,
    sections: [
      { type: "text", dropcap: true, html: `<p>The <strong>Normal</strong>, or Gaussian, is the famous symmetric bell. It rises wherever a great many small, independent influences are summed — which (by a theorem yet to come) is nearly everywhere.</p>` },
      { type: "formula", seal: "正", tex: `f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\qquad X\\sim N(\\mu,\\sigma^2)`,
        caption: "Centred at μ, its width set by σ. Symmetric about the mean; mean = median = mode." },
      { type: "note", variant: "key", html: `<strong>The 68–95–99.7 rule.</strong> Roughly 68% of the mass lies within \\(\\mu\\pm\\sigma\\), 95% within \\(\\mu\\pm2\\sigma\\), and 99.7% within \\(\\mu\\pm3\\sigma\\). Beyond \\(3\\sigma\\) lies the realm of omens.` },
      { type: "formula", seal: "Z", tex: `Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1), \\qquad P(a\\le X\\le b)=\\Phi\\!\\Big(\\tfrac{b-\\mu}{\\sigma}\\Big)-\\Phi\\!\\Big(\\tfrac{a-\\mu}{\\sigma}\\Big)`,
        caption: "Standardisation: subtract the mean, divide by σ. Every normal probability becomes one standard-normal reading Φ." },
      { type: "widget", id: "normal", title: "The Bell Apparatus", caption: "Turn μ and σ, shade an interval, and read the probability, the z-scores, and the 68% band — or invoke the standard Z." },
      { type: "example", title: "Of marks and z-scores", problem: "Scores follow N(70, 10²). What fraction lie between 60 and 90?",
        steps: [`\\(z_{60}=\\frac{60-70}{10}=-1\\), \\(z_{90}=\\frac{90-70}{10}=2\\).`, `\\(\\Phi(2)-\\Phi(-1)\\approx 0.9772-0.1587\\).`],
        answer: "≈ 0.8186 — about 82%." },
      { type: "note", variant: "tip", html: `<strong>Why the bell rules.</strong> A linear charm of a normal is normal; the sum of independent normals is normal; and — by the Central Limit Theorem — the averages of almost <em>anything</em> become normal. This is why the curve haunts every science.` },
      { type: "code", lang: "python", title: "normal probabilities with scipy", code: `from scipy.stats import norm
X = norm(loc=70, scale=10)        # N(70, 10^2)
print(X.cdf(90) - X.cdf(60))      # 0.8186
print(norm.cdf(1) - norm.cdf(-1)) # 0.6827  (the 68% rule)
print(norm.ppf(0.975))            # 1.96  (z for 95% two-sided)` },
    ],
    rites: [
      { q: "What is standardisation, and why is it useful?", a: `<p>It maps \\(X\\sim N(\\mu,\\sigma^2)\\) to \\(Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1)\\), with \\(E[Z]=0,\\ \\operatorname{Var}(Z)=1\\). Thus <em>every</em> normal probability collapses to a single standard-normal reading from one Φ table. The z-score also states a value as 'number of standard deviations from the mean', making different normals comparable.</p>` },
      { q: "State the empirical (68–95–99.7) rule and what it implies about outliers.", a: `<p>For \\(N(\\mu,\\sigma^2)\\): ≈68% within \\(\\mu\\pm\\sigma\\), ≈95% within \\(\\mu\\pm2\\sigma\\), ≈99.7% within \\(\\mu\\pm3\\sigma\\). A value beyond \\(3\\sigma\\) (|z|>3) appears only ≈0.3% of the time — a serviceable threshold for an outlier.</p>` },
      { q: "List the key properties of the normal distribution.", a: `<p>Symmetric about \\(\\mu\\) (mean = median = mode); bell-shaped with inflection points at \\(\\mu\\pm\\sigma\\); fully fixed by \\((\\mu,\\sigma^2)\\); closed under linear transforms and under sums of independent normals. These, with the CLT, place it at the heart of inference.</p>` },
    ],
    quiz: [
      { type: "num", diff: "easy", q: "Roughly what % of normal mass lies within μ ± σ?", answer: 68, tol: 2, explain: "≈68% (the empirical rule)." },
      { type: "num", diff: "easy", q: "X~N(70,10²). The z-score of X=85?", answer: 1.5, tol: 0.01, explain: "(85−70)/10 = 1.5." },
      { type: "num", diff: "med", q: "Standard normal. P(Z<0)?", answer: 0.5, tol: 0.01, explain: "Symmetry about 0." },
      { type: "num", diff: "med", q: "X~N(70,10²). P(60<X<90), as a decimal?", answer: 0.8186, tol: 0.02, explain: "Φ(2)−Φ(−1) ≈ 0.819." },
      { type: "num", diff: "hard", q: "Two-sided 95%: the z with P(−z<Z<z)=0.95?", answer: 1.96, tol: 0.05, explain: "z ≈ 1.96." },
      { type: "num", diff: "hard", q: "X~N(100,15²). P(X>130), as a decimal?", answer: 0.0228, tol: 0.01, explain: "z=2, 1−Φ(2) ≈ 0.0228." },
    ],
  },
};

export const LESSONS: Record<string, Lesson> = { ...GENERATED, ...BESPOKE };
