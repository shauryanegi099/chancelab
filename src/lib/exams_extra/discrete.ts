import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "A fair die is rolled twice. Let \\(X\\) be the <b>maximum</b> of the two scores. Find the full distribution of \\(X\\) and hence \\(E(X)\\).",
    steps: [
      "There are \\(6^2 = 36\\) equally likely ordered outcomes.",
      "\\(P(X\\le k) = \\left(\\dfrac{k}{6}\\right)^2\\), so \\(P(X=k) = P(X\\le k) - P(X\\le k-1) = \\dfrac{k^2-(k-1)^2}{36} = \\dfrac{2k-1}{36}\\).",
      "Thus the PMF is \\(P(X=k) = \\dfrac{2k-1}{36}\\) for \\(k=1,2,\\dots,6\\), giving probabilities \\(\\tfrac{1}{36},\\tfrac{3}{36},\\tfrac{5}{36},\\tfrac{7}{36},\\tfrac{9}{36},\\tfrac{11}{36}\\).",
      "\\(E(X) = \\displaystyle\\sum_{k=1}^{6} k\\cdot\\dfrac{2k-1}{36} = \\dfrac{1}{36}\\sum_{k=1}^{6}(2k^2-k)\\).",
      "\\(\\sum k^2 = 91\\) and \\(\\sum k = 21\\), so \\(E(X) = \\dfrac{2(91)-21}{36} = \\dfrac{161}{36}\\).",
    ],
    answer: "\\(P(X=k)=\\dfrac{2k-1}{36}\\); \\(E(X)=\\dfrac{161}{36}\\approx 4.47\\).",
  },
  {
    board: "JEE Advanced",
    q: "Two fair dice are rolled. Let \\(M\\) be the <b>minimum</b> of the two scores. Find \\(P(M\\ge 3)\\) and \\(E(M)\\).",
    steps: [
      "\\(P(M\\ge k) = P(\\text{both dice} \\ge k) = \\left(\\dfrac{7-k}{6}\\right)^2\\) since each die independently lands in \\(\\{k,\\dots,6\\}\\).",
      "Hence \\(P(M\\ge 3) = \\left(\\dfrac{7-3}{6}\\right)^2 = \\left(\\dfrac{4}{6}\\right)^2 = \\dfrac{16}{36} = \\dfrac{4}{9}\\).",
      "The PMF is \\(P(M=k) = P(M\\ge k) - P(M\\ge k+1) = \\dfrac{(7-k)^2-(6-k)^2}{36} = \\dfrac{13-2k}{36}\\).",
      "Use the tail formula \\(E(M) = \\displaystyle\\sum_{k=1}^{6} P(M\\ge k) = \\dfrac{1}{36}\\sum_{k=1}^{6}(7-k)^2 = \\dfrac{6^2+5^2+4^2+3^2+2^2+1^2}{36}\\).",
      "\\(= \\dfrac{36+25+16+9+4+1}{36} = \\dfrac{91}{36}\\).",
    ],
    answer: "\\(P(M\\ge3)=\\dfrac{4}{9}\\); \\(E(M)=\\dfrac{91}{36}\\approx 2.53\\).",
  },
  {
    board: "JEE Advanced",
    q: "Two fair dice are rolled and \\(D = |X_1 - X_2|\\) is the absolute difference of the scores. Find \\(P(D=0)\\) and \\(E(D)\\).",
    steps: [
      "Total outcomes: \\(36\\). \\(D=0\\) requires both dice equal: outcomes \\((1,1),\\dots,(6,6)\\), i.e. 6 of them.",
      "So \\(P(D=0) = \\dfrac{6}{36} = \\dfrac{1}{6}\\).",
      "For \\(d\\ge1\\), the number of ordered pairs with \\(|X_1-X_2|=d\\) is \\(2(6-d)\\). This gives counts \\(10,8,6,4,2\\) for \\(d=1,2,3,4,5\\).",
      "\\(E(D) = \\dfrac{1}{36}\\displaystyle\\sum_{d=1}^{5} d\\cdot 2(6-d) = \\dfrac{2}{36}\\big(1\\cdot5+2\\cdot4+3\\cdot3+4\\cdot2+5\\cdot1\\big)\\).",
      "\\(= \\dfrac{2}{36}(5+8+9+8+5) = \\dfrac{2(35)}{36} = \\dfrac{70}{36} = \\dfrac{35}{18}\\).",
    ],
    answer: "\\(P(D=0)=\\dfrac{1}{6}\\); \\(E(D)=\\dfrac{35}{18}\\approx 1.94\\).",
  },
  {
    board: "JEE Advanced",
    q: "Three fair dice are rolled. Find the probability that the three scores are <b>strictly increasing</b> (i.e. \\(X_1<X_2<X_3\\)).",
    steps: [
      "Total ordered outcomes: \\(6^3 = 216\\).",
      "A strictly increasing triple corresponds to choosing 3 <b>distinct</b> values from \\(\\{1,\\dots,6\\}\\); each such choice can be arranged in increasing order in exactly one way.",
      "Number of favourable ordered outcomes \\(= \\binom{6}{3} = 20\\).",
      "\\(P = \\dfrac{20}{216} = \\dfrac{5}{54}\\).",
    ],
    answer: "\\(\\dfrac{5}{54}\\approx 0.093\\).",
  },
  {
    board: "JEE Advanced",
    q: "In a game a fair die is rolled once. The player <b>wins an amount equal to the face value (in rupees) if the number is even</b>, and <b>loses Rs. 3 if the number is odd</b>. Find the expected gain per game.",
    steps: [
      "Each face has probability \\(\\tfrac16\\). The gains are: faces 2,4,6 give \\(+2,+4,+6\\); faces 1,3,5 each give \\(-3\\).",
      "\\(E(\\text{gain}) = \\dfrac{1}{6}\\big(2+4+6\\big) + \\dfrac{1}{6}\\big((-3)+(-3)+(-3)\\big)\\).",
      "\\(= \\dfrac{12}{6} + \\dfrac{-9}{6} = \\dfrac{12-9}{6} = \\dfrac{3}{6}\\).",
      "So the game favours the player by half a rupee on average.",
    ],
    answer: "Expected gain \\(=\\dfrac{1}{2}=\\) Rs. \\(0.50\\) per game.",
  },
  {
    board: "JEE Advanced",
    q: "Two fair dice are rolled. Let \\(S = X_1 + X_2\\) be the sum. Find \\(P(S=8)\\) and the most probable value of \\(S\\) (the mode).",
    steps: [
      "Total outcomes: \\(36\\). For the sum, the number of ways to obtain \\(S=s\\) is \\(6-|s-7|\\) for \\(s=2,\\dots,12\\).",
      "For \\(s=8\\): ways \\(= 6-|8-7| = 5\\), namely \\((2,6),(3,5),(4,4),(5,3),(6,2)\\).",
      "Hence \\(P(S=8) = \\dfrac{5}{36}\\).",
      "The count \\(6-|s-7|\\) is largest when \\(|s-7|=0\\), i.e. \\(s=7\\), with 6 outcomes and probability \\(\\dfrac{6}{36}=\\dfrac16\\).",
      "Therefore the mode of \\(S\\) is \\(7\\).",
    ],
    answer: "\\(P(S=8)=\\dfrac{5}{36}\\); the most probable sum is \\(7\\) (probability \\(\\tfrac16\\)).",
  },
  {
    board: "JEE Advanced",
    q: "A discrete uniform random variable \\(X\\) takes the values \\(\\{1,2,\\dots,n\\}\\) each with probability \\(\\tfrac1n\\). Given that \\(\\operatorname{Var}(X)=\\dfrac{35}{12}\\), find \\(n\\) and \\(E(X)\\).",
    steps: [
      "For the discrete uniform distribution on \\(\\{1,\\dots,n\\}\\), \\(\\operatorname{Var}(X) = \\dfrac{n^2-1}{12}\\).",
      "Set \\(\\dfrac{n^2-1}{12} = \\dfrac{35}{12} \\Rightarrow n^2-1 = 35 \\Rightarrow n^2 = 36\\).",
      "Since \\(n>0\\), \\(n = 6\\) (this is exactly a single fair die).",
      "Then \\(E(X) = \\dfrac{n+1}{2} = \\dfrac{7}{2}\\).",
    ],
    answer: "\\(n=6\\); \\(E(X)=\\dfrac{7}{2}=3.5\\).",
  },
  {
    board: "JEE Advanced",
    q: "A fair coin is tossed 4 times. Let \\(X\\) be the number of heads. Without using the binomial formula directly, find \\(P(X=2)\\) by counting, and find the value(s) of \\(X\\) with the largest probability.",
    steps: [
      "Each sequence of 4 tosses is equally likely with probability \\(\\dfrac{1}{2^4} = \\dfrac{1}{16}\\); there are \\(16\\) sequences.",
      "The number of sequences with exactly 2 heads is the number of ways to choose 2 of the 4 positions: \\(\\binom{4}{2} = 6\\).",
      "Hence \\(P(X=2) = \\dfrac{6}{16} = \\dfrac{3}{8}\\).",
      "The counts for \\(X=0,1,2,3,4\\) are \\(\\binom{4}{0},\\dots,\\binom{4}{4} = 1,4,6,4,1\\); the largest is \\(6\\) at \\(X=2\\).",
      "So the most probable number of heads is \\(2\\), with probability \\(\\dfrac{3}{8}\\).",
    ],
    answer: "\\(P(X=2)=\\dfrac{3}{8}\\); the most probable value is \\(X=2\\).",
  },
];
