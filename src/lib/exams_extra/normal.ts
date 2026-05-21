import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "The heights of adult men are normally distributed with mean \\(\\mu=175\\) cm and standard deviation \\(\\sigma=8\\) cm. Find (a) \\(P(X<183)\\) and (b) \\(P(167<X<191)\\). Use \\(\\Phi(1)=0.8413\\) and \\(\\Phi(2)=0.9772\\).",
    steps: [
      "(a) Standardise: \\(z=\\dfrac{183-175}{8}=1\\), so \\(P(X<183)=\\Phi(1)=0.8413\\).",
      "(b) Lower limit: \\(z_1=\\dfrac{167-175}{8}=-1\\); upper limit: \\(z_2=\\dfrac{191-175}{8}=2\\).",
      "\\(P(167<X<191)=\\Phi(2)-\\Phi(-1)\\). Use symmetry: \\(\\Phi(-1)=1-\\Phi(1)=1-0.8413=0.1587\\).",
      "Subtract: \\(0.9772-0.1587\\).",
    ],
    answer: "(a) \\(0.8413\\). (b) \\(0.8185\\).",
  },
  {
    board: "A-Level",
    q: "The mass of a bag of sugar is \\(N(1000,\\,5^2)\\) grams. The heaviest <b>2.5%</b> of bags are rejected. Find the cut-off mass \\(c\\) above which a bag is rejected. Use \\(z_{0.975}=1.96\\).",
    steps: [
      "We need \\(c\\) with \\(P(X>c)=0.025\\), equivalently \\(P(X<c)=0.975\\).",
      "The corresponding standard value is \\(z=\\Phi^{-1}(0.975)=1.96\\).",
      "Convert back: \\(c=\\mu+z\\sigma=1000+1.96\\times5\\).",
      "\\(=1000+9.8\\).",
    ],
    answer: "\\(c=1009.8\\) g.",
  },
  {
    board: "A-Level",
    q: "Exam scores are normally distributed with mean 60 and standard deviation 12. The top <b>10%</b> of candidates earn a distinction. Find the minimum score \\(d\\) needed for a distinction. Use \\(z=1.2816\\) for the upper 10% point.",
    steps: [
      "We need \\(d\\) with \\(P(X\\ge d)=0.10\\), i.e. \\(P(X<d)=0.90\\).",
      "The standard value with \\(\\Phi(z)=0.90\\) is \\(z=1.2816\\).",
      "Back-transform: \\(d=\\mu+z\\sigma=60+1.2816\\times12\\).",
      "\\(=60+15.379\\approx75.38\\).",
    ],
    answer: "Minimum score \\(d\\approx75.4\\) (so a candidate needs about 76).",
  },
  {
    board: "A-Level",
    q: "A normally distributed variable \\(X\\) satisfies \\(P(X<15)=0.0668\\) and \\(P(X>35)=0.0228\\). Find the mean \\(\\mu\\) and standard deviation \\(\\sigma\\). Use \\(\\Phi(1.5)=0.9332\\) and \\(\\Phi(2)=0.9772\\).",
    steps: [
      "Lower tail: \\(P(X<15)=0.0668\\Rightarrow \\Phi(z)=0.0668\\Rightarrow z=-1.5\\) (since \\(\\Phi(1.5)=0.9332\\), so \\(\\Phi(-1.5)=0.0668\\)). Thus \\(\\dfrac{15-\\mu}{\\sigma}=-1.5\\).",
      "Upper tail: \\(P(X>35)=0.0228\\Rightarrow P(X<35)=0.9772\\Rightarrow z=2\\). Thus \\(\\dfrac{35-\\mu}{\\sigma}=2\\).",
      "From the two equations: \\(15-\\mu=-1.5\\sigma\\) and \\(35-\\mu=2\\sigma\\). Subtract the first from the second: \\(20=3.5\\sigma\\Rightarrow \\sigma=\\dfrac{20}{3.5}\\approx5.714\\).",
      "Back-substitute into \\(35-\\mu=2\\sigma\\): \\(\\mu=35-2(5.714)=35-11.43\\approx23.57\\).",
    ],
    answer: "\\(\\sigma\\approx5.71,\\quad \\mu\\approx23.57\\).",
  },
  {
    board: "A-Level",
    q: "IQ scores follow \\(N(100,\\,15^2)\\). Using the <b>68-95-99.7 rule</b>, state the central interval containing about 95% of scores, and find the approximate percentage of people with IQ above 130.",
    steps: [
      "The 68-95-99.7 rule says about 95% of values lie within 2 standard deviations of the mean.",
      "Two standard deviations: \\(2\\sigma=2\\times15=30\\). So the central 95% interval is \\(100\\pm30\\), i.e. \\([70,130]\\).",
      "An IQ of 130 is exactly \\(z=\\dfrac{130-100}{15}=2\\) standard deviations above the mean.",
      "Since 95% lie within \\([70,130]\\), the remaining 5% split equally between the two tails, so about \\(2.5\\%\\) lie above 130.",
    ],
    answer: "Central 95% interval: \\([70,130]\\); about \\(2.5\\%\\) have IQ above 130.",
  },
  {
    board: "A-Level",
    q: "The weight of an apple is \\(N(150,\\,20^2)\\) grams. Apples are sold individually. Find the probability that an apple weighs between 130 g and 170 g, and interpret the result. Use \\(\\Phi(1)=0.8413\\).",
    steps: [
      "Standardise both limits: \\(z_1=\\dfrac{130-150}{20}=-1\\) and \\(z_2=\\dfrac{170-150}{20}=1\\).",
      "\\(P(130<X<170)=\\Phi(1)-\\Phi(-1)\\).",
      "By symmetry \\(\\Phi(-1)=1-\\Phi(1)\\), so this equals \\(2\\Phi(1)-1=2(0.8413)-1\\).",
      "\\(=1.6826-1=0.6826\\) — consistent with the 68% within one standard deviation.",
    ],
    answer: "\\(P(130<X<170)=2\\Phi(1)-1\\approx0.683\\) (about 68%).",
  },
  {
    board: "A-Level",
    q: "Independent variables \\(X\\sim N(50,\\,9)\\) and \\(Y\\sim N(30,\\,16)\\). Let \\(S=X+Y\\). Find the distribution of \\(S\\) and compute \\(P(S>85)\\). Use \\(\\Phi(1)=0.8413\\).",
    steps: [
      "For independent normals, both the means and the variances add: \\(E(S)=50+30=80\\) and \\(\\operatorname{Var}(S)=9+16=25\\).",
      "So \\(S\\sim N(80,\\,25)\\), i.e. standard deviation \\(\\sigma_S=\\sqrt{25}=5\\).",
      "Standardise: \\(z=\\dfrac{85-80}{5}=1\\).",
      "\\(P(S>85)=1-\\Phi(1)=1-0.8413\\).",
    ],
    answer: "\\(S\\sim N(80,25)\\); \\(P(S>85)=1-\\Phi(1)\\approx0.1587\\).",
  },
  {
    board: "A-Level",
    q: "Independent variables \\(X\\sim N(20,\\,6^2)\\) and \\(Y\\sim N(12,\\,8^2)\\). Find the distribution of the difference \\(D=X-Y\\) and compute \\(P(D<0)\\). Use \\(\\Phi(0.8)=0.7881\\).",
    steps: [
      "For a difference of independent normals, the means subtract but the variances <b>add</b>: \\(E(D)=20-12=8\\) and \\(\\operatorname{Var}(D)=6^2+8^2=36+64=100\\).",
      "So \\(D\\sim N(8,\\,100)\\), with standard deviation \\(\\sigma_D=\\sqrt{100}=10\\).",
      "\\(P(D<0)\\): standardise, \\(z=\\dfrac{0-8}{10}=-0.8\\).",
      "\\(P(D<0)=\\Phi(-0.8)=1-\\Phi(0.8)=1-0.7881\\).",
    ],
    answer: "\\(D\\sim N(8,100)\\); \\(P(D<0)=1-\\Phi(0.8)\\approx0.2119\\).",
  },
];
