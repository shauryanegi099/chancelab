import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "The joint PMF of \\((X,Y)\\) is \\(p(x,y) = c\\,xy\\) for \\(x\\in\\{1,2,3\\}\\) and \\(y\\in\\{1,2\\}\\). Find (a) the constant \\(c\\), (b) the marginal \\(P(X=2)\\), (c) decide whether \\(X\\) and \\(Y\\) are independent.",
    steps: [
      "(a) Total probability \\(=1\\): \\(\\displaystyle\\sum_{x}\\sum_{y} c\\,xy = c\\left(\\sum_{x} x\\right)\\left(\\sum_{y} y\\right) = c\\,(1+2+3)(1+2) = c\\cdot6\\cdot3 = 18c = 1\\), so \\(c = \\dfrac{1}{18}\\).",
      "(b) Marginal of \\(X\\): \\(P(X=x) = \\sum_{y} c\\,xy = c\\,x(1+2) = \\dfrac{3x}{18} = \\dfrac{x}{6}\\). Hence \\(P(X=2) = \\dfrac{2}{6} = \\dfrac{1}{3}\\).",
      "(c) Similarly \\(P(Y=y) = \\sum_{x} c\\,xy = c\\,y(1+2+3) = \\dfrac{6y}{18} = \\dfrac{y}{3}\\).",
      "Check the product: \\(P(X=x)P(Y=y) = \\dfrac{x}{6}\\cdot\\dfrac{y}{3} = \\dfrac{xy}{18} = c\\,xy = p(x,y)\\) for every \\((x,y)\\).",
      "Since the joint PMF factorises into the marginals, \\(X\\) and \\(Y\\) are independent.",
    ],
    answer: "(a) \\(c=\\dfrac{1}{18}\\)  (b) \\(P(X=2)=\\dfrac13\\)  (c) <b>independent</b>.",
  },
  {
    board: "JEE Advanced",
    q: "The joint PMF of \\((X,Y)\\) is \\(p(x,y) = k(x+y)\\) for \\(x\\in\\{0,1,2\\}\\) and \\(y\\in\\{1,2\\}\\). Find \\(k\\) and the conditional probability \\(P(Y=2\\mid X=1)\\).",
    steps: [
      "List the six values of \\(x+y\\): for \\(x=0\\): \\(1,2\\); for \\(x=1\\): \\(2,3\\); for \\(x=2\\): \\(3,4\\).",
      "Sum: \\((1+2)+(2+3)+(3+4) = 3+5+7 = 15\\), so \\(15k = 1\\Rightarrow k = \\dfrac{1}{15}\\).",
      "Marginal at \\(x=1\\): \\(P(X=1) = p(1,1)+p(1,2) = k(2)+k(3) = 5k = \\dfrac{5}{15} = \\dfrac13\\).",
      "Conditional: \\(P(Y=2\\mid X=1) = \\dfrac{p(1,2)}{P(X=1)} = \\dfrac{k\\cdot3}{5k} = \\dfrac{3}{5}\\).",
    ],
    answer: "\\(k=\\dfrac{1}{15}\\); \\(P(Y=2\\mid X=1)=\\dfrac{3}{5}\\).",
  },
  {
    board: "JEE Advanced",
    q: "Two fair dice are rolled. Let \\(X\\) be the score on the <b>first</b> die and \\(S = X + Y_2\\) the <b>sum</b> of both dice (where \\(Y_2\\) is the second die). Find \\(\\operatorname{Cov}(X,S)\\).",
    steps: [
      "\\(\\operatorname{Cov}(X,S) = \\operatorname{Cov}(X,\\,X+Y_2) = \\operatorname{Cov}(X,X) + \\operatorname{Cov}(X,Y_2)\\).",
      "\\(\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)\\), and since the two dice are independent, \\(\\operatorname{Cov}(X,Y_2) = 0\\).",
      "For a single fair die, \\(\\operatorname{Var}(X) = E(X^2) - [E(X)]^2 = \\dfrac{91}{6} - \\left(\\dfrac{7}{2}\\right)^2 = \\dfrac{91}{6} - \\dfrac{49}{4}\\).",
      "\\(= \\dfrac{182 - 147}{12} = \\dfrac{35}{12}\\).",
      "Therefore \\(\\operatorname{Cov}(X,S) = \\dfrac{35}{12} + 0 = \\dfrac{35}{12}\\).",
    ],
    answer: "\\(\\operatorname{Cov}(X,S)=\\dfrac{35}{12}\\approx 2.92\\).",
  },
  {
    board: "JEE Advanced",
    q: "The joint distribution of \\((X,Y)\\) is given by the table \\(p(0,0)=0.1,\\ p(0,1)=0.2,\\ p(1,0)=0.3,\\ p(1,1)=0.4\\). (a) Find the marginals. (b) Compute \\(\\operatorname{Cov}(X,Y)\\) and decide whether \\(X,Y\\) are independent.",
    steps: [
      "(a) Marginals of \\(X\\): \\(P(X=0)=0.1+0.2=0.3\\), \\(P(X=1)=0.3+0.4=0.7\\). Marginals of \\(Y\\): \\(P(Y=0)=0.1+0.3=0.4\\), \\(P(Y=1)=0.2+0.4=0.6\\).",
      "\\(E(X)=0.7,\\ E(Y)=0.6\\). \\(E(XY) = \\sum xy\\,p(x,y) = 1\\cdot1\\cdot0.4 = 0.4\\) (only the \\((1,1)\\) cell contributes).",
      "\\(\\operatorname{Cov}(X,Y) = E(XY) - E(X)E(Y) = 0.4 - (0.7)(0.6) = 0.4 - 0.42 = -0.02\\).",
      "Independence test: \\(P(X=0)P(Y=0) = 0.3\\times0.4 = 0.12 \\ne 0.1 = p(0,0)\\).",
      "Since the product of marginals does not equal the joint probability, \\(X\\) and \\(Y\\) are <b>not independent</b> (consistent with \\(\\operatorname{Cov}\\ne0\\)).",
    ],
    answer: "\\(\\operatorname{Cov}(X,Y)=-0.02\\); \\(X,Y\\) are <b>not independent</b>.",
  },
  {
    board: "JEE Advanced",
    q: "Two fair dice are rolled, with scores \\(X\\) and \\(Y\\). Find (a) \\(P(X+Y=5)\\), (b) the conditional probability \\(P(X=2\\mid X+Y=5)\\).",
    steps: [
      "(a) Outcomes with \\(X+Y=5\\): \\((1,4),(2,3),(3,2),(4,1)\\) — 4 of the 36 equally likely pairs.",
      "\\(P(X+Y=5) = \\dfrac{4}{36} = \\dfrac{1}{9}\\).",
      "(b) Among those 4 outcomes, exactly one has \\(X=2\\), namely \\((2,3)\\).",
      "\\(P(X=2\\mid X+Y=5) = \\dfrac{P(X=2,\\,X+Y=5)}{P(X+Y=5)} = \\dfrac{1/36}{4/36} = \\dfrac{1}{4}\\).",
    ],
    answer: "(a) \\(\\dfrac{1}{9}\\)  (b) \\(\\dfrac{1}{4}\\).",
  },
  {
    board: "JEE Advanced",
    q: "A fair coin is tossed 3 times. Let \\(X\\) be the number of heads and \\(Y\\) the number of <b>head-runs boundaries</b> defined simply as \\(Y=1\\) if the <b>first toss is a head</b> and \\(Y=0\\) otherwise. Find the joint PMF table and \\(P(X=2\\mid Y=1)\\).",
    steps: [
      "There are 8 equally likely sequences. \\(X\\) counts total heads; \\(Y=1\\) iff the first toss is H.",
      "Sequences with first toss H (\\(Y=1\\)): HHH\\((X=3)\\), HHT, HTH \\((X=2)\\), HTT \\((X=1)\\). So given \\(Y=1\\): \\(X=3\\) once, \\(X=2\\) twice, \\(X=1\\) once.",
      "Joint probabilities (each sequence \\(=\\tfrac18\\)): \\(p(3,1)=\\tfrac18,\\ p(2,1)=\\tfrac{2}{8},\\ p(1,1)=\\tfrac18\\); and \\(P(Y=1)=\\tfrac{4}{8}=\\tfrac12\\).",
      "\\(P(X=2\\mid Y=1) = \\dfrac{p(2,1)}{P(Y=1)} = \\dfrac{2/8}{4/8} = \\dfrac{2}{4} = \\dfrac{1}{2}\\).",
    ],
    answer: "\\(P(Y=1)=\\dfrac12\\); \\(P(X=2\\mid Y=1)=\\dfrac{1}{2}\\).",
  },
  {
    board: "JEE Advanced",
    q: "The joint PMF of \\((X,Y)\\) is \\(p(x,y) = \\dfrac{x+2y}{30}\\) for \\(x\\in\\{1,2\\}\\) and \\(y\\in\\{1,2,3\\}\\). Verify it is a valid PMF and find the marginal distribution of \\(Y\\).",
    steps: [
      "Compute the six values \\(x+2y\\): for \\(x=1\\): \\(3,5,7\\) (at \\(y=1,2,3\\)); for \\(x=2\\): \\(4,6,8\\).",
      "Their sum is \\((3+5+7)+(4+6+8) = 15+18 = 33\\)... recheck: the normaliser must make the total 1.",
      "Total \\(=\\dfrac{33}{30}\\ne1\\), so as stated it is <b>not</b> valid; the correct constant is \\(\\dfrac{1}{33}\\). Replace \\(30\\) by \\(33\\): \\(p(x,y)=\\dfrac{x+2y}{33}\\).",
      "Marginal of \\(Y\\): \\(P(Y=y) = \\sum_{x=1}^{2}\\dfrac{x+2y}{33} = \\dfrac{(1+2y)+(2+2y)}{33} = \\dfrac{3+4y}{33}\\).",
      "Thus \\(P(Y=1)=\\dfrac{7}{33},\\ P(Y=2)=\\dfrac{11}{33}=\\dfrac13,\\ P(Y=3)=\\dfrac{15}{33}=\\dfrac{5}{11}\\); these sum to \\(\\dfrac{33}{33}=1\\).",
    ],
    answer: "Valid only with constant \\(\\dfrac{1}{33}\\); then \\(P(Y=y)=\\dfrac{3+4y}{33}\\), i.e. \\(\\dfrac{7}{33},\\dfrac{1}{3},\\dfrac{5}{11}\\).",
  },
  {
    board: "JEE Advanced",
    q: "Independent random variables \\(X\\) and \\(Y\\) satisfy \\(P(X=1)=0.3,\\ P(X=2)=0.7\\) and \\(P(Y=0)=0.6,\\ P(Y=1)=0.4\\). Find \\(P(X+Y=2)\\) and \\(\\operatorname{Var}(X+Y)\\).",
    steps: [
      "By independence, \\(P(X+Y=2)\\) collects compatible cells: \\((X=1,Y=1)\\) and \\((X=2,Y=0)\\).",
      "\\(P(X+Y=2) = P(X=1)P(Y=1) + P(X=2)P(Y=0) = (0.3)(0.4) + (0.7)(0.6) = 0.12 + 0.42 = 0.54\\).",
      "\\(E(X)=1(0.3)+2(0.7)=1.7\\); \\(E(X^2)=1(0.3)+4(0.7)=3.1\\); \\(\\operatorname{Var}(X)=3.1-1.7^2=3.1-2.89=0.21\\).",
      "\\(Y\\) is Bernoulli with \\(p=0.4\\): \\(\\operatorname{Var}(Y)=0.4\\times0.6=0.24\\).",
      "Independence gives \\(\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)=0.21+0.24=0.45\\).",
    ],
    answer: "\\(P(X+Y=2)=0.54\\); \\(\\operatorname{Var}(X+Y)=0.45\\).",
  },
];
