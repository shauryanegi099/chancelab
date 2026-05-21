import type { ExamQ } from "./examTypes";
import { EXTRA } from "./exams_extra";
export type { ExamQ };

const BASE: Record<string, ExamQ[]> = {
  probability: [
    {
      board: "JEE Advanced",
      q: "A and B toss a fair coin alternately, A throwing first. The first to obtain a head wins. Find the probability that <b>A wins</b>.",
      steps: [
        "A wins only if the first head appears on an odd-numbered toss (1st, 3rd, 5th, …).",
        "\\(P(\\text{head on 1st}) = \\tfrac12\\); \\(P(\\text{first head on 3rd}) = (\\tfrac12)^2\\cdot\\tfrac12 = (\\tfrac12)^3\\); and so on.",
        "Sum the geometric series: \\(\\tfrac12 + (\\tfrac12)^3 + (\\tfrac12)^5 + \\cdots = \\dfrac{1/2}{1-1/4}\\).",
      ],
      answer: "\\(P(\\text{A wins}) = \\dfrac{2}{3}\\).",
    },
    {
      board: "JEE Advanced",
      q: "Four fair dice are rolled. Find the probability that <b>all four show different faces</b>.",
      steps: [
        "Total equally-likely outcomes: \\(6^4 = 1296\\).",
        "Favourable (all distinct): \\(6\\cdot5\\cdot4\\cdot3 = 360\\).",
        "\\(P = \\dfrac{360}{1296}\\).",
      ],
      answer: "\\(\\dfrac{5}{18} \\approx 0.278\\).",
    },
    {
      board: "A-Level",
      q: "Events \\(A\\) and \\(B\\) satisfy \\(P(A)=0.6,\\ P(B)=0.5,\\ P(A\\cup B)=0.8\\). (a) Find \\(P(A\\cap B)\\). (b) Determine whether \\(A\\) and \\(B\\) are independent.",
      steps: [
        "(a) Addition rule: \\(P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=0.6+0.5-0.8\\).",
        "(b) Independence test: compute \\(P(A)\\,P(B)=0.6\\times0.5=0.30\\) and compare with \\(P(A\\cap B)\\).",
      ],
      answer: "(a) \\(P(A\\cap B)=0.3\\). (b) Since \\(P(A)P(B)=0.3=P(A\\cap B)\\), the events are <b>independent</b>.",
    },
  ],

  bayes: [
    {
      board: "JEE Advanced",
      q: "A bag holds 5 red and 5 black balls. One ball is drawn, its colour noted, and it is returned along with <b>2 more balls of the same colour</b>. A second ball is then drawn. Given the second ball is <b>red</b>, find the probability that the first ball was red.",
      steps: [
        "If the 1st ball is red (prob \\(\\tfrac12\\)): bag becomes 7R, 5B (12 total) ⇒ \\(P(\\text{2nd red})=\\tfrac{7}{12}\\).",
        "If the 1st ball is black (prob \\(\\tfrac12\\)): bag becomes 5R, 7B (12 total) ⇒ \\(P(\\text{2nd red})=\\tfrac{5}{12}\\).",
        "Total: \\(P(\\text{2nd red})=\\tfrac12\\cdot\\tfrac{7}{12}+\\tfrac12\\cdot\\tfrac{5}{12}=\\tfrac{12}{24}=\\tfrac12\\).",
        "Bayes: \\(P(\\text{1st red}\\mid\\text{2nd red})=\\dfrac{\\tfrac12\\cdot\\tfrac{7}{12}}{\\tfrac12}\\).",
      ],
      answer: "\\(\\dfrac{7}{12}\\).",
    },
    {
      board: "JEE Advanced",
      q: "In a college, 60% of students are boys and 40% girls. 25% of the boys and 10% of the girls are taller than 1.75 m. A randomly chosen student is taller than 1.75 m. Find the probability the student is a <b>girl</b>.",
      steps: [
        "Total probability of 'tall': \\(P(T)=0.6(0.25)+0.4(0.10)=0.15+0.04=0.19\\).",
        "Bayes: \\(P(\\text{girl}\\mid T)=\\dfrac{0.4(0.10)}{0.19}=\\dfrac{0.04}{0.19}\\).",
      ],
      answer: "\\(\\dfrac{4}{19} \\approx 0.211\\).",
    },
    {
      board: "A-Level",
      q: "Machine A makes 70% of items, machine B 30%. 3% of A's items and 8% of B's items are defective. An item is found defective. Find the probability it came from <b>machine B</b>.",
      steps: [
        "\\(P(D)=0.7(0.03)+0.3(0.08)=0.021+0.024=0.045\\).",
        "\\(P(B\\mid D)=\\dfrac{0.024}{0.045}\\).",
      ],
      answer: "\\(\\dfrac{8}{15} \\approx 0.533\\).",
    },
  ],

  expectation: [
    {
      board: "JEE Advanced",
      q: "Two fair dice are thrown and \\(X\\) is their sum. Find \\(E(X)\\) and \\(\\operatorname{Var}(X)\\).",
      steps: [
        "For a single die: \\(E=3.5\\) and \\(\\operatorname{Var}=\\tfrac{35}{12}\\).",
        "Sum of two independent dice: \\(E(X)=3.5+3.5=7\\).",
        "Variances of independent variables add: \\(\\operatorname{Var}(X)=\\tfrac{35}{12}+\\tfrac{35}{12}=\\tfrac{35}{6}\\).",
      ],
      answer: "\\(E(X)=7,\\quad \\operatorname{Var}(X)=\\tfrac{35}{6}\\approx 5.83\\).",
    },
    {
      board: "JEE Advanced",
      q: "Three fair coins are tossed. Let \\(X\\) be the number of heads. Find \\(E(X)\\) and \\(\\operatorname{Var}(X)\\).",
      steps: [
        "\\(X\\sim\\text{Bin}(3,\\tfrac12)\\).",
        "\\(E(X)=np=3\\cdot\\tfrac12=1.5\\).",
        "\\(\\operatorname{Var}(X)=np(1-p)=3\\cdot\\tfrac12\\cdot\\tfrac12=0.75\\).",
      ],
      answer: "\\(E(X)=1.5,\\quad \\operatorname{Var}(X)=0.75\\).",
    },
    {
      board: "A-Level",
      q: "A discrete random variable has \\(P(X=x)=kx\\) for \\(x=1,2,3,4\\). Find (a) \\(k\\), (b) \\(E(X)\\), (c) \\(\\operatorname{Var}(X)\\), (d) \\(E(2X-3)\\) and \\(\\operatorname{Var}(2X-3)\\).",
      steps: [
        "(a) Probabilities sum to 1: \\(k(1+2+3+4)=10k=1\\Rightarrow k=0.1\\).",
        "(b) \\(E(X)=\\sum x\\,(0.1x)=0.1(1+4+9+16)=0.1\\cdot 30=3\\).",
        "(c) \\(E(X^2)=\\sum x^2(0.1x)=0.1(1+8+27+64)=10\\); so \\(\\operatorname{Var}(X)=10-3^2=1\\).",
        "(d) \\(E(2X-3)=2(3)-3=3\\); \\(\\operatorname{Var}(2X-3)=2^2\\cdot 1=4\\).",
      ],
      answer: "\\(k=0.1,\\ E(X)=3,\\ \\operatorname{Var}(X)=1,\\ E(2X-3)=3,\\ \\operatorname{Var}(2X-3)=4\\).",
    },
  ],

  normal: [
    {
      board: "A-Level",
      q: "Bolt lengths are normally distributed as \\(N(50,\\,2^2)\\) mm. Find (a) \\(P(X<53)\\), (b) \\(P(48<X<53)\\), (c) the value \\(k\\) such that \\(P(X>k)=0.05\\).",
      steps: [
        "(a) \\(z=\\tfrac{53-50}{2}=1.5\\); from tables \\(\\Phi(1.5)=0.9332\\).",
        "(b) \\(z_1=\\tfrac{48-50}{2}=-1,\\ z_2=1.5\\); \\(\\Phi(1.5)-\\Phi(-1)=0.9332-0.1587\\).",
        "(c) \\(P(X>k)=0.05\\Rightarrow z=1.645\\Rightarrow k=50+1.645(2)\\).",
      ],
      answer: "(a) \\(0.9332\\)  (b) \\(0.7745\\)  (c) \\(k\\approx 53.29\\) mm.",
    },
    {
      board: "A-Level",
      q: "A normally distributed variable \\(X\\) satisfies \\(P(X<20)=0.2\\) and \\(P(X>32)=0.1\\). Find the mean \\(\\mu\\) and standard deviation \\(\\sigma\\).",
      steps: [
        "Standardise the lower tail: \\(\\Phi^{-1}(0.2)=-0.8416\\Rightarrow \\tfrac{20-\\mu}{\\sigma}=-0.8416\\).",
        "Upper tail: \\(P(X>32)=0.1\\Rightarrow \\Phi^{-1}(0.9)=1.2816\\Rightarrow \\tfrac{32-\\mu}{\\sigma}=1.2816\\).",
        "Subtract the two equations: \\(12=(1.2816+0.8416)\\sigma=2.1232\\,\\sigma\\Rightarrow \\sigma\\approx 5.65\\).",
        "Back-substitute: \\(\\mu=20+0.8416(5.65)\\approx 24.76\\).",
      ],
      answer: "\\(\\sigma\\approx 5.65,\\quad \\mu\\approx 24.76\\).",
    },
  ],

  counting: [
    {
      board: "JEE Advanced",
      q: "Find the number of distinct arrangements of all the letters of the word <b>INDEPENDENCE</b>.",
      steps: [
        "The 12 letters are: N×3, E×4, D×2, and I, P, C once each.",
        "Distinct arrangements \\(= \\dfrac{12!}{3!\\,4!\\,2!}\\).",
      ],
      answer: "\\(\\dfrac{12!}{3!\\,4!\\,2!} = 1{,}663{,}200\\).",
    },
    {
      board: "JEE Advanced",
      q: "In how many ways can 5 boys and 3 girls be seated in a row so that <b>no two girls sit together</b>?",
      steps: [
        "Seat the 5 boys first: \\(5! = 120\\) ways. This creates 6 gaps (including the ends).",
        "Place the 3 girls into 3 distinct gaps: \\(P(6,3)=6\\cdot5\\cdot4=120\\).",
        "Multiply: \\(120\\times 120\\).",
      ],
      answer: "\\(14{,}400\\).",
    },
    {
      board: "A-Level",
      q: "A code is 3 letters from the 26-letter alphabet. How many codes are possible (a) if letters may repeat, (b) if no letter may repeat?",
      steps: ["(a) \\(26^3\\).", "(b) \\(26\\cdot25\\cdot24\\)."],
      answer: "(a) \\(17{,}576\\)  (b) \\(15{,}600\\).",
    },
  ],

  permutations: [
    {
      board: "JEE Advanced",
      q: "How many numbers between <b>1000 and 4000</b> can be formed using the digits 0,1,2,3,4 if repetition is allowed?",
      steps: [
        "A 4-digit number \\(<4000\\) and \\(\\ge1000\\) needs a leading digit from \\(\\{1,2,3\\}\\): 3 choices.",
        "Each of the other 3 digits: 5 choices.",
        "Total \\(=3\\times5\\times5\\times5\\).",
      ],
      answer: "\\(375\\).",
    },
    {
      board: "JEE Advanced",
      q: "Six people sit around a round table. In how many ways can they sit so that two particular persons are <b>not adjacent</b>?",
      steps: [
        "Total circular arrangements: \\((6-1)! = 120\\).",
        "Arrangements with the pair together: treat them as a block \\((5-1)!\\cdot2! = 24\\cdot2 = 48\\).",
        "Not adjacent \\(=120-48\\).",
      ],
      answer: "\\(72\\).",
    },
    {
      board: "A-Level",
      q: "Find the number of distinct arrangements of the letters of <b>STATISTICS</b>.",
      steps: ["Letters: S×3, T×3, I×2, A, C (10 total).", "\\(\\dfrac{10!}{3!\\,3!\\,2!}\\)."],
      answer: "\\(50{,}400\\).",
    },
  ],

  combinations: [
    {
      board: "JEE Advanced",
      q: "A committee of 5 is chosen from 6 men and 4 women, containing <b>at least 2 women</b>. In how many ways?",
      steps: [
        "Split by number of women (2, 3, or 4):",
        "\\(\\binom{4}{2}\\binom{6}{3}+\\binom{4}{3}\\binom{6}{2}+\\binom{4}{4}\\binom{6}{1}\\)",
        "\\(=6\\cdot20 + 4\\cdot15 + 1\\cdot6 = 120+60+6\\).",
      ],
      answer: "\\(186\\).",
    },
    {
      board: "JEE Advanced",
      q: "How many <b>diagonals</b> does a convex polygon of 12 sides have?",
      steps: [
        "Lines joining any 2 of 12 vertices: \\(\\binom{12}{2}=66\\).",
        "Subtract the 12 sides: \\(66-12\\).",
      ],
      answer: "\\(54\\).",
    },
    {
      board: "A-Level",
      q: "How many different 4-card hands can be dealt from a standard 52-card deck?",
      steps: ["Order doesn't matter: \\(\\binom{52}{4}\\)."],
      answer: "\\(270{,}725\\).",
    },
  ],

  conditional: [
    {
      board: "JEE Advanced",
      q: "Two fair dice are thrown. Given that the <b>sum is 7</b>, find the probability that <b>at least one die shows a 2</b>.",
      steps: [
        "Sum = 7 outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 equally likely.",
        "Those containing a 2: (2,5),(5,2) — 2 of them.",
        "\\(P=\\dfrac{2}{6}\\).",
      ],
      answer: "\\(\\dfrac{1}{3}\\).",
    },
    {
      board: "JEE Advanced",
      q: "Given \\(P(A)=0.4,\\ P(B)=0.5,\\ P(A\\cap B)=0.2\\), find \\(P(A\\mid B)\\) and decide whether \\(A,B\\) are independent.",
      steps: [
        "\\(P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0.2}{0.5}=0.4\\).",
        "Since \\(P(A\\mid B)=0.4=P(A)\\), knowing \\(B\\) doesn't change \\(A\\).",
      ],
      answer: "\\(P(A\\mid B)=0.4\\); the events are <b>independent</b>.",
    },
    {
      board: "A-Level",
      q: "Two cards are drawn without replacement from a standard deck. Given the first card is a king, find the probability the second is also a king.",
      steps: ["After removing one king, 3 kings remain among 51 cards.", "\\(P=\\dfrac{3}{51}\\)."],
      answer: "\\(\\dfrac{1}{17}\\).",
    },
  ],

  randomvars: [
    {
      board: "JEE Advanced",
      q: "A discrete random variable has \\(P(X=x)=kx^2\\) for \\(x=1,2,3\\). Find \\(k\\) and \\(E(X)\\).",
      steps: [
        "Normalise: \\(k(1+4+9)=14k=1\\Rightarrow k=\\tfrac{1}{14}\\).",
        "\\(E(X)=\\sum x\\cdot kx^2 = k(1+8+27)=\\tfrac{36}{14}\\).",
      ],
      answer: "\\(k=\\tfrac{1}{14},\\quad E(X)=\\tfrac{18}{7}\\approx 2.57\\).",
    },
    {
      board: "A-Level",
      q: "A continuous random variable has pdf \\(f(x)=kx^2\\) for \\(0\\le x\\le 2\\) (else 0). Find \\(k\\) and \\(P(X>1)\\).",
      steps: [
        "\\(\\int_0^2 kx^2\\,dx = k\\cdot\\tfrac{8}{3}=1\\Rightarrow k=\\tfrac{3}{8}\\).",
        "\\(P(X>1)=\\int_1^2 \\tfrac{3}{8}x^2\\,dx=\\tfrac{3}{8}\\cdot\\tfrac{2^3-1^3}{3}=\\tfrac{7}{8}\\).",
      ],
      answer: "\\(k=\\tfrac{3}{8},\\quad P(X>1)=0.875\\).",
    },
  ],

  discrete: [
    {
      board: "JEE Advanced",
      q: "A fair die is rolled twice. Let \\(X\\) be the <b>maximum</b> of the two scores. Find \\(P(X=4)\\).",
      steps: [
        "\\(P(X\\le 4)=\\left(\\tfrac{4}{6}\\right)^2\\) and \\(P(X\\le 3)=\\left(\\tfrac{3}{6}\\right)^2\\).",
        "\\(P(X=4)=P(X\\le4)-P(X\\le3)=\\tfrac{16}{36}-\\tfrac{9}{36}\\).",
      ],
      answer: "\\(\\dfrac{7}{36}\\).",
    },
    {
      board: "A-Level",
      q: "A discrete uniform variable on \\(\\{1,2,\\dots,n\\}\\) has mean 5.5. Find \\(n\\) and the variance.",
      steps: [
        "Mean \\(=\\tfrac{n+1}{2}=5.5\\Rightarrow n=10\\).",
        "Variance \\(=\\tfrac{n^2-1}{12}=\\tfrac{99}{12}\\).",
      ],
      answer: "\\(n=10,\\quad \\operatorname{Var}=8.25\\).",
    },
  ],

  binomial: [
    {
      board: "JEE Advanced",
      q: "A coin with \\(P(\\text{head})=\\tfrac13\\) is tossed 5 times. Find the probability of <b>exactly 3 heads</b>.",
      steps: [
        "\\(P=\\binom{5}{3}\\left(\\tfrac13\\right)^3\\left(\\tfrac23\\right)^2\\).",
        "\\(=10\\cdot\\tfrac{1}{27}\\cdot\\tfrac{4}{9}=\\tfrac{40}{243}\\).",
      ],
      answer: "\\(\\dfrac{40}{243}\\approx 0.165\\).",
    },
    {
      board: "JEE Advanced",
      q: "If \\(X\\sim\\text{Bin}(n,p)\\) has mean 4 and variance \\(\\tfrac{8}{3}\\), find \\(n\\) and \\(p\\).",
      steps: [
        "\\(np=4\\) and \\(np(1-p)=\\tfrac{8}{3}\\).",
        "Divide: \\(1-p=\\tfrac{8/3}{4}=\\tfrac{2}{3}\\Rightarrow p=\\tfrac13\\), so \\(n=\\tfrac{4}{1/3}=12\\).",
      ],
      answer: "\\(n=12,\\quad p=\\tfrac13\\).",
    },
    {
      board: "A-Level",
      q: "10% of items are defective. In a sample of 8, find the probability of <b>at least one</b> defective.",
      steps: ["\\(P(\\ge1)=1-P(0)=1-(0.9)^8\\)."],
      answer: "\\(\\approx 0.570\\).",
    },
  ],

  poisson: [
    {
      board: "JEE Advanced",
      q: "Calls arrive as a Poisson process at mean rate 3 per minute. Find the probability of <b>more than 2 calls</b> in a given minute.",
      steps: [
        "\\(P(X>2)=1-\\big[P(0)+P(1)+P(2)\\big]\\) with \\(\\lambda=3\\).",
        "\\(=1-e^{-3}\\left(1+3+\\tfrac{9}{2}\\right)=1-8.5\\,e^{-3}\\).",
      ],
      answer: "\\(\\approx 0.577\\).",
    },
    {
      board: "JEE Advanced",
      q: "Each independent trial succeeds with probability 0.25. Find the probability that the <b>first success occurs on the 4th trial</b> (Geometric).",
      steps: ["Three failures then a success: \\((0.75)^3(0.25)\\)."],
      answer: "\\(\\approx 0.105\\).",
    },
    {
      board: "A-Level",
      q: "\\(X\\sim\\text{Poisson}(2)\\). Find \\(P(X\\le 1)\\).",
      steps: ["\\(P(X\\le1)=e^{-2}(1+2)=3e^{-2}\\)."],
      answer: "\\(\\approx 0.406\\).",
    },
  ],

  jointrv: [
    {
      board: "JEE Advanced",
      q: "The joint PMF is \\(p(x,y)=c(x+y)\\) for \\(x,y\\in\\{1,2\\}\\). Find \\(c\\) and the marginal \\(P(X=1)\\).",
      steps: [
        "Sum all four cells: \\(c[(2)+(3)+(3)+(4)]=12c=1\\Rightarrow c=\\tfrac{1}{12}\\).",
        "\\(P(X=1)=p(1,1)+p(1,2)=\\tfrac{2+3}{12}\\).",
      ],
      answer: "\\(c=\\tfrac{1}{12},\\quad P(X=1)=\\tfrac{5}{12}\\).",
    },
    {
      board: "A-Level",
      q: "\\(X\\) and \\(Y\\) are independent with \\(P(X=1)=0.3\\) and \\(P(Y=1)=0.6\\). Find \\(P(X=1,\\,Y=1)\\).",
      steps: ["Independence: \\(P(X=1,Y=1)=P(X=1)\\,P(Y=1)=0.3\\times0.6\\)."],
      answer: "\\(0.18\\).",
    },
  ],

  calculus: [
    {
      board: "JEE Advanced",
      q: "Find the maximum value of \\(f(x)=x^3-3x\\) on the interval \\([-2,2]\\).",
      steps: [
        "\\(f'(x)=3x^2-3=0\\Rightarrow x=\\pm1\\). \\(f(-1)=2\\) (local max), \\(f(1)=-2\\) (local min).",
        "Endpoints: \\(f(2)=2,\\ f(-2)=-2\\).",
        "Compare all candidate values.",
      ],
      answer: "Maximum value \\(=2\\) (at \\(x=-1\\) and \\(x=2\\)).",
    },
    {
      board: "JEE Advanced",
      q: "Evaluate \\(\\displaystyle\\int_0^1 x\\,e^{x}\\,dx\\).",
      steps: [
        "By parts: \\(\\int x e^x dx = xe^x - e^x\\).",
        "Evaluate \\(0\\to1\\): \\((e-e)-(0-1)\\).",
      ],
      answer: "\\(1\\).",
    },
    {
      board: "A-Level",
      q: "Evaluate \\(\\displaystyle\\int_0^{\\pi/2}\\sin x\\cos x\\,dx\\).",
      steps: ["\\(=\\left[\\tfrac{\\sin^2 x}{2}\\right]_0^{\\pi/2}=\\tfrac12-0\\)."],
      answer: "\\(\\tfrac12\\).",
    },
  ],

  continuous: [
    {
      board: "JEE Advanced",
      q: "A continuous variable has pdf \\(f(x)=k e^{-2x}\\) for \\(x\\ge0\\). Find \\(k\\) and \\(P(X<1)\\).",
      steps: [
        "\\(\\int_0^\\infty k e^{-2x}\\,dx = \\tfrac{k}{2}=1\\Rightarrow k=2\\).",
        "\\(P(X<1)=\\int_0^1 2e^{-2x}\\,dx = 1-e^{-2}\\).",
      ],
      answer: "\\(k=2,\\quad P(X<1)\\approx 0.865\\).",
    },
    {
      board: "A-Level",
      q: "\\(X\\) is uniform on \\([2,8]\\). Find \\(P(X>5)\\), \\(E(X)\\) and \\(\\operatorname{Var}(X)\\).",
      steps: [
        "\\(P(X>5)=\\tfrac{8-5}{8-2}=\\tfrac{3}{6}\\).",
        "\\(E(X)=\\tfrac{2+8}{2}=5\\); \\(\\operatorname{Var}=\\tfrac{(8-2)^2}{12}=3\\).",
      ],
      answer: "\\(P=0.5,\\ E(X)=5,\\ \\operatorname{Var}(X)=3\\).",
    },
  ],

  exponential: [
    {
      board: "A-Level",
      q: "A component's lifetime is exponential with mean 5 years. Find the probability it lasts <b>more than 8 years</b>.",
      steps: [
        "Mean \\(=\\tfrac1\\lambda=5\\Rightarrow \\lambda=0.2\\).",
        "\\(P(X>8)=e^{-\\lambda\\cdot8}=e^{-1.6}\\).",
      ],
      answer: "\\(\\approx 0.202\\).",
    },
    {
      board: "JEE Advanced",
      q: "For an exponential with \\(\\lambda=0.1\\), use the memoryless property to find \\(P(X>20\\mid X>10)\\).",
      steps: [
        "Memoryless: \\(P(X>s+t\\mid X>s)=P(X>t)\\).",
        "Here \\(P(X>20\\mid X>10)=P(X>10)=e^{-0.1\\cdot10}=e^{-1}\\).",
      ],
      answer: "\\(\\approx 0.368\\).",
    },
  ],

  statistics: [
    {
      board: "A-Level",
      q: "A sample is 5, 7, 8, 10, 10. Find the sample mean and the sample variance \\(s^2\\) (divide by \\(n-1\\)).",
      steps: [
        "Mean \\(=\\tfrac{40}{5}=8\\).",
        "Squared deviations: \\(9,1,0,4,4\\) (sum 18).",
        "\\(s^2=\\tfrac{18}{n-1}=\\tfrac{18}{4}\\).",
      ],
      answer: "Mean \\(=8,\\quad s^2=4.5\\).",
    },
    {
      board: "A-Level",
      q: "In a sample of 200, 50 are successes. Estimate the population proportion and give the standard error of the estimate.",
      steps: [
        "\\(\\hat p=\\tfrac{50}{200}=0.25\\).",
        "\\(\\text{SE}=\\sqrt{\\tfrac{\\hat p(1-\\hat p)}{n}}=\\sqrt{\\tfrac{0.25\\cdot0.75}{200}}\\).",
      ],
      answer: "\\(\\hat p=0.25,\\quad \\text{SE}\\approx 0.031\\).",
    },
  ],

  dispersion: [
    {
      board: "A-Level",
      q: "For the data 4, 8, 15, 16, 23, 42 find the median, \\(Q_1\\), \\(Q_3\\) and the IQR.",
      steps: [
        "\\(n=6\\): median \\(=\\tfrac{15+16}{2}=15.5\\).",
        "Lower half 4,8,15 ⇒ \\(Q_1=8\\); upper half 16,23,42 ⇒ \\(Q_3=23\\).",
        "\\(\\text{IQR}=Q_3-Q_1\\).",
      ],
      answer: "median \\(=15.5,\\ Q_1=8,\\ Q_3=23,\\ \\text{IQR}=15\\).",
    },
    {
      board: "A-Level",
      q: "A data set has \\(Q_1=10\\) and \\(Q_3=18\\). Using the 1.5×IQR rule, determine whether the values 2 and 31 are outliers.",
      steps: [
        "\\(\\text{IQR}=8\\). Fences: lower \\(=10-1.5(8)=-2\\), upper \\(=18+1.5(8)=30\\).",
        "Compare: \\(2>-2\\) (not an outlier); \\(31>30\\) (outlier).",
      ],
      answer: "2 is not an outlier; <b>31 is an outlier</b>.",
    },
  ],

  covariance: [
    {
      board: "A-Level",
      q: "For \\(x:1,2,3\\) and \\(y:3,5,7\\), find the covariance and the correlation coefficient.",
      steps: [
        "\\(\\bar x=2,\\ \\bar y=5\\). Deviations: \\(x{:}-1,0,1\\); \\(y{:}-2,0,2\\).",
        "\\(\\operatorname{Cov}=\\tfrac{1}{n}\\sum(x-\\bar x)(y-\\bar y)=\\tfrac{(2+0+2)}{3}=\\tfrac{4}{3}\\).",
        "Since \\(y=2x+1\\) exactly, the points are perfectly linear.",
      ],
      answer: "\\(\\operatorname{Cov}=\\tfrac{4}{3},\\quad r=+1\\).",
    },
    {
      board: "A-Level",
      q: "Given \\(\\operatorname{Cov}(X,Y)=-6,\\ \\sigma_X=3,\\ \\sigma_Y=4\\), find the correlation and interpret it.",
      steps: ["\\(r=\\dfrac{\\operatorname{Cov}}{\\sigma_X\\sigma_Y}=\\dfrac{-6}{3\\cdot4}\\)."],
      answer: "\\(r=-0.5\\): a moderate <b>negative</b> linear relationship.",
    },
  ],

  lln: [
    {
      board: "A-Level",
      q: "A population has \\(\\sigma=12\\). (a) Find the standard error of the sample mean for \\(n=36\\). (b) What \\(n\\) makes the standard error equal to 1?",
      steps: [
        "(a) \\(\\text{SE}=\\dfrac{\\sigma}{\\sqrt n}=\\dfrac{12}{\\sqrt{36}}\\).",
        "(b) \\(\\dfrac{12}{\\sqrt n}=1\\Rightarrow \\sqrt n=12\\Rightarrow n=144\\).",
      ],
      answer: "(a) \\(\\text{SE}=2\\)  (b) \\(n=144\\).",
    },
    {
      board: "JEE Advanced",
      q: "A fair coin is tossed \\(n\\) times. By the Law of Large Numbers, what does the proportion of heads approach, and what is the standard deviation of the <b>number</b> of heads?",
      steps: [
        "Proportion \\(\\to p=\\tfrac12\\) as \\(n\\to\\infty\\).",
        "Count \\(\\sim\\text{Bin}(n,\\tfrac12)\\): SD \\(=\\sqrt{n\\cdot\\tfrac12\\cdot\\tfrac12}=\\tfrac{\\sqrt n}{2}\\).",
      ],
      answer: "Proportion \\(\\to \\tfrac12\\); SD of count \\(=\\tfrac{\\sqrt n}{2}\\).",
    },
  ],

  clt: [
    {
      board: "A-Level",
      q: "Item weights have mean 500 g and SD 40 g. For a random sample of 100 items, find \\(P(\\bar X > 506)\\).",
      steps: [
        "By the CLT \\(\\bar X\\approx N\\!\\left(500,\\ \\tfrac{40^2}{100}\\right)\\), so \\(\\text{SE}=4\\).",
        "\\(z=\\dfrac{506-500}{4}=1.5\\); \\(P=1-\\Phi(1.5)\\).",
      ],
      answer: "\\(\\approx 0.0668\\).",
    },
    {
      board: "A-Level",
      q: "\\(50\\) independent measurements each have mean 2 and variance 1. Approximate \\(P(\\text{total} > 110)\\).",
      steps: [
        "Total \\(\\approx N(\\mu=100,\\ \\sigma^2=50)\\), so SD \\(=\\sqrt{50}\\approx7.07\\).",
        "\\(z=\\dfrac{110-100}{7.07}\\approx1.41\\); \\(P=1-\\Phi(1.41)\\).",
      ],
      answer: "\\(\\approx 0.079\\).",
    },
  ],

  estimation: [
    {
      board: "JEE Advanced",
      q: "From \\(n\\) independent Bernoulli\\((p)\\) trials, \\(k\\) successes are observed. Derive the maximum-likelihood estimator of \\(p\\), and evaluate it for 12 successes in 40 trials.",
      steps: [
        "Likelihood \\(L(p)=p^{k}(1-p)^{n-k}\\); log-likelihood \\(\\ell=k\\ln p+(n-k)\\ln(1-p)\\).",
        "\\(\\ell'(p)=\\dfrac{k}{p}-\\dfrac{n-k}{1-p}=0 \\Rightarrow \\hat p=\\dfrac{k}{n}\\).",
        "For \\(k=12,n=40\\): \\(\\hat p=\\tfrac{12}{40}\\).",
      ],
      answer: "\\(\\hat p_{\\text{MLE}}=\\dfrac{k}{n}=0.3\\).",
    },
    {
      board: "A-Level",
      q: "Observations \\(4,6,5,9\\) are drawn from \\(N(\\mu,\\sigma^2)\\). State the MLE of \\(\\mu\\) and compute it.",
      steps: ["The MLE of \\(\\mu\\) for a normal sample is the sample mean \\(\\bar x\\).", "\\(\\bar x=\\tfrac{4+6+5+9}{4}\\)."],
      answer: "\\(\\hat\\mu=6\\).",
    },
  ],
};

const SLUGS = Array.from(new Set([...Object.keys(BASE), ...Object.keys(EXTRA)]));
export const EXAMS: Record<string, ExamQ[]> = Object.fromEntries(
  SLUGS.map((k) => [k, [...(BASE[k] ?? []), ...(EXTRA[k] ?? [])]])
);
