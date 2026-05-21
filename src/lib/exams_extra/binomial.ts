import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "A biased coin with \\(P(\\text{head})=\\dfrac13\\) is tossed 6 times. Let \\(X\\) be the number of heads. Find \\(P(X=2)\\).",
    steps: [
      "\\(X\\sim\\text{Bin}(6,\\tfrac13)\\), so \\(P(X=k) = \\binom{6}{k}\\left(\\tfrac13\\right)^k\\left(\\tfrac23\\right)^{6-k}\\).",
      "For \\(k=2\\): \\(P(X=2) = \\binom{6}{2}\\left(\\tfrac13\\right)^2\\left(\\tfrac23\\right)^4\\).",
      "\\(\\binom{6}{2}=15\\), \\(\\left(\\tfrac13\\right)^2=\\tfrac19\\), \\(\\left(\\tfrac23\\right)^4=\\tfrac{16}{81}\\).",
      "\\(P(X=2) = 15\\cdot\\dfrac{1}{9}\\cdot\\dfrac{16}{81} = \\dfrac{15\\cdot16}{729} = \\dfrac{240}{729} = \\dfrac{80}{243}\\).",
    ],
    answer: "\\(\\dfrac{80}{243}\\approx 0.329\\).",
  },
  {
    board: "JEE Advanced",
    q: "If \\(X\\sim\\text{Bin}(n,p)\\) has mean \\(8\\) and variance \\(\\dfrac{16}{3}\\), find \\(n\\), \\(p\\) and \\(P(X=0)\\).",
    steps: [
      "Mean: \\(np = 8\\). Variance: \\(np(1-p) = \\dfrac{16}{3}\\).",
      "Divide variance by mean: \\(1-p = \\dfrac{16/3}{8} = \\dfrac{2}{3}\\), so \\(p = \\dfrac13\\).",
      "Then \\(n = \\dfrac{8}{p} = \\dfrac{8}{1/3} = 24\\).",
      "\\(P(X=0) = (1-p)^n = \\left(\\dfrac23\\right)^{24}\\).",
    ],
    answer: "\\(n=24,\\ p=\\dfrac13,\\ P(X=0)=\\left(\\dfrac23\\right)^{24}\\approx 1.27\\times10^{-4}\\).",
  },
  {
    board: "JEE Advanced",
    q: "For \\(X\\sim\\text{Bin}(n,p)\\), derive the ratio \\(\\dfrac{P(X=k+1)}{P(X=k)}\\) and use it to find the <b>mode</b> of \\(\\text{Bin}(10,\\,0.4)\\).",
    steps: [
      "\\(\\dfrac{P(X=k+1)}{P(X=k)} = \\dfrac{\\binom{n}{k+1}p^{k+1}(1-p)^{n-k-1}}{\\binom{n}{k}p^{k}(1-p)^{n-k}} = \\dfrac{n-k}{k+1}\\cdot\\dfrac{p}{1-p}\\).",
      "The probabilities increase while this ratio exceeds 1, i.e. while \\((n-k)p > (k+1)(1-p)\\), which simplifies to \\(k < (n+1)p - 1\\).",
      "Hence the mode is \\(\\lfloor (n+1)p \\rfloor\\) (and \\((n+1)p\\) and \\((n+1)p-1\\) together when \\((n+1)p\\) is an integer).",
      "For \\(n=10,\\ p=0.4\\): \\((n+1)p = 11\\times0.4 = 4.4\\), which is not an integer.",
      "Mode \\(= \\lfloor 4.4 \\rfloor = 4\\).",
    ],
    answer: "\\(\\dfrac{P(X=k+1)}{P(X=k)}=\\dfrac{n-k}{k+1}\\cdot\\dfrac{p}{1-p}\\); mode of \\(\\text{Bin}(10,0.4)\\) is \\(4\\).",
  },
  {
    board: "JEE Advanced",
    q: "A multiple-choice test has 8 questions, each with 4 options and exactly one correct answer. A student guesses every answer at random. Find the probability of getting <b>at least 2</b> correct.",
    steps: [
      "Each question is correct with probability \\(p = \\tfrac14\\), so the number correct \\(X\\sim\\text{Bin}(8,\\tfrac14)\\).",
      "\\(P(X\\ge2) = 1 - P(X=0) - P(X=1)\\).",
      "\\(P(X=0) = \\left(\\tfrac34\\right)^8 = \\dfrac{6561}{65536}\\).",
      "\\(P(X=1) = \\binom{8}{1}\\left(\\tfrac14\\right)\\left(\\tfrac34\\right)^7 = 8\\cdot\\dfrac{1}{4}\\cdot\\dfrac{2187}{16384} = \\dfrac{2\\cdot2187}{16384} = \\dfrac{4374}{16384} = \\dfrac{17496}{65536}\\).",
      "\\(P(X\\ge2) = 1 - \\dfrac{6561+17496}{65536} = 1 - \\dfrac{24057}{65536} = \\dfrac{41479}{65536}\\).",
    ],
    answer: "\\(\\dfrac{41479}{65536}\\approx 0.633\\).",
  },
  {
    board: "JEE Advanced",
    q: "An item is defective with probability \\(0.1\\). In a batch of 8 items, find the probability of (a) exactly one defective, (b) at least one defective.",
    steps: [
      "Let \\(X\\sim\\text{Bin}(8,\\,0.1)\\) be the number of defectives.",
      "(a) \\(P(X=1) = \\binom{8}{1}(0.1)^1(0.9)^7 = 8\\,(0.1)(0.9)^7\\).",
      "\\((0.9)^7 = 0.4782969\\), so \\(P(X=1) = 0.8\\times0.4782969 = 0.38264\\).",
      "(b) \\(P(X\\ge1) = 1 - P(X=0) = 1 - (0.9)^8\\).",
      "\\((0.9)^8 = 0.43046721\\), so \\(P(X\\ge1) = 1 - 0.43046721 = 0.56953\\).",
    ],
    answer: "(a) \\(\\approx 0.383\\)  (b) \\(\\approx 0.570\\).",
  },
  {
    board: "JEE Advanced",
    q: "Two players \\(A\\) and \\(B\\) each toss <b>3 fair coins</b>. Find the probability that they obtain the <b>same number of heads</b>.",
    steps: [
      "For one player, the number of heads \\(\\sim\\text{Bin}(3,\\tfrac12)\\) with PMF \\(\\binom{3}{k}/8\\): values \\(\\tfrac18,\\tfrac38,\\tfrac38,\\tfrac18\\) for \\(k=0,1,2,3\\).",
      "The two players are independent, so \\(P(\\text{same}) = \\displaystyle\\sum_{k=0}^{3} \\big[P(X=k)\\big]^2\\).",
      "\\(= \\left(\\tfrac18\\right)^2 + \\left(\\tfrac38\\right)^2 + \\left(\\tfrac38\\right)^2 + \\left(\\tfrac18\\right)^2 = \\dfrac{1+9+9+1}{64}\\).",
      "\\(= \\dfrac{20}{64} = \\dfrac{5}{16}\\).",
    ],
    answer: "\\(\\dfrac{5}{16}=0.3125\\).",
  },
  {
    board: "JEE Advanced",
    q: "A fair die is rolled 5 times. Let \\(X\\) be the number of times a <b>six</b> appears. Find the <b>most probable number of sixes</b> and the corresponding probability.",
    steps: [
      "\\(X\\sim\\text{Bin}(5,\\tfrac16)\\). The most probable value is \\(\\lfloor (n+1)p\\rfloor\\) (unless \\((n+1)p\\) is an integer).",
      "\\((n+1)p = 6\\cdot\\tfrac16 = 1\\), an integer, so both \\(k=0\\) and \\(k=1\\) are modes — compare them directly.",
      "\\(P(X=0) = \\left(\\tfrac56\\right)^5 = \\dfrac{3125}{7776}\\).",
      "\\(P(X=1) = \\binom{5}{1}\\left(\\tfrac16\\right)\\left(\\tfrac56\\right)^4 = 5\\cdot\\dfrac16\\cdot\\dfrac{625}{1296} = \\dfrac{3125}{7776}\\).",
      "They are equal, so the most probable numbers of sixes are \\(0\\) and \\(1\\), each with probability \\(\\dfrac{3125}{7776}\\).",
    ],
    answer: "Modes \\(X=0\\) and \\(X=1\\), each with probability \\(\\dfrac{3125}{7776}\\approx 0.402\\).",
  },
  {
    board: "JEE Advanced",
    q: "A machine produces bolts independently, each defective with probability \\(p=0.2\\). Bolts are inspected in groups of 4. Let \\(Y\\) be the number of <b>groups out of 5</b> that are <b>defect-free</b>. Find \\(P(Y=5)\\) and \\(E(Y)\\).",
    steps: [
      "A single group of 4 is defect-free with probability \\(q = (1-p)^4 = (0.8)^4 = 0.4096\\).",
      "Across 5 independent groups, \\(Y\\sim\\text{Bin}(5,\\,q)\\) with \\(q = 0.4096\\).",
      "\\(P(Y=5) = q^5 = (0.4096)^5\\).",
      "\\((0.4096)^5 \\approx 0.01153\\).",
      "\\(E(Y) = 5q = 5\\times0.4096 = 2.048\\).",
    ],
    answer: "\\(P(Y=5)=(0.4096)^5\\approx 0.0115\\); \\(E(Y)=2.048\\).",
  },
];
