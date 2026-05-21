import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "Telephone calls arrive at an exchange as a Poisson process with mean rate \\(\\lambda = 3\\) per minute. Find the probability of (a) exactly 2 calls, (b) more than 2 calls, in a given minute.",
    steps: [
      "For \\(X\\sim\\text{Poisson}(\\lambda)\\), \\(P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}\\) with \\(\\lambda=3\\).",
      "(a) \\(P(X=2) = \\dfrac{e^{-3}3^2}{2!} = \\dfrac{9}{2}e^{-3} = 4.5\\,e^{-3}\\approx 0.224\\).",
      "(b) \\(P(X>2) = 1 - \\big[P(0)+P(1)+P(2)\\big]\\).",
      "\\(P(0)+P(1)+P(2) = e^{-3}\\left(1 + 3 + \\dfrac{9}{2}\\right) = e^{-3}(8.5) = 8.5\\,e^{-3}\\).",
      "\\(P(X>2) = 1 - 8.5\\,e^{-3} \\approx 1 - 0.4232 = 0.5768\\).",
    ],
    answer: "(a) \\(4.5\\,e^{-3}\\approx 0.224\\)  (b) \\(1-8.5\\,e^{-3}\\approx 0.577\\).",
  },
  {
    board: "JEE Advanced",
    q: "For a Poisson variable \\(X\\) it is given that \\(P(X=1) = P(X=2)\\). Find the parameter \\(\\lambda\\) and hence \\(P(X=0)\\).",
    steps: [
      "\\(P(X=1) = e^{-\\lambda}\\lambda\\) and \\(P(X=2) = \\dfrac{e^{-\\lambda}\\lambda^2}{2}\\).",
      "Setting them equal: \\(e^{-\\lambda}\\lambda = \\dfrac{e^{-\\lambda}\\lambda^2}{2}\\). Cancel \\(e^{-\\lambda}\\lambda\\) (with \\(\\lambda>0\\)): \\(1 = \\dfrac{\\lambda}{2}\\).",
      "Therefore \\(\\lambda = 2\\).",
      "\\(P(X=0) = e^{-\\lambda} = e^{-2}\\approx 0.135\\).",
    ],
    answer: "\\(\\lambda=2\\); \\(P(X=0)=e^{-2}\\approx 0.135\\).",
  },
  {
    board: "JEE Advanced",
    q: "A book of 500 pages contains 300 typographical errors distributed at random. Using a Poisson approximation, find the probability that a given page contains <b>at least one</b> error.",
    steps: [
      "The mean number of errors per page is \\(\\lambda = \\dfrac{300}{500} = 0.6\\).",
      "Model the count per page as \\(X\\sim\\text{Poisson}(0.6)\\) (rare-event approximation to the binomial).",
      "\\(P(X\\ge1) = 1 - P(X=0) = 1 - e^{-0.6}\\).",
      "\\(e^{-0.6} \\approx 0.5488\\), so \\(P(X\\ge1) \\approx 1 - 0.5488 = 0.4512\\).",
    ],
    answer: "\\(1-e^{-0.6}\\approx 0.451\\).",
  },
  {
    board: "JEE Advanced",
    q: "In a factory the probability that any single article is defective is \\(0.002\\). A box contains \\(1000\\) articles. Using the Poisson limit of the binomial, find the probability that the box has (a) no defectives, (b) exactly 3 defectives.",
    steps: [
      "Here \\(n=1000\\) is large and \\(p=0.002\\) is small, so \\(\\text{Bin}(n,p)\\approx\\text{Poisson}(\\lambda)\\) with \\(\\lambda = np = 1000\\times0.002 = 2\\).",
      "(a) \\(P(X=0) = e^{-\\lambda} = e^{-2}\\approx 0.135\\).",
      "(b) \\(P(X=3) = \\dfrac{e^{-2}2^3}{3!} = \\dfrac{8}{6}e^{-2} = \\dfrac{4}{3}e^{-2}\\).",
      "\\(\\dfrac{4}{3}e^{-2} \\approx 1.3333\\times0.1353 \\approx 0.180\\).",
    ],
    answer: "(a) \\(e^{-2}\\approx 0.135\\)  (b) \\(\\dfrac{4}{3}e^{-2}\\approx 0.180\\).",
  },
  {
    board: "JEE Advanced",
    q: "Each independent trial succeeds with probability \\(p=0.2\\). Let \\(N\\) be the trial number on which the <b>first success</b> occurs (Geometric). Find \\(P(N=4)\\), \\(P(N>3)\\) and \\(E(N)\\).",
    steps: [
      "For the geometric distribution, \\(P(N=k) = (1-p)^{k-1}p\\) for \\(k=1,2,\\dots\\).",
      "\\(P(N=4) = (0.8)^3(0.2) = 0.512\\times0.2 = 0.1024\\).",
      "\\(P(N>3) = (1-p)^3 = (0.8)^3 = 0.512\\) (the first 3 trials all fail).",
      "\\(E(N) = \\dfrac{1}{p} = \\dfrac{1}{0.2} = 5\\).",
    ],
    answer: "\\(P(N=4)\\approx 0.102\\); \\(P(N>3)=0.512\\); \\(E(N)=5\\).",
  },
  {
    board: "JEE Advanced",
    q: "A fair die is rolled repeatedly until a <b>six</b> appears. Using the <b>memorylessness</b> of the geometric distribution, find the probability that more than 8 rolls are needed given that the first 5 rolls produced no six.",
    steps: [
      "Let \\(N\\) be the roll on which the first six appears, with \\(p=\\tfrac16\\). Then \\(P(N>m) = \\left(\\tfrac56\\right)^m\\).",
      "The geometric distribution is memoryless: \\(P(N>m+n \\mid N>m) = P(N>n)\\).",
      "Here \\(P(N>8 \\mid N>5) = P(N>3) = \\left(\\tfrac56\\right)^3\\).",
      "\\(\\left(\\tfrac56\\right)^3 = \\dfrac{125}{216}\\approx 0.579\\).",
    ],
    answer: "\\(\\left(\\dfrac56\\right)^3=\\dfrac{125}{216}\\approx 0.579\\).",
  },
  {
    board: "JEE Advanced",
    q: "Accidents at a junction occur as a Poisson process with mean \\(2\\) per week. Find the probability of (a) no accidents in a given week, (b) at most 2 accidents in a <b>two-week</b> period.",
    steps: [
      "(a) Over one week, \\(X\\sim\\text{Poisson}(2)\\), so \\(P(X=0) = e^{-2}\\approx 0.135\\).",
      "(b) Over two weeks the mean scales to \\(\\lambda = 2\\times2 = 4\\); let \\(Y\\sim\\text{Poisson}(4)\\).",
      "\\(P(Y\\le2) = e^{-4}\\left(1 + 4 + \\dfrac{4^2}{2}\\right) = e^{-4}(1+4+8) = 13\\,e^{-4}\\).",
      "\\(13\\,e^{-4} \\approx 13\\times0.018316 \\approx 0.238\\).",
    ],
    answer: "(a) \\(e^{-2}\\approx 0.135\\)  (b) \\(13\\,e^{-4}\\approx 0.238\\).",
  },
  {
    board: "JEE Advanced",
    q: "For \\(X\\sim\\text{Poisson}(\\lambda)\\), derive the ratio \\(\\dfrac{P(X=k+1)}{P(X=k)}\\) and use it to find the <b>most probable value</b> (mode) when \\(\\lambda = 4.5\\).",
    steps: [
      "\\(\\dfrac{P(X=k+1)}{P(X=k)} = \\dfrac{e^{-\\lambda}\\lambda^{k+1}/(k+1)!}{e^{-\\lambda}\\lambda^{k}/k!} = \\dfrac{\\lambda}{k+1}\\).",
      "Probabilities increase while \\(\\dfrac{\\lambda}{k+1} > 1\\), i.e. while \\(k < \\lambda - 1\\); they then decrease.",
      "Hence the mode is \\(\\lfloor \\lambda \\rfloor\\) when \\(\\lambda\\) is not an integer (and both \\(\\lambda-1,\\lambda\\) when it is).",
      "For \\(\\lambda = 4.5\\): mode \\(= \\lfloor 4.5 \\rfloor = 4\\).",
    ],
    answer: "\\(\\dfrac{P(X=k+1)}{P(X=k)}=\\dfrac{\\lambda}{k+1}\\); the mode for \\(\\lambda=4.5\\) is \\(4\\).",
  },
];
