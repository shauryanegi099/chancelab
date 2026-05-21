import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "The time to serve a customer has mean \\(\\mu=250\\) s and standard deviation \\(\\sigma=30\\) s (distribution unknown). For a random sample of \\(n=36\\) customers, use the Central Limit Theorem to find \\(P(\\bar{X}>255)\\). (Use \\(\\Phi(1)=0.8413\\).)",
    steps: [
      "Although the service-time distribution is unknown, the CLT gives \\(\\bar{X}\\approx N\\!\\left(\\mu,\\ \\dfrac{\\sigma^2}{n}\\right)\\) for large \\(n\\).",
      "The standard error is \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt{n}}=\\dfrac{30}{\\sqrt{36}}=\\dfrac{30}{6}=5\\) s.",
      "Standardise: \\(z=\\dfrac{255-250}{5}=1\\).",
      "\\(P(\\bar{X}>255)=P(Z>1)=1-\\Phi(1)=1-0.8413=0.1587\\).",
    ],
    answer: "\\(P(\\bar{X}>255)\\approx 0.1587\\).",
  },
  {
    board: "A-Level",
    q: "A population has mean \\(\\mu=100\\) and standard deviation \\(\\sigma=16\\). A random sample of \\(n=64\\) is taken. Using the CLT, find \\(P(96<\\bar{X}<104)\\). (Use \\(\\Phi(2)=0.9772\\).)",
    steps: [
      "By the CLT, \\(\\bar{X}\\approx N\\!\\left(100,\\ \\dfrac{16^2}{64}\\right)\\); the standard error is \\(\\text{SE}=\\dfrac{16}{\\sqrt{64}}=\\dfrac{16}{8}=2\\).",
      "Lower bound: \\(z_1=\\dfrac{96-100}{2}=-2\\). Upper bound: \\(z_2=\\dfrac{104-100}{2}=2\\).",
      "\\(P(96<\\bar{X}<104)=\\Phi(2)-\\Phi(-2)=\\Phi(2)-[1-\\Phi(2)]=2\\Phi(2)-1\\).",
      "\\(=2(0.9772)-1=1.9544-1=0.9544\\).",
    ],
    answer: "\\(P(96<\\bar{X}<104)\\approx 0.9544\\).",
  },
  {
    board: "A-Level",
    q: "The weight of one apple has mean \\(\\mu=120\\) g and standard deviation \\(\\sigma=25\\) g. A bag holds \\(n=100\\) independently chosen apples. Using the CLT, find the probability that the <b>total weight</b> exceeds 12.3 kg. (Use \\(\\Phi(1.2)=0.8849\\).)",
    steps: [
      "Let \\(T=\\sum_{i=1}^{100}X_i\\) be the total weight. Then \\(E(T)=n\\mu=100\\cdot120=12000\\) g.",
      "Since the apples are independent, variances add: \\(\\operatorname{Var}(T)=n\\sigma^2=100\\cdot 25^2=62500\\), so \\(\\text{SD}(T)=\\sqrt{62500}=250\\) g.",
      "By the CLT, \\(T\\approx N(12000,\\,250^2)\\). Convert 12.3 kg \\(=12300\\) g and standardise: \\(z=\\dfrac{12300-12000}{250}=\\dfrac{300}{250}=1.2\\).",
      "\\(P(T>12300)=P(Z>1.2)=1-\\Phi(1.2)=1-0.8849=0.1151\\).",
    ],
    answer: "\\(P(T>12.3\\text{ kg})\\approx 0.1151\\).",
  },
  {
    board: "A-Level",
    q: "A fair die is rolled \\(n=180\\) times. Let \\(X\\) be the number of sixes. Using the normal approximation to the binomial <b>with a continuity correction</b>, estimate \\(P(X\\ge 36)\\). (Use \\(\\Phi(1)=0.8413\\).)",
    steps: [
      "Here \\(X\\sim\\text{Bin}(180,\\tfrac16)\\), so \\(\\mu=np=180\\cdot\\tfrac16=30\\) and \\(\\sigma^2=np(1-p)=180\\cdot\\tfrac16\\cdot\\tfrac56=25\\), giving \\(\\sigma=5\\).",
      "The approximation is valid since \\(np=30\\) and \\(n(1-p)=150\\) are both \\(\\ge 5\\). Approximate \\(X\\approx N(30,\\,25)\\).",
      "For \\(P(X\\ge 36)\\) (a discrete 'at least'), apply the continuity correction by using \\(35.5\\): \\(P(X\\ge36)\\approx P(Y>35.5)\\).",
      "Standardise: \\(z=\\dfrac{35.5-30}{5}=1.1\\). Then \\(P(Y>35.5)=1-\\Phi(1.1)=1-0.8643=0.1357\\). (Using \\(\\Phi(1.1)=0.8643\\).)",
    ],
    answer: "\\(P(X\\ge 36)\\approx 1-\\Phi(1.1)=0.1357\\).",
  },
  {
    board: "A-Level",
    q: "In a large batch, 50% of components are type A. A random sample of \\(n=400\\) is taken. Let \\(X\\) be the number of type-A components. Using the normal approximation with a continuity correction, find \\(P(X\\le 210)\\). (Use \\(\\Phi(1)=0.8413\\).)",
    steps: [
      "\\(X\\sim\\text{Bin}(400,\\,0.5)\\), so \\(\\mu=np=400\\cdot0.5=200\\) and \\(\\sigma=\\sqrt{np(1-p)}=\\sqrt{400\\cdot0.5\\cdot0.5}=\\sqrt{100}=10\\).",
      "Both \\(np=200\\) and \\(n(1-p)=200\\) exceed 5, so approximate \\(X\\approx N(200,\\,100)\\).",
      "For the discrete event \\(X\\le 210\\), the continuity correction uses \\(210.5\\): \\(P(X\\le 210)\\approx P(Y<210.5)\\).",
      "Standardise: \\(z=\\dfrac{210.5-200}{10}=1.05\\); thus \\(P(Y<210.5)=\\Phi(1.05)=0.8531\\). (Using \\(\\Phi(1.05)=0.8531\\).)",
    ],
    answer: "\\(P(X\\le 210)\\approx \\Phi(1.05)=0.8531\\).",
  },
  {
    board: "A-Level",
    q: "A population has \\(\\sigma=20\\). We want the sample mean \\(\\bar{X}\\) to lie within 4 units of \\(\\mu\\) with probability 0.95, i.e. \\(P(|\\bar{X}-\\mu|<4)=0.95\\). Using the CLT, find the required sample size \\(n\\). (Use \\(\\Phi(1.96)=0.975\\).)",
    steps: [
      "By the CLT, \\(\\dfrac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\approx Z\\sim N(0,1)\\). The condition \\(P(|Z|<z^{*})=0.95\\) needs \\(z^{*}=1.96\\) since \\(\\Phi(1.96)=0.975\\).",
      "The half-width in standard-error units is \\(\\dfrac{4}{\\sigma/\\sqrt{n}}\\); set this equal to \\(1.96\\): \\(\\dfrac{4\\sqrt{n}}{20}=1.96\\).",
      "Solve for \\(\\sqrt{n}\\): \\(\\sqrt{n}=\\dfrac{1.96\\times 20}{4}=\\dfrac{39.2}{4}=9.8\\).",
      "Square and round <b>up</b>: \\(n=9.8^2=96.04\\Rightarrow n=97\\).",
    ],
    answer: "\\(n\\ge 96.04\\), so the minimum sample size is \\(n=97\\).",
  },
  {
    board: "A-Level",
    q: "A random variable \\(X\\) has \\(\\mu=5\\) and \\(\\sigma=3\\). For a sample of size \\(n=144\\), find the value \\(a\\) such that \\(P(\\bar{X}<a)=0.9772\\). (Use \\(\\Phi(2)=0.9772\\).)",
    steps: [
      "By the CLT, \\(\\bar{X}\\approx N\\!\\left(5,\\ \\dfrac{\\sigma^2}{n}\\right)\\) with \\(\\text{SE}=\\dfrac{3}{\\sqrt{144}}=\\dfrac{3}{12}=0.25\\).",
      "We need the \\(z\\)-value with \\(\\Phi(z)=0.9772\\); from the given value \\(z=2\\).",
      "Convert back to the \\(\\bar{X}\\) scale: \\(a=\\mu+z\\cdot\\text{SE}=5+2(0.25)\\).",
      "\\(a=5+0.5=5.5\\).",
    ],
    answer: "\\(a=5.5\\).",
  },
  {
    board: "A-Level",
    q: "State the conditions under which the Central Limit Theorem allows \\(\\bar{X}\\) to be treated as approximately normal, and explain why a sample of \\(n=4\\) from a strongly right-skewed population is generally <b>not</b> adequate.",
    steps: [
      "The CLT applies when the sample consists of <b>independent, identically distributed</b> observations from a population with a <b>finite mean \\(\\mu\\) and finite variance \\(\\sigma^2\\)</b>.",
      "As the sample size grows, \\(\\bar{X}\\) approaches \\(N\\!\\left(\\mu,\\ \\sigma^2/n\\right)\\); the approximation improves with larger \\(n\\). A common rule of thumb is \\(n\\ge 30\\) for moderately non-normal populations.",
      "The required \\(n\\) depends on the population shape: a nearly symmetric population needs only a small \\(n\\), while heavy skew needs a larger \\(n\\) before the bell shape emerges.",
      "With \\(n=4\\) from a strongly right-skewed population, too few values are averaged to wash out the skew, so the sampling distribution of \\(\\bar{X}\\) is still noticeably skewed and the normal approximation is unreliable. (If the population is itself exactly normal, however, \\(\\bar{X}\\) is exactly normal for any \\(n\\).)",
    ],
    answer: "Need i.i.d. observations with finite \\(\\mu\\) and \\(\\sigma^2\\), and \\(n\\) large enough for the shape (often \\(n\\ge 30\\)). With \\(n=4\\) and heavy skew, too few values are averaged, so \\(\\bar{X}\\) stays skewed and the normal approximation fails.",
  },
];
