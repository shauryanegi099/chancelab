import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "The waiting time \\(X\\) (in minutes) at a help desk is exponential with rate \\(\\lambda=0.25\\) per minute. Find (a) \\(P(X>6)\\) and (b) the mean waiting time.",
    steps: [
      "For an exponential distribution the survival function is \\(P(X>t)=e^{-\\lambda t}\\).",
      "(a) \\(P(X>6)=e^{-0.25\\times6}=e^{-1.5}\\).",
      "Numerically \\(e^{-1.5}\\approx0.2231\\).",
      "(b) The mean of an exponential is \\(E(X)=\\dfrac{1}{\\lambda}=\\dfrac{1}{0.25}=4\\) minutes.",
    ],
    answer: "(a) \\(P(X>6)=e^{-1.5}\\approx0.223\\). (b) Mean \\(=4\\) minutes.",
  },
  {
    board: "A-Level",
    q: "The lifetime of a battery (in hours) is exponential with mean 20 hours. Find the probability that a battery lasts <b>between 10 and 30 hours</b>.",
    steps: [
      "Mean \\(=\\dfrac{1}{\\lambda}=20\\Rightarrow \\lambda=0.05\\) per hour.",
      "\\(P(10<X<30)=P(X>10)-P(X>30)=e^{-\\lambda\\cdot10}-e^{-\\lambda\\cdot30}\\).",
      "Compute exponents: \\(e^{-0.05\\times10}=e^{-0.5}\\approx0.6065\\) and \\(e^{-0.05\\times30}=e^{-1.5}\\approx0.2231\\).",
      "Subtract: \\(0.6065-0.2231\\).",
    ],
    answer: "\\(P(10<X<30)=e^{-0.5}-e^{-1.5}\\approx0.383\\).",
  },
  {
    board: "A-Level",
    q: "For an exponential random variable with rate \\(\\lambda\\), state the formulas for the mean and variance, and evaluate both when \\(\\lambda=0.4\\). Also give the standard deviation.",
    steps: [
      "The mean is \\(E(X)=\\dfrac{1}{\\lambda}\\) and the variance is \\(\\operatorname{Var}(X)=\\dfrac{1}{\\lambda^2}\\).",
      "With \\(\\lambda=0.4\\): \\(E(X)=\\dfrac{1}{0.4}=2.5\\).",
      "\\(\\operatorname{Var}(X)=\\dfrac{1}{0.4^2}=\\dfrac{1}{0.16}=6.25\\).",
      "Standard deviation \\(=\\sqrt{6.25}=2.5\\) (equal to the mean, a hallmark of the exponential).",
    ],
    answer: "\\(E(X)=2.5,\\ \\operatorname{Var}(X)=6.25,\\ \\text{SD}=2.5\\).",
  },
  {
    board: "A-Level",
    q: "The time \\(X\\) (in years) until a machine fails is exponential. It is given that \\(P(X>3)=0.5\\). Find the rate \\(\\lambda\\) and hence \\(P(X<5)\\).",
    steps: [
      "Use \\(P(X>3)=e^{-3\\lambda}=0.5\\).",
      "Take natural logs: \\(-3\\lambda=\\ln(0.5)=-\\ln2\\Rightarrow \\lambda=\\dfrac{\\ln2}{3}\\approx\\dfrac{0.6931}{3}\\approx0.2310\\) per year.",
      "Now \\(P(X<5)=1-P(X>5)=1-e^{-5\\lambda}\\).",
      "Compute \\(5\\lambda=5\\times0.2310=1.1552\\), so \\(e^{-1.1552}\\approx0.3150\\).",
      "Therefore \\(P(X<5)\\approx1-0.3150=0.6850\\).",
    ],
    answer: "\\(\\lambda=\\dfrac{\\ln2}{3}\\approx0.231\\); \\(P(X<5)\\approx0.685\\).",
  },
  {
    board: "A-Level",
    q: "An exponential random variable \\(X\\) has rate \\(\\lambda=0.1\\). Using the <b>memoryless property</b>, find \\(P(X>25\\mid X>15)\\), and verify it directly from the definition of conditional probability.",
    steps: [
      "The memoryless property states \\(P(X>s+t\\mid X>s)=P(X>t)\\). Here \\(s=15,\\ s+t=25\\), so \\(t=10\\).",
      "Hence \\(P(X>25\\mid X>15)=P(X>10)=e^{-0.1\\times10}=e^{-1}\\approx0.3679\\).",
      "Verify directly: \\(P(X>25\\mid X>15)=\\dfrac{P(X>25\\cap X>15)}{P(X>15)}=\\dfrac{P(X>25)}{P(X>15)}\\) (since \\(\\{X>25\\}\\subset\\{X>15\\}\\)).",
      "\\(=\\dfrac{e^{-0.1\\times25}}{e^{-0.1\\times15}}=\\dfrac{e^{-2.5}}{e^{-1.5}}=e^{-2.5-(-1.5)}=e^{-1}\\), matching the memoryless result.",
    ],
    answer: "\\(P(X>25\\mid X>15)=e^{-1}\\approx0.368\\).",
  },
  {
    board: "A-Level",
    q: "Accidents at a junction occur as a Poisson process at a mean rate of 2 per month. Let \\(T\\) be the waiting time (in months) until the <b>next accident</b>. State the distribution of \\(T\\) and find \\(P(T>1.5)\\).",
    steps: [
      "In a Poisson process with rate \\(\\lambda\\), the waiting time until the next event is exponential with the same rate; here \\(\\lambda=2\\) per month, so \\(T\\sim\\text{Exp}(2)\\).",
      "The link: \\(P(T>t)=P(\\text{0 events in }[0,t])\\). For Poisson with mean \\(\\lambda t\\), \\(P(0\\text{ events})=e^{-\\lambda t}\\).",
      "Thus \\(P(T>1.5)=e^{-2\\times1.5}=e^{-3}\\).",
      "Numerically \\(e^{-3}\\approx0.0498\\).",
    ],
    answer: "\\(T\\sim\\text{Exp}(2)\\); \\(P(T>1.5)=e^{-3}\\approx0.0498\\).",
  },
  {
    board: "A-Level",
    q: "The time between customer arrivals at a counter is exponential with mean 4 minutes. Find the <b>median</b> waiting time.",
    steps: [
      "Mean \\(=\\dfrac1\\lambda=4\\Rightarrow \\lambda=0.25\\) per minute.",
      "The median \\(m\\) satisfies \\(P(X\\le m)=0.5\\), i.e. \\(1-e^{-\\lambda m}=0.5\\), so \\(e^{-\\lambda m}=0.5\\).",
      "Take logs: \\(-\\lambda m=\\ln(0.5)=-\\ln2\\Rightarrow m=\\dfrac{\\ln2}{\\lambda}=\\dfrac{\\ln2}{0.25}=4\\ln2\\).",
      "Numerically \\(m=4\\times0.6931\\approx2.77\\) minutes (note the median is below the mean of 4, reflecting the right-skew).",
    ],
    answer: "Median \\(=4\\ln2\\approx2.77\\) minutes.",
  },
  {
    board: "A-Level",
    q: "Phone calls to a switchboard arrive as a Poisson process at rate 5 per hour. (a) Find the probability the time until the next call exceeds 30 minutes. (b) Find the probability that <b>exactly 2 calls</b> arrive in the next hour.",
    steps: [
      "Convert the rate consistently. Working in hours, \\(\\lambda=5\\) per hour.",
      "(a) The next-call waiting time \\(T\\sim\\text{Exp}(5)\\); 30 minutes \\(=0.5\\) hours, so \\(P(T>0.5)=e^{-5\\times0.5}=e^{-2.5}\\approx0.0821\\).",
      "(b) The <b>number</b> of calls in 1 hour is Poisson with mean \\(\\mu=\\lambda\\times1=5\\): \\(P(N=2)=\\dfrac{e^{-5}5^2}{2!}\\).",
      "Compute: \\(\\dfrac{e^{-5}\\times25}{2}=12.5\\,e^{-5}\\); with \\(e^{-5}\\approx0.006738\\), this is \\(\\approx0.0842\\).",
    ],
    answer: "(a) \\(e^{-2.5}\\approx0.0821\\). (b) \\(12.5\\,e^{-5}\\approx0.0842\\).",
  },
];
