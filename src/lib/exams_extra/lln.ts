import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "A population has mean \\(\\mu=70\\) and standard deviation \\(\\sigma=15\\). A random sample of size \\(n=25\\) is drawn and the sample mean \\(\\bar{X}\\) is computed. State the mean and standard deviation (standard error) of \\(\\bar{X}\\).",
    steps: [
      "The sampling distribution of the mean has \\(E(\\bar{X})=\\mu\\) regardless of \\(n\\), so \\(E(\\bar{X})=70\\).",
      "The variance of the sample mean is \\(\\operatorname{Var}(\\bar{X})=\\dfrac{\\sigma^2}{n}=\\dfrac{15^2}{25}=\\dfrac{225}{25}=9\\).",
      "The standard error is the square root of this variance: \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt{n}}=\\dfrac{15}{\\sqrt{25}}=\\dfrac{15}{5}=3\\).",
      "Note that the SE (3) is much smaller than the population SD (15): averaging reduces variability by the factor \\(\\sqrt{n}=5\\).",
    ],
    answer: "\\(E(\\bar{X})=70\\), \\(\\operatorname{Var}(\\bar{X})=9\\), and \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt{n}}=3\\).",
  },
  {
    board: "A-Level",
    q: "Measurements of a quantity have standard deviation \\(\\sigma=8\\). How large must the sample size \\(n\\) be so that the standard error of the sample mean is <b>at most 0.5</b>?",
    steps: [
      "The standard error is \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt{n}}=\\dfrac{8}{\\sqrt{n}}\\).",
      "Require \\(\\dfrac{8}{\\sqrt{n}}\\le 0.5\\), i.e. \\(\\sqrt{n}\\ge\\dfrac{8}{0.5}=16\\).",
      "Square both sides: \\(n\\ge 16^2=256\\).",
      "Since \\(n\\) must be a whole number, the smallest sample size is \\(n=256\\). (Halving the SE from a previous value would require quadrupling \\(n\\) — the \\(\\sqrt{n}\\) law.)",
    ],
    answer: "\\(n\\ge 256\\); the minimum sample size is \\(n=256\\).",
  },
  {
    board: "A-Level",
    q: "The standard error of the mean for a sample of size 50 is found to be 4. If the population standard deviation is unchanged, by what factor must the sample size be increased to <b>halve</b> the standard error, and what is the new sample size?",
    steps: [
      "Since \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt{n}}\\), the SE is inversely proportional to \\(\\sqrt{n}\\).",
      "To halve the SE we need \\(\\sqrt{n}\\) to double, i.e. \\(\\sqrt{n_{\\text{new}}}=2\\sqrt{n_{\\text{old}}}\\).",
      "Squaring gives \\(n_{\\text{new}}=4\\,n_{\\text{old}}\\): the sample size must be multiplied by 4.",
      "New size \\(=4\\times 50=200\\). (This is the practical cost of the \\(\\sqrt{n}\\) law: precision improves only with the square root of effort.)",
    ],
    answer: "Multiply \\(n\\) by 4; the new sample size is \\(n=200\\).",
  },
  {
    board: "A-Level",
    q: "A fair coin is tossed \\(n=100\\) times. Let \\(S\\) be the number of heads. Find the mean and standard deviation of \\(S\\), and the standard deviation of the <b>proportion</b> of heads \\(\\hat{p}=S/n\\).",
    steps: [
      "The count of heads is \\(S\\sim\\text{Bin}(n,p)\\) with \\(n=100\\), \\(p=\\tfrac12\\), so \\(E(S)=np=100\\cdot\\tfrac12=50\\).",
      "The standard deviation of the count is \\(\\text{SD}(S)=\\sqrt{np(1-p)}=\\sqrt{100\\cdot\\tfrac12\\cdot\\tfrac12}=\\sqrt{25}=5\\).",
      "The proportion is \\(\\hat{p}=S/n\\), so \\(\\text{SD}(\\hat{p})=\\dfrac{\\text{SD}(S)}{n}=\\dfrac{5}{100}=0.05\\).",
      "Equivalently \\(\\text{SD}(\\hat{p})=\\sqrt{\\dfrac{p(1-p)}{n}}=\\sqrt{\\dfrac{0.25}{100}}=\\sqrt{0.0025}=0.05\\), confirming the result.",
    ],
    answer: "\\(E(S)=50\\), \\(\\text{SD}(S)=5\\), and \\(\\text{SD}(\\hat{p})=0.05\\).",
  },
  {
    board: "A-Level",
    q: "A gambler observes that a fair roulette wheel has landed on <b>red 8 times in a row</b>. He argues that black is now 'due' and is more likely than red on the next spin (each colour otherwise has probability \\(\\tfrac{18}{38}\\)). Is he correct? Explain using the Law of Large Numbers.",
    steps: [
      "Successive spins of a fair wheel are <b>independent</b>: the wheel has no memory of past outcomes.",
      "Therefore \\(P(\\text{black on next spin})=\\dfrac{18}{38}\\) exactly as before, unaffected by the run of reds. The gambler commits the <b>gambler's fallacy</b>.",
      "The Law of Large Numbers says the long-run <b>proportion</b> of reds tends to \\(p\\); it does NOT say short runs must self-correct.",
      "The balancing happens by the growing denominator \\(n\\) <b>diluting</b> early imbalances, not by future outcomes compensating for them.",
    ],
    answer: "No. Spins are independent, so \\(P(\\text{black})=\\tfrac{18}{38}\\) regardless of the run. The LLN concerns long-run proportions diluting deviations, not short-run 'self-correction'.",
  },
  {
    board: "A-Level",
    q: "Heights of adult males are normally distributed as \\(N(178,\\,7^2)\\) cm. A random sample of \\(n=49\\) men is taken. State the exact distribution of the sample mean \\(\\bar{X}\\) and find \\(P(\\bar{X}>180)\\). (Use \\(\\Phi(2)=0.9772\\).)",
    steps: [
      "When the population is normal, the sample mean is <b>exactly</b> normal for every \\(n\\): \\(\\bar{X}\\sim N\\!\\left(\\mu,\\ \\dfrac{\\sigma^2}{n}\\right)\\).",
      "Here \\(\\mu=178\\) and \\(\\dfrac{\\sigma^2}{n}=\\dfrac{49}{49}=1\\), so \\(\\bar{X}\\sim N(178,\\,1)\\) and the standard error is \\(\\sqrt{1}=1\\).",
      "Standardise: \\(z=\\dfrac{180-178}{1}=2\\).",
      "\\(P(\\bar{X}>180)=P(Z>2)=1-\\Phi(2)=1-0.9772=0.0228\\).",
    ],
    answer: "\\(\\bar{X}\\sim N(178,\\,1)\\); \\(P(\\bar{X}>180)=0.0228\\).",
  },
  {
    board: "A-Level",
    q: "A quality inspector wants the standard error of the estimated mean fill-volume to be 0.2 ml, given that the filling machine has \\(\\sigma=2.5\\) ml. The cost of sampling is 3 currency units per item. Find the required sample size and the total sampling cost.",
    steps: [
      "Set \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt{n}}=0.2\\) with \\(\\sigma=2.5\\): \\(\\dfrac{2.5}{\\sqrt{n}}=0.2\\).",
      "Solve for \\(\\sqrt{n}\\): \\(\\sqrt{n}=\\dfrac{2.5}{0.2}=12.5\\).",
      "Square: \\(n=12.5^2=156.25\\); round <b>up</b> to guarantee the SE target, giving \\(n=157\\).",
      "Total cost \\(=157\\times 3=471\\) currency units.",
    ],
    answer: "\\(n=157\\) items; total cost \\(=471\\) currency units.",
  },
  {
    board: "A-Level",
    q: "A random variable \\(X\\) has mean \\(\\mu=20\\) and variance \\(\\sigma^2=36\\). For a sample of size \\(n=9\\), use the linearity rules to verify that \\(E(\\bar{X})=\\mu\\) and \\(\\operatorname{Var}(\\bar{X})=\\sigma^2/n\\) starting from \\(\\bar{X}=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i\\).",
    steps: [
      "By linearity of expectation, \\(E(\\bar{X})=\\dfrac{1}{n}\\sum_{i=1}^{n}E(X_i)=\\dfrac{1}{n}\\,(n\\mu)=\\mu=20\\).",
      "The \\(X_i\\) are independent, so variances add: \\(\\operatorname{Var}\\!\\left(\\sum_{i=1}^{n}X_i\\right)=\\sum_{i=1}^{n}\\operatorname{Var}(X_i)=n\\sigma^2\\).",
      "Scaling by \\(\\dfrac{1}{n}\\) multiplies the variance by \\(\\dfrac{1}{n^2}\\): \\(\\operatorname{Var}(\\bar{X})=\\dfrac{1}{n^2}\\,(n\\sigma^2)=\\dfrac{\\sigma^2}{n}\\).",
      "Numerically \\(\\operatorname{Var}(\\bar{X})=\\dfrac{36}{9}=4\\), so \\(\\text{SE}=\\sqrt{4}=2\\).",
    ],
    answer: "\\(E(\\bar{X})=\\mu=20\\) and \\(\\operatorname{Var}(\\bar{X})=\\dfrac{\\sigma^2}{n}=4\\) (so \\(\\text{SE}=2\\)).",
  },
];
