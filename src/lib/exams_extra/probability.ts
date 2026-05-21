import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "Two fair dice are thrown. Find the probability that the <b>sum is 8 or one of the dice shows a 5</b> (or both).",
    steps: [
      "Total equally-likely outcomes: \\(6\\times6 = 36\\).",
      "Let \\(A=\\{\\text{sum}=8\\}=\\{(2,6),(3,5),(4,4),(5,3),(6,2)\\}\\), so \\(|A|=5\\) and \\(P(A)=\\dfrac{5}{36}\\).",
      "Let \\(B=\\{\\text{a die shows }5\\}\\). The outcomes with at least one 5 are \\((5,1),(5,2),(5,3),(5,4),(5,5),(5,6)\\) and \\((1,5),(2,5),(3,5),(4,5),(6,5)\\): \\(|B|=11\\), so \\(P(B)=\\dfrac{11}{36}\\).",
      "Overlap \\(A\\cap B\\): outcomes giving sum 8 that also contain a 5 are \\((3,5)\\) and \\((5,3)\\), so \\(|A\\cap B|=2\\), \\(P(A\\cap B)=\\dfrac{2}{36}\\).",
      "Addition rule: \\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{5+11-2}{36}=\\dfrac{14}{36}\\).",
    ],
    answer: "\\(\\dfrac{14}{36}=\\dfrac{7}{18}\\approx 0.389\\).",
  },
  {
    board: "JEE Advanced",
    q: "From a well-shuffled standard pack of 52 cards, <b>5 cards</b> are drawn at random. Find the probability that the hand contains <b>exactly 3 kings and exactly 2 queens</b>.",
    steps: [
      "Total 5-card hands: \\(\\binom{52}{5}=2{,}598{,}960\\).",
      "Choose 3 of the 4 kings: \\(\\binom{4}{3}=4\\).",
      "Choose 2 of the 4 queens: \\(\\binom{4}{2}=6\\).",
      "Favourable hands: \\(4\\times6=24\\).",
      "\\(P=\\dfrac{24}{2{,}598{,}960}=\\dfrac{1}{108{,}290}\\).",
    ],
    answer: "\\(\\dfrac{24}{\\binom{52}{5}}=\\dfrac{1}{108{,}290}\\approx 9.23\\times10^{-6}\\).",
  },
  {
    board: "JEE Advanced",
    q: "An urn contains <b>6 white and 4 black balls</b>. Four balls are drawn at random <b>without replacement</b>. Find the probability that <b>exactly two are white</b>.",
    steps: [
      "Total ways to draw 4 of the 10 balls: \\(\\binom{10}{4}=210\\).",
      "Choose 2 white from 6: \\(\\binom{6}{2}=15\\).",
      "Choose 2 black from 4: \\(\\binom{4}{2}=6\\).",
      "Favourable: \\(15\\times6=90\\).",
      "\\(P=\\dfrac{90}{210}=\\dfrac{3}{7}\\).",
    ],
    answer: "\\(\\dfrac{90}{210}=\\dfrac{3}{7}\\approx 0.429\\).",
  },
  {
    board: "JEE Advanced",
    q: "A bag contains tickets numbered <b>1 to 100</b>. One ticket is drawn at random. Find the probability that its number is <b>divisible by 2 or by 3 or by 5</b>.",
    steps: [
      "Let \\(A,B,C\\) be 'divisible by 2, 3, 5'. Counts up to 100: \\(|A|=50,\\ |B|=33,\\ |C|=20\\).",
      "Pairwise (divisible by lcm): \\(|A\\cap B|=\\lfloor100/6\\rfloor=16,\\ |A\\cap C|=\\lfloor100/10\\rfloor=10,\\ |B\\cap C|=\\lfloor100/15\\rfloor=6\\).",
      "Triple: \\(|A\\cap B\\cap C|=\\lfloor100/30\\rfloor=3\\).",
      "Inclusion–exclusion: \\(|A\\cup B\\cup C|=50+33+20-16-10-6+3=74\\).",
      "\\(P=\\dfrac{74}{100}\\).",
    ],
    answer: "\\(\\dfrac{74}{100}=0.74\\).",
  },
  {
    board: "JEE Advanced",
    q: "If <b>10 people</b> (including A and B) are seated at random around a <b>round table</b>, find the probability that <b>A and B sit next to each other</b>.",
    steps: [
      "Fix the rotational symmetry: total distinct circular arrangements of 10 people \\(=(10-1)!=9!\\).",
      "Treat A and B as a single block: arrange \\(9\\) units around the circle in \\((9-1)!=8!\\) ways.",
      "The block A,B can be ordered internally in \\(2!\\) ways.",
      "Favourable \\(=8!\\times2!\\).",
      "\\(P=\\dfrac{8!\\cdot2!}{9!}=\\dfrac{2}{9}\\).",
    ],
    answer: "\\(\\dfrac{2}{9}\\approx 0.222\\).",
  },
  {
    board: "JEE Advanced",
    q: "Three numbers are chosen at random <b>without replacement</b> from the set \\(\\{1,2,3,\\dots,20\\}\\). Find the probability that they form an <b>arithmetic progression</b> (in some order).",
    steps: [
      "Total ways to choose 3 of 20 (order irrelevant): \\(\\binom{20}{3}=1140\\).",
      "An AP \\(\\{a,a+d,a+2d\\}\\) is fixed by its first term \\(a\\) and common difference \\(d\\ge1\\); we count unordered triples, so take \\(d\\ge1\\).",
      "Need \\(a\\ge1\\) and \\(a+2d\\le20\\), i.e. \\(a\\le20-2d\\). For each \\(d\\) the number of valid \\(a\\) is \\(20-2d\\) (when positive).",
      "Sum over \\(d=1,\\dots,9\\): \\((18)+(16)+(14)+\\cdots+(2)=2(9+8+\\cdots+1)=2\\cdot45=90\\).",
      "\\(P=\\dfrac{90}{1140}=\\dfrac{3}{38}\\).",
    ],
    answer: "\\(\\dfrac{90}{1140}=\\dfrac{3}{38}\\approx 0.0789\\).",
  },
  {
    board: "JEE Advanced",
    q: "Two points \\(x\\) and \\(y\\) are chosen independently and uniformly at random on the interval \\([0,1]\\). Find the probability that \\(|x-y|<\\dfrac{1}{2}\\).",
    steps: [
      "The sample space is the unit square \\([0,1]\\times[0,1]\\) with area 1; probability equals area of the favourable region.",
      "We need the area where \\(|x-y|\\ge\\tfrac12\\) (the complement) and subtract from 1.",
      "\\(|x-y|\\ge\\tfrac12\\) consists of two corner triangles: \\(y\\ge x+\\tfrac12\\) and \\(y\\le x-\\tfrac12\\).",
      "Each triangle has legs of length \\(\\tfrac12\\), so area \\(=\\tfrac12\\cdot\\tfrac12\\cdot\\tfrac12=\\tfrac18\\); together \\(2\\cdot\\tfrac18=\\tfrac14\\).",
      "\\(P(|x-y|<\\tfrac12)=1-\\tfrac14=\\tfrac34\\).",
    ],
    answer: "\\(\\dfrac{3}{4}=0.75\\).",
  },
  {
    board: "JEE Advanced",
    q: "Find the probability that a randomly chosen leap year (366 days) contains <b>53 Sundays</b>.",
    steps: [
      "A leap year has \\(366=52\\times7+2\\) days, i.e. 52 complete weeks plus 2 extra days.",
      "These 52 weeks already supply 52 Sundays; a 53rd Sunday occurs only if one of the 2 extra days is a Sunday.",
      "The 2 extra consecutive days are equally likely to be \\((\\text{Sun,Mon}),(\\text{Mon,Tue}),\\dots,(\\text{Sat,Sun})\\): 7 equally-likely pairs.",
      "Pairs that include a Sunday: \\((\\text{Sun,Mon})\\) and \\((\\text{Sat,Sun})\\) — exactly 2 of the 7.",
      "\\(P=\\dfrac{2}{7}\\).",
    ],
    answer: "\\(\\dfrac{2}{7}\\approx 0.286\\).",
  },
];
