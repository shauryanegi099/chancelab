import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "A discrete random variable \\(X\\) has the PMF below. Find \\(E(X)\\), \\(E(X^{2})\\) and \\(\\operatorname{Var}(X)\\).<br/>\\(x:\\ -2,\\ -1,\\ 0,\\ 1,\\ 2\\) with \\(P:\\ 0.1,\\ 0.2,\\ 0.3,\\ 0.3,\\ 0.1\\).",
    steps: [
      "First confirm the PMF: \\(0.1+0.2+0.3+0.3+0.1=1\\). Valid.",
      "\\(E(X)=\\sum x\\,P(x)=(-2)(0.1)+(-1)(0.2)+0(0.3)+1(0.3)+2(0.1)\\).",
      "\\(=-0.2-0.2+0+0.3+0.2=0.1\\).",
      "\\(E(X^2)=\\sum x^2 P(x)=4(0.1)+1(0.2)+0+1(0.3)+4(0.1)=0.4+0.2+0.3+0.4=1.3\\).",
      "\\(\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=1.3-(0.1)^2=1.3-0.01=1.29\\).",
    ],
    answer: "\\(E(X)=0.1,\\quad E(X^2)=1.3,\\quad \\operatorname{Var}(X)=1.29\\).",
  },
  {
    board: "JEE Advanced",
    q: "A discrete random variable has \\(P(X=x)=k\\,x\\) for \\(x=1,2,3,4,5\\). Find (a) \\(k\\), (b) \\(E(X)\\), (c) \\(\\operatorname{Var}(X)\\), and (d) \\(E(3X-2)\\) and \\(\\operatorname{Var}(3X-2)\\).",
    steps: [
      "(a) \\(k(1+2+3+4+5)=15k=1\\Rightarrow k=\\dfrac{1}{15}\\).",
      "(b) \\(E(X)=\\sum x\\cdot kx=k\\sum x^2=\\dfrac{1}{15}(1+4+9+16+25)=\\dfrac{55}{15}=\\dfrac{11}{3}\\).",
      "(c) \\(E(X^2)=\\sum x^2\\cdot kx=k\\sum x^3=\\dfrac{1}{15}(1+8+27+64+125)=\\dfrac{225}{15}=15\\).",
      "\\(\\operatorname{Var}(X)=15-\\left(\\dfrac{11}{3}\\right)^2=15-\\dfrac{121}{9}=\\dfrac{135-121}{9}=\\dfrac{14}{9}\\).",
      "(d) Linearity: \\(E(3X-2)=3\\cdot\\dfrac{11}{3}-2=11-2=9\\); \\(\\operatorname{Var}(3X-2)=3^2\\operatorname{Var}(X)=9\\cdot\\dfrac{14}{9}=14\\).",
    ],
    answer: "\\(k=\\dfrac{1}{15},\\ E(X)=\\dfrac{11}{3},\\ \\operatorname{Var}(X)=\\dfrac{14}{9},\\ E(3X-2)=9,\\ \\operatorname{Var}(3X-2)=14\\).",
  },
  {
    board: "JEE Advanced",
    q: "In a game, a fair die is rolled. You win an amount in rupees equal to the score if it is even, and you lose an amount equal to the score if it is odd. Let \\(W\\) be your net gain. Find \\(E(W)\\) and decide whether the game is favourable.",
    steps: [
      "Map each face to a payoff: odd faces lose, even faces win. \\(W(1)=-1,\\ W(2)=+2,\\ W(3)=-3,\\ W(4)=+4,\\ W(5)=-5,\\ W(6)=+6\\).",
      "Each face has probability \\(\\tfrac16\\).",
      "\\(E(W)=\\dfrac16\\big[(-1)+2+(-3)+4+(-5)+6\\big]\\).",
      "Sum inside: \\(-1+2-3+4-5+6=3\\).",
      "\\(E(W)=\\dfrac{3}{6}=\\dfrac12\\). Since \\(E(W)>0\\), the game is favourable to the player.",
    ],
    answer: "\\(E(W)=\\dfrac12=0.5\\) rupees; the game is <b>favourable</b>.",
  },
  {
    board: "JEE Advanced",
    q: "A box has 4 tickets numbered \\(1,2,3,4\\). Two tickets are drawn at random <b>without replacement</b> and \\(S\\) is the sum of the two numbers. Find \\(E(S)\\) and \\(\\operatorname{Var}(S)\\).",
    steps: [
      "There are \\(\\binom{4}{2}=6\\) equally likely pairs. Their sums: \\(\\{1,2\\}{=}3,\\ \\{1,3\\}{=}4,\\ \\{1,4\\}{=}5,\\ \\{2,3\\}{=}5,\\ \\{2,4\\}{=}6,\\ \\{3,4\\}{=}7\\).",
      "PMF of \\(S\\): \\(P(3)=\\tfrac16,\\ P(4)=\\tfrac16,\\ P(5)=\\tfrac26,\\ P(6)=\\tfrac16,\\ P(7)=\\tfrac16\\).",
      "\\(E(S)=\\dfrac16(3+4+5+5+6+7)=\\dfrac{30}{6}=5\\).",
      "\\(E(S^2)=\\dfrac16(9+16+25+25+36+49)=\\dfrac{160}{6}=\\dfrac{80}{3}\\).",
      "\\(\\operatorname{Var}(S)=\\dfrac{80}{3}-5^2=\\dfrac{80}{3}-\\dfrac{75}{3}=\\dfrac{5}{3}\\).",
    ],
    answer: "\\(E(S)=5,\\quad \\operatorname{Var}(S)=\\dfrac{5}{3}\\approx 1.67\\).",
  },
  {
    board: "JEE Advanced",
    q: "Let \\(X\\) be the number on a single roll of a fair die and let \\(Y=\\dfrac{1}{X}\\). Find \\(E(Y)\\) and compare \\(E(Y)\\) with \\(\\dfrac{1}{E(X)}\\).",
    steps: [
      "\\(X\\) is uniform on \\(\\{1,2,3,4,5,6\\}\\), each with probability \\(\\tfrac16\\).",
      "By the law of the unconscious statistician, \\(E(Y)=E\\!\\left(\\dfrac1X\\right)=\\dfrac16\\sum_{x=1}^{6}\\dfrac1x\\).",
      "\\(\\sum_{x=1}^{6}\\dfrac1x=1+\\dfrac12+\\dfrac13+\\dfrac14+\\dfrac15+\\dfrac16=\\dfrac{60+30+20+15+12+10}{60}=\\dfrac{147}{60}=\\dfrac{49}{20}\\).",
      "So \\(E(Y)=\\dfrac16\\cdot\\dfrac{49}{20}=\\dfrac{49}{120}\\approx 0.408\\).",
      "Since \\(E(X)=3.5\\), \\(\\dfrac{1}{E(X)}=\\dfrac{2}{7}\\approx 0.286\\). Thus \\(E\\!\\left(\\dfrac1X\\right)\\ne\\dfrac{1}{E(X)}\\) — consistent with Jensen's inequality for the convex function \\(1/x\\).",
    ],
    answer: "\\(E(Y)=\\dfrac{49}{120}\\approx 0.408\\), which exceeds \\(\\dfrac{1}{E(X)}=\\dfrac27\\approx 0.286\\).",
  },
  {
    board: "JEE Advanced",
    q: "\\(X\\) and \\(Y\\) are independent with \\(E(X)=2,\\ \\operatorname{Var}(X)=3,\\ E(Y)=5,\\ \\operatorname{Var}(Y)=4\\). Find (a) \\(E(2X-3Y+1)\\) and (b) \\(\\operatorname{Var}(2X-3Y+1)\\).",
    steps: [
      "(a) Expectation is linear regardless of dependence: \\(E(2X-3Y+1)=2E(X)-3E(Y)+1\\).",
      "\\(=2(2)-3(5)+1=4-15+1=-10\\).",
      "(b) Constants drop out of variance; for independent \\(X,Y\\) the variances add: \\(\\operatorname{Var}(2X-3Y+1)=2^2\\operatorname{Var}(X)+(-3)^2\\operatorname{Var}(Y)\\).",
      "\\(=4(3)+9(4)=12+36=48\\).",
    ],
    answer: "(a) \\(E(2X-3Y+1)=-10\\). (b) \\(\\operatorname{Var}(2X-3Y+1)=48\\).",
  },
  {
    board: "JEE Advanced",
    q: "Five distinct letters are placed at random into their five addressed envelopes (one per envelope). Let \\(X\\) be the number of letters placed in the <b>correct</b> envelope. Using indicator variables, find \\(E(X)\\) and \\(\\operatorname{Var}(X)\\).",
    steps: [
      "Write \\(X=\\sum_{i=1}^{5} I_i\\), where \\(I_i=1\\) if letter \\(i\\) is in its correct envelope, else \\(0\\).",
      "By symmetry \\(P(I_i=1)=\\dfrac{1}{5}\\), so \\(E(I_i)=\\dfrac15\\) and \\(E(X)=\\sum E(I_i)=5\\cdot\\dfrac15=1\\).",
      "Each indicator is Bernoulli: \\(\\operatorname{Var}(I_i)=\\dfrac15\\left(1-\\dfrac15\\right)=\\dfrac{4}{25}\\).",
      "For \\(i\\ne j\\): \\(P(I_i=1,I_j=1)=\\dfrac{1}{5}\\cdot\\dfrac{1}{4}=\\dfrac{1}{20}\\), so \\(\\operatorname{Cov}(I_i,I_j)=\\dfrac{1}{20}-\\dfrac{1}{25}=\\dfrac{5-4}{100}=\\dfrac{1}{100}\\).",
      "\\(\\operatorname{Var}(X)=\\sum\\operatorname{Var}(I_i)+\\sum_{i\\ne j}\\operatorname{Cov}(I_i,I_j)=5\\cdot\\dfrac{4}{25}+5\\cdot4\\cdot\\dfrac{1}{100}\\).",
      "\\(=\\dfrac{20}{25}+\\dfrac{20}{100}=\\dfrac45+\\dfrac15=1\\).",
    ],
    answer: "\\(E(X)=1,\\quad \\operatorname{Var}(X)=1\\).",
  },
  {
    board: "JEE Advanced",
    q: "A continuous random variable has pdf \\(f(x)=\\dfrac{3}{8}x^{2}\\) for \\(0\\le x\\le 2\\) (and \\(0\\) otherwise). Find \\(E(X)\\), \\(E(X^{2})\\) and \\(\\operatorname{Var}(X)\\).",
    steps: [
      "Check normalisation: \\(\\int_0^2 \\dfrac38 x^2\\,dx=\\dfrac38\\cdot\\dfrac{8}{3}=1\\). Valid pdf.",
      "\\(E(X)=\\int_0^2 x\\cdot\\dfrac38 x^2\\,dx=\\dfrac38\\int_0^2 x^3\\,dx=\\dfrac38\\cdot\\dfrac{2^4}{4}=\\dfrac38\\cdot4=\\dfrac32\\).",
      "\\(E(X^2)=\\int_0^2 x^2\\cdot\\dfrac38 x^2\\,dx=\\dfrac38\\int_0^2 x^4\\,dx=\\dfrac38\\cdot\\dfrac{2^5}{5}=\\dfrac38\\cdot\\dfrac{32}{5}=\\dfrac{12}{5}\\).",
      "\\(\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=\\dfrac{12}{5}-\\left(\\dfrac32\\right)^2=\\dfrac{12}{5}-\\dfrac94=\\dfrac{48-45}{20}=\\dfrac{3}{20}\\).",
    ],
    answer: "\\(E(X)=\\dfrac32,\\quad E(X^2)=\\dfrac{12}{5},\\quad \\operatorname{Var}(X)=\\dfrac{3}{20}=0.15\\).",
  },
];
