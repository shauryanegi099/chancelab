import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "Two fair dice are thrown. Given that the <b>sum is even</b>, find the probability that <b>both dice show even numbers</b>.",
    steps: [
      "Let \\(B=\\{\\text{sum even}\\}\\). The sum is even iff both dice are even or both are odd.",
      "Each die is even with prob \\(\\tfrac12\\) and odd with prob \\(\\tfrac12\\), independently, so \\(P(\\text{both even})=\\tfrac14\\) and \\(P(\\text{both odd})=\\tfrac14\\).",
      "Thus \\(P(B)=\\tfrac14+\\tfrac14=\\tfrac12\\).",
      "Let \\(A=\\{\\text{both even}\\}\\). Then \\(A\\subset B\\), so \\(P(A\\cap B)=P(A)=\\tfrac14\\).",
      "\\(P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{1/4}{1/2}\\).",
    ],
    answer: "\\(\\dfrac{1}{2}\\).",
  },
  {
    board: "JEE Advanced",
    q: "An urn contains <b>4 red and 6 green</b> balls. Two balls are drawn one after another <b>without replacement</b>. Find the probability that <b>both are red</b>, and the probability that the <b>second is red</b>.",
    steps: [
      "By the multiplication rule, \\(P(\\text{both red})=P(R_1)\\,P(R_2\\mid R_1)\\).",
      "\\(P(R_1)=\\dfrac{4}{10}\\); after one red is removed, \\(P(R_2\\mid R_1)=\\dfrac{3}{9}\\).",
      "\\(P(\\text{both red})=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{12}{90}=\\dfrac{2}{15}\\).",
      "For the second ball, use total probability: \\(P(R_2)=P(R_1)P(R_2\\mid R_1)+P(G_1)P(R_2\\mid G_1)\\).",
      "\\(P(R_2)=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}+\\dfrac{6}{10}\\cdot\\dfrac{4}{9}=\\dfrac{12+24}{90}=\\dfrac{36}{90}=\\dfrac{2}{5}\\) (equal to \\(P(R_1)\\), as expected by symmetry).",
    ],
    answer: "\\(P(\\text{both red})=\\dfrac{2}{15}\\approx0.133\\); \\(P(\\text{2nd red})=\\dfrac{2}{5}=0.4\\).",
  },
  {
    board: "JEE Advanced",
    q: "Events \\(A\\) and \\(B\\) satisfy \\(P(A)=0.4,\\ P(B)=0.7\\) and \\(P(A\\cup B)=0.82\\). (a) Find \\(P(A\\cap B)\\). (b) Determine whether \\(A\\) and \\(B\\) are <b>independent</b>. (c) Find \\(P(A\\mid B)\\) and \\(P(B\\mid A)\\).",
    steps: [
      "(a) Addition rule: \\(P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=0.4+0.7-0.82=0.28\\).",
      "(b) Independence test: \\(P(A)\\,P(B)=0.4\\times0.7=0.28\\). Since this equals \\(P(A\\cap B)=0.28\\), the events <b>are</b> independent.",
      "(c) \\(P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0.28}{0.7}=0.4\\) — equal to \\(P(A)\\), confirming independence.",
      "\\(P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{0.28}{0.4}=0.7\\) — equal to \\(P(B)\\).",
    ],
    answer: "(a) \\(0.28\\). (b) Independent (since \\(P(A)P(B)=0.28=P(A\\cap B)\\)). (c) \\(P(A\\mid B)=0.4,\\ P(B\\mid A)=0.7\\).",
  },
  {
    board: "JEE Advanced",
    q: "A fair coin is tossed <b>three times</b>. Let \\(A=\\{\\text{first toss is a head}\\}\\) and \\(B=\\{\\text{exactly two heads in the three tosses}\\}\\). Find \\(P(A\\mid B)\\) and decide whether \\(A\\) and \\(B\\) are independent.",
    steps: [
      "Sample space has \\(2^3=8\\) equally-likely outcomes.",
      "\\(B=\\{HHT,HTH,THH\\}\\), so \\(P(B)=\\dfrac{3}{8}\\).",
      "\\(A\\cap B=\\) outcomes in \\(B\\) starting with H \\(=\\{HHT,HTH\\}\\), so \\(P(A\\cap B)=\\dfrac{2}{8}=\\dfrac14\\).",
      "\\(P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{1/4}{3/8}=\\dfrac{2}{3}\\).",
      "Independence check: \\(P(A)\\,P(B)=\\tfrac12\\cdot\\tfrac38=\\tfrac{3}{16}\\neq\\tfrac14=P(A\\cap B)\\), so \\(A\\) and \\(B\\) are <b>not</b> independent.",
    ],
    answer: "\\(P(A\\mid B)=\\dfrac{2}{3}\\); not independent (since \\(\\tfrac{3}{16}\\neq\\tfrac14\\)).",
  },
  {
    board: "JEE Advanced",
    q: "The probability that a student passes <b>Mathematics</b> is \\(\\dfrac{2}{3}\\) and that he passes <b>Physics</b> is \\(\\dfrac{4}{9}\\). Assuming the two events are <b>independent</b>, find the probability that he passes <b>at least one</b> subject.",
    steps: [
      "Let \\(M\\) and \\(P\\) be the events of passing Maths and Physics, with \\(P(M)=\\tfrac23,\\ P(P)=\\tfrac49\\).",
      "By independence, the probability of failing both is \\(P(M^{c})\\,P(P^{c})=(1-\\tfrac23)(1-\\tfrac49)=\\tfrac13\\cdot\\tfrac59\\).",
      "\\(P(\\text{fail both})=\\dfrac{5}{27}\\).",
      "Pass at least one \\(=1-P(\\text{fail both})=1-\\dfrac{5}{27}\\).",
      "\\(=\\dfrac{22}{27}\\).",
    ],
    answer: "\\(\\dfrac{22}{27}\\approx 0.815\\).",
  },
  {
    board: "JEE Advanced",
    q: "A family is known to have <b>two children</b> (each independently a boy or girl with probability \\(\\tfrac12\\)). Given that <b>at least one is a boy</b>, find the probability that <b>both are boys</b>.",
    steps: [
      "Equally-likely ordered outcomes: \\(\\{BB,BG,GB,GG\\}\\), each with probability \\(\\tfrac14\\).",
      "Condition \\(C=\\{\\text{at least one boy}\\}=\\{BB,BG,GB\\}\\), so \\(P(C)=\\dfrac34\\).",
      "Target \\(A=\\{BB\\}\\); since \\(A\\subset C\\), \\(P(A\\cap C)=P(A)=\\dfrac14\\).",
      "\\(P(A\\mid C)=\\dfrac{P(A\\cap C)}{P(C)}=\\dfrac{1/4}{3/4}\\).",
      "\\(=\\dfrac{1}{3}\\) (note this differs from the naive answer \\(\\tfrac12\\)).",
    ],
    answer: "\\(\\dfrac{1}{3}\\).",
  },
  {
    board: "JEE Advanced",
    q: "Cards numbered <b>1 to 25</b> are shuffled and one is drawn. Let \\(A=\\{\\text{number is even}\\}\\) and \\(B=\\{\\text{number is a multiple of 3}\\}\\). Are \\(A\\) and \\(B\\) independent? Justify with probabilities.",
    steps: [
      "Total outcomes: 25. Even numbers \\(2,4,\\dots,24\\) give \\(|A|=12\\), so \\(P(A)=\\dfrac{12}{25}\\).",
      "Multiples of 3: \\(3,6,\\dots,24\\) give \\(|B|=8\\), so \\(P(B)=\\dfrac{8}{25}\\).",
      "\\(A\\cap B=\\) multiples of 6 in range: \\(6,12,18,24\\), so \\(|A\\cap B|=4\\) and \\(P(A\\cap B)=\\dfrac{4}{25}\\).",
      "Compute \\(P(A)\\,P(B)=\\dfrac{12}{25}\\cdot\\dfrac{8}{25}=\\dfrac{96}{625}\\).",
      "Compare with \\(P(A\\cap B)=\\dfrac{4}{25}=\\dfrac{100}{625}\\). Since \\(\\dfrac{96}{625}\\neq\\dfrac{100}{625}\\), the events are <b>not</b> independent.",
    ],
    answer: "Not independent: \\(P(A)P(B)=\\tfrac{96}{625}\\neq\\tfrac{100}{625}=P(A\\cap B)\\).",
  },
  {
    board: "JEE Advanced",
    q: "A box contains <b>3 defective and 7 good</b> bulbs. Bulbs are drawn one by one <b>without replacement</b> until a good one is obtained. Find the probability that the <b>first good bulb appears on the third draw</b>.",
    steps: [
      "We need the first two drawn to be defective and the third to be good: event \\(D_1D_2G_3\\).",
      "\\(P(D_1)=\\dfrac{3}{10}\\).",
      "\\(P(D_2\\mid D_1)=\\dfrac{2}{9}\\) (one defective removed).",
      "\\(P(G_3\\mid D_1D_2)=\\dfrac{7}{8}\\) (two defectives removed, 7 good among the remaining 8).",
      "Multiply: \\(\\dfrac{3}{10}\\cdot\\dfrac{2}{9}\\cdot\\dfrac{7}{8}=\\dfrac{42}{720}=\\dfrac{7}{120}\\).",
    ],
    answer: "\\(\\dfrac{42}{720}=\\dfrac{7}{120}\\approx 0.0583\\).",
  },
];
