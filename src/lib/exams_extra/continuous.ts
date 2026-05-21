import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "A continuous random variable \\(X\\) has pdf \\(f(x)=k(4-x^2)\\) for \\(0\\le x\\le 2\\) and \\(0\\) otherwise. (a) Find \\(k\\). (b) Find \\(P(X>1)\\).",
    steps: [
      "(a) For a valid pdf the total area must be 1: \\(\\displaystyle\\int_0^2 k(4-x^2)\\,dx = 1\\).",
      "Integrate: \\(k\\big[4x-\\tfrac{x^3}{3}\\big]_0^2 = k\\left(8-\\tfrac{8}{3}\\right)=k\\cdot\\tfrac{16}{3}\\).",
      "Set equal to 1: \\(k\\cdot\\tfrac{16}{3}=1\\Rightarrow k=\\tfrac{3}{16}\\).",
      "(b) \\(P(X>1)=\\displaystyle\\int_1^2 \\tfrac{3}{16}(4-x^2)\\,dx = \\tfrac{3}{16}\\big[4x-\\tfrac{x^3}{3}\\big]_1^2\\).",
      "At \\(x=2\\): \\(8-\\tfrac83=\\tfrac{16}{3}\\); at \\(x=1\\): \\(4-\\tfrac13=\\tfrac{11}{3}\\). Difference \\(=\\tfrac{5}{3}\\).",
      "Multiply: \\(\\tfrac{3}{16}\\cdot\\tfrac{5}{3}=\\tfrac{5}{16}\\).",
    ],
    answer: "(a) \\(k=\\dfrac{3}{16}\\). (b) \\(P(X>1)=\\dfrac{5}{16}=0.3125\\).",
  },
  {
    board: "A-Level",
    q: "The continuous random variable \\(X\\) has pdf \\(f(x)=\\tfrac{3}{8}x^2\\) for \\(0\\le x\\le 2\\) (and 0 otherwise). Find (a) \\(E(X)\\) and (b) \\(\\operatorname{Var}(X)\\).",
    steps: [
      "(a) \\(E(X)=\\displaystyle\\int_0^2 x\\cdot\\tfrac{3}{8}x^2\\,dx = \\tfrac{3}{8}\\int_0^2 x^3\\,dx = \\tfrac{3}{8}\\big[\\tfrac{x^4}{4}\\big]_0^2\\).",
      "\\(=\\tfrac{3}{8}\\cdot\\tfrac{16}{4}=\\tfrac{3}{8}\\cdot4=\\tfrac{3}{2}=1.5\\).",
      "(b) First find \\(E(X^2)=\\displaystyle\\int_0^2 x^2\\cdot\\tfrac{3}{8}x^2\\,dx = \\tfrac{3}{8}\\int_0^2 x^4\\,dx = \\tfrac{3}{8}\\big[\\tfrac{x^5}{5}\\big]_0^2\\).",
      "\\(=\\tfrac{3}{8}\\cdot\\tfrac{32}{5}=\\tfrac{12}{5}=2.4\\).",
      "Then \\(\\operatorname{Var}(X)=E(X^2)-[E(X)]^2 = 2.4-(1.5)^2 = 2.4-2.25\\).",
    ],
    answer: "(a) \\(E(X)=1.5\\). (b) \\(\\operatorname{Var}(X)=0.15\\).",
  },
  {
    board: "A-Level",
    q: "A continuous random variable \\(X\\) has pdf \\(f(x)=\\tfrac{1}{8}x\\) for \\(0\\le x\\le 4\\) (and 0 otherwise). Find the cumulative distribution function \\(F(x)\\), and use it to evaluate \\(P(X\\le 3)\\).",
    steps: [
      "By definition \\(F(x)=\\displaystyle\\int_0^x \\tfrac{1}{8}t\\,dt\\) for \\(0\\le x\\le4\\).",
      "Integrate: \\(F(x)=\\tfrac{1}{8}\\big[\\tfrac{t^2}{2}\\big]_0^x = \\tfrac{x^2}{16}\\).",
      "State the full piecewise form: \\(F(x)=0\\) for \\(x<0\\), \\(F(x)=\\tfrac{x^2}{16}\\) for \\(0\\le x\\le4\\), and \\(F(x)=1\\) for \\(x>4\\).",
      "Check the boundary: \\(F(4)=\\tfrac{16}{16}=1\\), as required.",
      "Then \\(P(X\\le3)=F(3)=\\tfrac{9}{16}\\).",
    ],
    answer: "\\(F(x)=\\dfrac{x^2}{16}\\) on \\([0,4]\\); \\(P(X\\le3)=\\dfrac{9}{16}=0.5625\\).",
  },
  {
    board: "A-Level",
    q: "The continuous random variable \\(X\\) has pdf \\(f(x)=\\tfrac{1}{8}x\\) for \\(0\\le x\\le 4\\). Find the <b>median</b> \\(m\\) and the <b>mode</b>.",
    steps: [
      "The median \\(m\\) satisfies \\(\\displaystyle\\int_0^m \\tfrac{1}{8}x\\,dx = \\tfrac12\\), i.e. half the area lies to its left.",
      "Integrate: \\(\\tfrac{1}{8}\\cdot\\tfrac{m^2}{2}=\\tfrac{m^2}{16}=\\tfrac12\\).",
      "Solve: \\(m^2=8\\Rightarrow m=\\sqrt8=2\\sqrt2\\approx2.83\\) (taking the positive root within \\([0,4]\\)).",
      "The mode is the value of \\(x\\) maximising \\(f(x)=\\tfrac{1}{8}x\\) on \\([0,4]\\); since this is increasing, the maximum is at the right endpoint \\(x=4\\).",
    ],
    answer: "Median \\(m=2\\sqrt2\\approx2.83\\); mode \\(=4\\).",
  },
  {
    board: "A-Level",
    q: "\\(X\\) is continuous uniform on the interval \\([3,11]\\), i.e. \\(X\\sim U(3,11)\\). Find (a) \\(P(5<X<9)\\), (b) \\(E(X)\\), (c) \\(\\operatorname{Var}(X)\\).",
    steps: [
      "For \\(U(a,b)\\) the density is constant: \\(f(x)=\\dfrac{1}{b-a}=\\dfrac{1}{11-3}=\\dfrac18\\) on \\([3,11]\\).",
      "(a) \\(P(5<X<9)=\\dfrac{9-5}{11-3}=\\dfrac{4}{8}=\\dfrac12\\).",
      "(b) \\(E(X)=\\dfrac{a+b}{2}=\\dfrac{3+11}{2}=7\\).",
      "(c) \\(\\operatorname{Var}(X)=\\dfrac{(b-a)^2}{12}=\\dfrac{(11-3)^2}{12}=\\dfrac{64}{12}=\\dfrac{16}{3}\\).",
    ],
    answer: "(a) \\(0.5\\)  (b) \\(E(X)=7\\)  (c) \\(\\operatorname{Var}(X)=\\dfrac{16}{3}\\approx5.33\\).",
  },
  {
    board: "A-Level",
    q: "A continuous random variable \\(X\\) has pdf \\(f(x)=c(2x-x^2)\\) for \\(0\\le x\\le 2\\) and 0 otherwise. (a) Show that \\(c=\\tfrac34\\). (b) Find the mode of \\(X\\).",
    steps: [
      "(a) Require \\(\\displaystyle\\int_0^2 c(2x-x^2)\\,dx = 1\\).",
      "Integrate: \\(c\\big[x^2-\\tfrac{x^3}{3}\\big]_0^2 = c\\left(4-\\tfrac{8}{3}\\right)=c\\cdot\\tfrac{4}{3}\\).",
      "Set \\(c\\cdot\\tfrac{4}{3}=1\\Rightarrow c=\\tfrac34\\), as required.",
      "(b) The mode maximises \\(f(x)\\). Differentiate \\(f(x)=\\tfrac34(2x-x^2)\\): \\(f'(x)=\\tfrac34(2-2x)\\).",
      "Set \\(f'(x)=0\\Rightarrow 2-2x=0\\Rightarrow x=1\\); since \\(f''(x)=\\tfrac34(-2)<0\\) this is a maximum, and \\(x=1\\) lies in \\([0,2]\\).",
    ],
    answer: "(a) \\(c=\\dfrac34\\). (b) Mode \\(=1\\).",
  },
  {
    board: "A-Level",
    q: "The lifetime (in hours) of a device has pdf \\(f(x)=\\dfrac{200}{x^2}\\) for \\(x\\ge 200\\) and 0 otherwise. (a) Verify this is a valid pdf. (b) Find \\(P(X>500)\\).",
    steps: [
      "(a) The density is non-negative for \\(x\\ge200\\). Check the total integral: \\(\\displaystyle\\int_{200}^{\\infty} \\dfrac{200}{x^2}\\,dx\\).",
      "Antiderivative of \\(200x^{-2}\\) is \\(-200x^{-1}=-\\dfrac{200}{x}\\); as \\(x\\to\\infty\\) this \\(\\to0\\).",
      "So the integral \\(=\\Big[-\\dfrac{200}{x}\\Big]_{200}^{\\infty}=0-\\left(-\\dfrac{200}{200}\\right)=1\\). Valid pdf.",
      "(b) \\(P(X>500)=\\displaystyle\\int_{500}^{\\infty}\\dfrac{200}{x^2}\\,dx = \\Big[-\\dfrac{200}{x}\\Big]_{500}^{\\infty}=0-\\left(-\\dfrac{200}{500}\\right)\\).",
      "\\(=\\dfrac{200}{500}=\\dfrac{2}{5}\\).",
    ],
    answer: "(a) Total area \\(=1\\), so it is valid. (b) \\(P(X>500)=0.4\\).",
  },
  {
    board: "A-Level",
    q: "A continuous random variable \\(X\\) has pdf \\(f(x)=\\tfrac{3}{4}(1-x^2)\\) for \\(-1\\le x\\le 1\\) and 0 otherwise. Find \\(P\\!\\left(|X|<\\tfrac12\\right)\\) and \\(\\operatorname{Var}(X)\\).",
    steps: [
      "By symmetry \\(f\\) is even, so \\(E(X)=0\\). Also \\(P(|X|<\\tfrac12)=P\\!\\left(-\\tfrac12<X<\\tfrac12\\right)=\\displaystyle\\int_{-1/2}^{1/2}\\tfrac34(1-x^2)\\,dx\\).",
      "Using symmetry: \\(=2\\cdot\\tfrac34\\displaystyle\\int_0^{1/2}(1-x^2)\\,dx = \\tfrac32\\big[x-\\tfrac{x^3}{3}\\big]_0^{1/2}\\).",
      "\\(=\\tfrac32\\left(\\tfrac12-\\tfrac{1}{24}\\right)=\\tfrac32\\cdot\\tfrac{12-1}{24}=\\tfrac32\\cdot\\tfrac{11}{24}=\\tfrac{11}{16}\\).",
      "For the variance, \\(\\operatorname{Var}(X)=E(X^2)-0\\) where \\(E(X^2)=\\displaystyle\\int_{-1}^{1}x^2\\cdot\\tfrac34(1-x^2)\\,dx = 2\\cdot\\tfrac34\\int_0^1 (x^2-x^4)\\,dx\\).",
      "\\(=\\tfrac32\\big[\\tfrac{x^3}{3}-\\tfrac{x^5}{5}\\big]_0^1 = \\tfrac32\\left(\\tfrac13-\\tfrac15\\right)=\\tfrac32\\cdot\\tfrac{2}{15}=\\tfrac{1}{5}\\).",
    ],
    answer: "\\(P\\!\\left(|X|<\\tfrac12\\right)=\\dfrac{11}{16}=0.6875\\); \\(\\operatorname{Var}(X)=\\dfrac15=0.2\\).",
  },
];
