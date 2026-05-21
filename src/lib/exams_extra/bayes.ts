import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "Bag I contains <b>3 red and 4 black</b> balls; Bag II contains <b>5 red and 6 black</b> balls. A bag is chosen at random and a ball drawn from it is found to be <b>red</b>. Find the probability that it came from <b>Bag II</b>.",
    steps: [
      "Priors: \\(P(I)=P(II)=\\tfrac12\\). Likelihoods: \\(P(R\\mid I)=\\dfrac{3}{7}\\), \\(P(R\\mid II)=\\dfrac{5}{11}\\).",
      "Total probability of red: \\(P(R)=\\tfrac12\\cdot\\dfrac{3}{7}+\\tfrac12\\cdot\\dfrac{5}{11}=\\dfrac{3}{14}+\\dfrac{5}{22}\\).",
      "Common denominator 154: \\(\\dfrac{3}{14}=\\dfrac{33}{154},\\ \\dfrac{5}{22}=\\dfrac{35}{154}\\Rightarrow P(R)=\\dfrac{68}{154}=\\dfrac{34}{77}\\).",
      "Bayes: \\(P(II\\mid R)=\\dfrac{\\tfrac12\\cdot\\tfrac{5}{11}}{P(R)}=\\dfrac{35/154}{68/154}=\\dfrac{35}{68}\\).",
    ],
    answer: "\\(\\dfrac{35}{68}\\approx 0.515\\).",
  },
  {
    board: "JEE Advanced",
    q: "In a factory machines \\(A,B,C\\) produce <b>25%, 35%, 40%</b> of the bolts. Of their output, <b>5%, 4%, 2%</b> respectively are defective. A bolt drawn at random is found defective. Find the probability it was made by machine <b>A</b>.",
    steps: [
      "Priors: \\(P(A)=0.25,\\ P(B)=0.35,\\ P(C)=0.40\\). Likelihoods: \\(P(D\\mid A)=0.05,\\ P(D\\mid B)=0.04,\\ P(D\\mid C)=0.02\\).",
      "Total probability of defective: \\(P(D)=0.25(0.05)+0.35(0.04)+0.40(0.02)\\).",
      "\\(=0.0125+0.0140+0.0080=0.0345\\).",
      "Bayes: \\(P(A\\mid D)=\\dfrac{0.0125}{0.0345}=\\dfrac{125}{345}=\\dfrac{25}{69}\\).",
    ],
    answer: "\\(\\dfrac{25}{69}\\approx 0.362\\).",
  },
  {
    board: "JEE Advanced",
    q: "A disease affects <b>1 in 1000</b> people. A test is <b>99% accurate</b>: it gives a positive result for 99% of diseased people and a (false) positive for 2% of healthy people. A person tests <b>positive</b>. Find the probability they actually have the disease.",
    steps: [
      "Prior: \\(P(D)=0.001\\), \\(P(D^{c})=0.999\\). Likelihoods: \\(P(+\\mid D)=0.99\\), \\(P(+\\mid D^{c})=0.02\\).",
      "Total probability of a positive: \\(P(+)=0.001(0.99)+0.999(0.02)\\).",
      "\\(=0.00099+0.01998=0.02097\\).",
      "Bayes: \\(P(D\\mid +)=\\dfrac{0.00099}{0.02097}\\).",
      "\\(\\approx 0.0472\\) — strikingly low because the disease is rare and false positives dominate.",
    ],
    answer: "\\(\\dfrac{0.00099}{0.02097}\\approx 0.0472\\) (about 4.7%).",
  },
  {
    board: "JEE Advanced",
    q: "An urn contains <b>5 white and 7 black</b> balls. A ball is drawn, its colour noted, and it is returned together with <b>3 additional balls of the same colour</b>. A second ball is then drawn and found to be <b>black</b>. Find the probability that the <b>first ball drawn was white</b>.",
    steps: [
      "Prior on first draw: \\(P(W_1)=\\dfrac{5}{12}\\), \\(P(B_1)=\\dfrac{7}{12}\\).",
      "If first is white, urn becomes 8 white, 7 black (15 total): \\(P(B_2\\mid W_1)=\\dfrac{7}{15}\\).",
      "If first is black, urn becomes 5 white, 10 black (15 total): \\(P(B_2\\mid B_1)=\\dfrac{10}{15}\\).",
      "Total: \\(P(B_2)=\\dfrac{5}{12}\\cdot\\dfrac{7}{15}+\\dfrac{7}{12}\\cdot\\dfrac{10}{15}=\\dfrac{35}{180}+\\dfrac{70}{180}=\\dfrac{105}{180}\\).",
      "Bayes: \\(P(W_1\\mid B_2)=\\dfrac{35/180}{105/180}=\\dfrac{35}{105}=\\dfrac{1}{3}\\).",
    ],
    answer: "\\(\\dfrac{1}{3}\\).",
  },
  {
    board: "JEE Advanced",
    q: "Box I has <b>2 white and 3 red</b> balls; Box II has <b>4 white and 1 red</b>. A ball is transferred at random from Box I to Box II; then a ball drawn from Box II is found to be <b>white</b>. Find the probability that the <b>transferred ball was white</b>.",
    steps: [
      "Transfer: \\(P(\\text{W transferred})=\\dfrac{2}{5}\\), \\(P(\\text{R transferred})=\\dfrac{3}{5}\\).",
      "After transferring white, Box II has 5 white, 1 red (6 total): \\(P(W\\mid \\text{W transferred})=\\dfrac{5}{6}\\).",
      "After transferring red, Box II has 4 white, 2 red (6 total): \\(P(W\\mid \\text{R transferred})=\\dfrac{4}{6}\\).",
      "Total: \\(P(W)=\\dfrac{2}{5}\\cdot\\dfrac{5}{6}+\\dfrac{3}{5}\\cdot\\dfrac{4}{6}=\\dfrac{10}{30}+\\dfrac{12}{30}=\\dfrac{22}{30}\\).",
      "Bayes: \\(P(\\text{W transferred}\\mid W)=\\dfrac{10/30}{22/30}=\\dfrac{10}{22}=\\dfrac{5}{11}\\).",
    ],
    answer: "\\(\\dfrac{5}{11}\\approx 0.455\\).",
  },
  {
    board: "JEE Advanced",
    q: "A multiple-choice question has <b>4 options</b>, exactly one correct. A student <b>knows</b> the answer with probability \\(\\dfrac{3}{5}\\); otherwise he <b>guesses</b> uniformly at random. Given that he answered <b>correctly</b>, find the probability that he actually <b>knew</b> the answer.",
    steps: [
      "Priors: \\(P(K)=\\dfrac35\\) (knows), \\(P(G)=\\dfrac25\\) (guesses).",
      "Likelihoods: \\(P(C\\mid K)=1\\) (a knower is always right); \\(P(C\\mid G)=\\dfrac14\\) (one of four options).",
      "Total probability correct: \\(P(C)=\\dfrac35\\cdot1+\\dfrac25\\cdot\\dfrac14=\\dfrac35+\\dfrac{1}{10}=\\dfrac{6}{10}+\\dfrac{1}{10}=\\dfrac{7}{10}\\).",
      "Bayes: \\(P(K\\mid C)=\\dfrac{P(K)P(C\\mid K)}{P(C)}=\\dfrac{3/5}{7/10}=\\dfrac{6/10}{7/10}=\\dfrac{6}{7}\\).",
    ],
    answer: "\\(\\dfrac{6}{7}\\approx 0.857\\).",
  },
  {
    board: "JEE Advanced",
    q: "A coin is selected at random from <b>two coins</b>: a fair coin and a <b>two-headed coin</b>. The chosen coin is tossed and shows <b>heads</b>. (a) Find the probability it is the two-headed coin. (b) If it is tossed a second time and again shows heads, update this probability.",
    steps: [
      "Priors: \\(P(\\text{fair})=\\tfrac12\\), \\(P(\\text{2H})=\\tfrac12\\). Likelihoods per toss: \\(P(H\\mid\\text{fair})=\\tfrac12\\), \\(P(H\\mid\\text{2H})=1\\).",
      "(a) One head: \\(P(H)=\\tfrac12\\cdot\\tfrac12+\\tfrac12\\cdot1=\\tfrac14+\\tfrac12=\\tfrac34\\). Then \\(P(\\text{2H}\\mid H)=\\dfrac{1/2}{3/4}=\\dfrac{2}{3}\\).",
      "(b) Two heads: \\(P(HH\\mid\\text{fair})=\\tfrac14\\), \\(P(HH\\mid\\text{2H})=1\\).",
      "Total: \\(P(HH)=\\tfrac12\\cdot\\tfrac14+\\tfrac12\\cdot1=\\tfrac18+\\tfrac12=\\tfrac58\\).",
      "Bayes: \\(P(\\text{2H}\\mid HH)=\\dfrac{1/2}{5/8}=\\dfrac{4}{5}\\) — the posterior rises from \\(\\tfrac23\\) to \\(\\tfrac45\\).",
    ],
    answer: "(a) \\(\\dfrac{2}{3}\\). (b) \\(\\dfrac{4}{5}\\).",
  },
  {
    board: "JEE Advanced",
    q: "Three identical boxes contain coins: Box 1 has <b>two gold</b> coins, Box 2 has <b>two silver</b> coins, Box 3 has <b>one gold and one silver</b>. A box is chosen at random and one coin drawn from it is <b>gold</b>. Find the probability that the <b>other coin in that box is also gold</b> (Bertrand's box paradox).",
    steps: [
      "Priors: each box has probability \\(\\tfrac13\\). Likelihood of drawing gold: \\(P(G\\mid B_1)=1,\\ P(G\\mid B_2)=0,\\ P(G\\mid B_3)=\\tfrac12\\).",
      "Total probability of gold: \\(P(G)=\\tfrac13(1)+\\tfrac13(0)+\\tfrac13(\\tfrac12)=\\tfrac13+\\tfrac16=\\tfrac12\\).",
      "The other coin is gold only if the box is \\(B_1\\) (two gold).",
      "Bayes: \\(P(B_1\\mid G)=\\dfrac{\\tfrac13\\cdot1}{1/2}=\\dfrac{1/3}{1/2}=\\dfrac{2}{3}\\).",
      "So the answer is \\(\\tfrac23\\), not the intuitive \\(\\tfrac12\\) — this is the resolution of Bertrand's paradox.",
    ],
    answer: "\\(\\dfrac{2}{3}\\).",
  },
];
