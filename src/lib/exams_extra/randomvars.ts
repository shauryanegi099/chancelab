import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "A discrete random variable \\(X\\) takes values \\(0,1,2,3,4\\) with \\(P(X=x)=kx\\) for \\(x=1,2,3,4\\) and \\(P(X=0)=2k\\). (a) Find \\(k\\). (b) Hence find \\(P(X\\ge 3)\\) and \\(P(1\\le X<4)\\).",
    steps: [
      "All probabilities must sum to 1: \\(P(0)+P(1)+P(2)+P(3)+P(4)=1\\).",
      "Substitute: \\(2k + k(1)+k(2)+k(3)+k(4) = 2k + 10k = 12k\\).",
      "(a) So \\(12k=1\\Rightarrow k=\\dfrac{1}{12}\\). Each probability is non-negative, confirming a valid PMF.",
      "(b) \\(P(X\\ge3)=P(3)+P(4)=3k+4k=7k=\\dfrac{7}{12}\\).",
      "And \\(P(1\\le X<4)=P(1)+P(2)+P(3)=k(1+2+3)=6k=\\dfrac{6}{12}=\\dfrac12\\).",
    ],
    answer: "\\(k=\\dfrac{1}{12},\\quad P(X\\ge3)=\\dfrac{7}{12},\\quad P(1\\le X<4)=\\dfrac12\\).",
  },
  {
    board: "JEE Advanced",
    q: "A discrete random variable \\(X\\) has \\(P(X=x)=c\\,x^{2}\\) for \\(x=1,2,3,4,5\\). (a) Find \\(c\\). (b) Find \\(P(X\\text{ is even})\\). (c) Find \\(P(X>2\\mid X\\ge 2)\\).",
    steps: [
      "(a) Normalise: \\(c(1^2+2^2+3^2+4^2+5^2)=c(1+4+9+16+25)=55c=1\\Rightarrow c=\\dfrac{1}{55}\\).",
      "(b) Even values are \\(x=2,4\\): \\(P(X\\text{ even})=c(4+16)=\\dfrac{20}{55}=\\dfrac{4}{11}\\).",
      "(c) \\(P(X\\ge2)=1-P(1)=1-\\dfrac{1}{55}=\\dfrac{54}{55}\\).",
      "\\(P(X>2)=P(3)+P(4)+P(5)=c(9+16+25)=\\dfrac{50}{55}\\). Note \\(\\{X>2\\}\\subset\\{X\\ge2\\}\\).",
      "Conditional: \\(P(X>2\\mid X\\ge2)=\\dfrac{P(X>2)}{P(X\\ge2)}=\\dfrac{50/55}{54/55}=\\dfrac{50}{54}=\\dfrac{25}{27}\\).",
    ],
    answer: "\\(c=\\dfrac{1}{55},\\quad P(X\\text{ even})=\\dfrac{4}{11},\\quad P(X>2\\mid X\\ge2)=\\dfrac{25}{27}\\).",
  },
  {
    board: "JEE Advanced",
    q: "A discrete random variable \\(X\\) has PMF \\(P(X=x)=k\\cdot 2^{-x}\\) for \\(x=1,2,3,\\dots\\) (all positive integers). (a) Find \\(k\\). (b) Find \\(P(X\\le 3)\\). (c) Find \\(P(X\\text{ is even})\\).",
    steps: [
      "(a) The probabilities form a geometric series: \\(\\sum_{x=1}^{\\infty} k\\,2^{-x}=k\\cdot\\dfrac{1/2}{1-1/2}=k\\cdot 1=k\\).",
      "Setting the total to 1 gives \\(k=1\\), so \\(P(X=x)=2^{-x}\\).",
      "(b) \\(P(X\\le3)=2^{-1}+2^{-2}+2^{-3}=\\dfrac12+\\dfrac14+\\dfrac18=\\dfrac{7}{8}\\).",
      "(c) Even values: \\(P(X\\text{ even})=\\sum_{m=1}^{\\infty}2^{-2m}=\\sum_{m=1}^{\\infty}\\left(\\tfrac14\\right)^m=\\dfrac{1/4}{1-1/4}=\\dfrac13\\).",
    ],
    answer: "\\(k=1,\\quad P(X\\le3)=\\dfrac{7}{8},\\quad P(X\\text{ even})=\\dfrac13\\).",
  },
  {
    board: "JEE Advanced",
    q: "The CDF of a discrete random variable \\(X\\) is \\(F(x)=0\\) for \\(x<1\\); \\(0.2\\) for \\(1\\le x<2\\); \\(0.5\\) for \\(2\\le x<3\\); \\(0.9\\) for \\(3\\le x<4\\); and \\(1\\) for \\(x\\ge4\\). (a) Recover the PMF. (b) Find \\(P(2\\le X\\le 3)\\). (c) Find \\(E(X)\\).",
    steps: [
      "(a) For a step CDF, \\(P(X=x_i)=F(x_i)-F(x_i^-)\\), the jump size at each point.",
      "Jumps: \\(P(1)=0.2-0=0.2\\); \\(P(2)=0.5-0.2=0.3\\); \\(P(3)=0.9-0.5=0.4\\); \\(P(4)=1-0.9=0.1\\).",
      "(b) \\(P(2\\le X\\le3)=P(2)+P(3)=0.3+0.4=0.7\\).",
      "(c) \\(E(X)=1(0.2)+2(0.3)+3(0.4)+4(0.1)=0.2+0.6+1.2+0.4=2.4\\).",
    ],
    answer: "PMF: \\(P(1)=0.2,\\ P(2)=0.3,\\ P(3)=0.4,\\ P(4)=0.1\\); \\(P(2\\le X\\le3)=0.7\\); \\(E(X)=2.4\\).",
  },
  {
    board: "JEE Advanced",
    q: "A fair die is rolled once and \\(X\\) is the score. Let \\(Y=(X-3)^{2}\\). (a) Find the PMF of \\(Y\\). (b) Hence find \\(P(Y\\le 4)\\).",
    steps: [
      "\\(X\\) is uniform on \\(\\{1,2,3,4,5,6\\}\\), each with probability \\(\\tfrac16\\).",
      "Compute \\(Y=(X-3)^2\\) for each: \\(X{=}1\\to4,\\ X{=}2\\to1,\\ X{=}3\\to0,\\ X{=}4\\to1,\\ X{=}5\\to4,\\ X{=}6\\to9\\).",
      "Collect equal \\(Y\\) values: \\(Y=0\\) from \\(\\{3\\}\\); \\(Y=1\\) from \\(\\{2,4\\}\\); \\(Y=4\\) from \\(\\{1,5\\}\\); \\(Y=9\\) from \\(\\{6\\}\\).",
      "(a) PMF: \\(P(Y=0)=\\tfrac16,\\ P(Y=1)=\\tfrac26,\\ P(Y=4)=\\tfrac26,\\ P(Y=9)=\\tfrac16\\).",
      "(b) \\(P(Y\\le4)=P(0)+P(1)+P(4)=\\tfrac16+\\tfrac26+\\tfrac26=\\tfrac56\\).",
    ],
    answer: "\\(P(Y{=}0)=\\tfrac16,\\ P(Y{=}1)=\\tfrac13,\\ P(Y{=}4)=\\tfrac13,\\ P(Y{=}9)=\\tfrac16\\); \\(P(Y\\le4)=\\dfrac56\\).",
  },
  {
    board: "JEE Advanced",
    q: "A discrete random variable \\(X\\) has \\(P(X=x)=\\dfrac{k}{x(x+1)}\\) for \\(x=1,2,3,4\\). (a) Find \\(k\\). (b) Find the CDF value \\(F(3)=P(X\\le 3)\\).",
    steps: [
      "Use the partial fraction \\(\\dfrac{1}{x(x+1)}=\\dfrac1x-\\dfrac1{x+1}\\), so the sum telescopes.",
      "\\(\\sum_{x=1}^{4}\\dfrac{1}{x(x+1)}=\\left(1-\\tfrac12\\right)+\\left(\\tfrac12-\\tfrac13\\right)+\\left(\\tfrac13-\\tfrac14\\right)+\\left(\\tfrac14-\\tfrac15\\right)=1-\\tfrac15=\\tfrac45\\).",
      "(a) Normalising: \\(k\\cdot\\dfrac45=1\\Rightarrow k=\\dfrac54\\).",
      "(b) \\(F(3)=\\sum_{x=1}^{3}\\dfrac{k}{x(x+1)}=k\\left(1-\\tfrac14\\right)=\\dfrac54\\cdot\\dfrac34=\\dfrac{15}{16}\\).",
    ],
    answer: "\\(k=\\dfrac54,\\quad F(3)=P(X\\le3)=\\dfrac{15}{16}\\).",
  },
  {
    board: "JEE Advanced",
    q: "A continuous random variable \\(X\\) has pdf \\(f(x)=k(4x-x^{2})\\) for \\(0\\le x\\le 4\\), and \\(0\\) otherwise. (a) Find \\(k\\). (b) Find \\(P(1\\le X\\le 3)\\).",
    steps: [
      "(a) Require \\(\\int_0^4 k(4x-x^2)\\,dx=1\\).",
      "\\(\\int_0^4 (4x-x^2)\\,dx=\\left[2x^2-\\dfrac{x^3}{3}\\right]_0^4=2(16)-\\dfrac{64}{3}=32-\\dfrac{64}{3}=\\dfrac{32}{3}\\).",
      "So \\(k\\cdot\\dfrac{32}{3}=1\\Rightarrow k=\\dfrac{3}{32}\\).",
      "(b) \\(\\int_1^3 (4x-x^2)\\,dx=\\left[2x^2-\\dfrac{x^3}{3}\\right]_1^3=\\left(18-9\\right)-\\left(2-\\tfrac13\\right)=9-\\dfrac53=\\dfrac{22}{3}\\).",
      "Multiply by \\(k\\): \\(P(1\\le X\\le3)=\\dfrac{3}{32}\\cdot\\dfrac{22}{3}=\\dfrac{22}{32}=\\dfrac{11}{16}\\).",
    ],
    answer: "\\(k=\\dfrac{3}{32},\\quad P(1\\le X\\le3)=\\dfrac{11}{16}=0.6875\\).",
  },
  {
    board: "JEE Advanced",
    q: "A continuous random variable \\(X\\) has CDF \\(F(x)=0\\) for \\(x<0\\), \\(F(x)=\\dfrac{x^{2}}{9}\\) for \\(0\\le x\\le 3\\), and \\(F(x)=1\\) for \\(x>3\\). (a) Find the pdf \\(f(x)\\). (b) Find \\(P(1<X<2)\\). (c) Find the median \\(m\\).",
    steps: [
      "(a) The pdf is the derivative of the CDF on \\((0,3)\\): \\(f(x)=F'(x)=\\dfrac{2x}{9}\\) for \\(0\\le x\\le3\\), and \\(0\\) elsewhere.",
      "(b) \\(P(1<X<2)=F(2)-F(1)=\\dfrac{4}{9}-\\dfrac{1}{9}=\\dfrac{3}{9}=\\dfrac13\\).",
      "(c) The median solves \\(F(m)=\\dfrac12\\): \\(\\dfrac{m^2}{9}=\\dfrac12\\Rightarrow m^2=\\dfrac92\\).",
      "Taking the positive root in \\([0,3]\\): \\(m=\\dfrac{3}{\\sqrt2}=\\dfrac{3\\sqrt2}{2}\\approx 2.121\\).",
    ],
    answer: "\\(f(x)=\\dfrac{2x}{9}\\) on \\([0,3]\\); \\(P(1<X<2)=\\dfrac13\\); median \\(=\\dfrac{3\\sqrt2}{2}\\approx 2.12\\).",
  },
];
