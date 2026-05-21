import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "For the data \\(6,9,12,11,7,3\\) find (a) the range, and (b) the population variance and standard deviation using the \\(\\sum x^2\\) formula.",
    steps: [
      "(a) Range \\(=\\max-\\min = 12-3 = 9\\).",
      "Totals: \\(\\sum x = 6+9+12+11+7+3 = 48\\), so mean \\(\\bar x=\\dfrac{48}{6}=8\\).",
      "\\(\\sum x^2 = 36+81+144+121+49+9 = 440\\).",
      "(b) Population variance: \\(\\sigma^2=\\dfrac{\\sum x^2}{n}-\\bar x^2=\\dfrac{440}{6}-8^2=\\dfrac{440}{6}-64\\).",
      "\\(\\sigma^2=73.\\overline{3}-64=9.\\overline{3}\\); standard deviation \\(\\sigma=\\sqrt{9.333\\ldots}\\approx 3.055\\).",
    ],
    answer: "Range \\(=9\\); \\(\\sigma^2=\\dfrac{28}{3}\\approx 9.33\\); \\(\\sigma\\approx 3.06\\).",
  },
  {
    board: "A-Level",
    q: "For the ordered data \\(4,7,9,11,13,15,18,21,25\\) (\\(n=9\\)) find the median, the quartiles \\(Q_1\\) and \\(Q_3\\), and the interquartile range, using the method of excluding the median when splitting the data.",
    steps: [
      "There are \\(n=9\\) values; the median is the 5th value: \\(Q_2=13\\).",
      "Lower half (values below the median): \\(4,7,9,11\\). Its median is \\(Q_1=\\dfrac{7+9}{2}=8\\).",
      "Upper half (values above the median): \\(15,18,21,25\\). Its median is \\(Q_3=\\dfrac{18+21}{2}=19.5\\).",
      "Interquartile range: \\(\\text{IQR}=Q_3-Q_1=19.5-8\\).",
    ],
    answer: "Median \\(=13\\), \\(Q_1=8\\), \\(Q_3=19.5\\), \\(\\text{IQR}=11.5\\).",
  },
  {
    board: "A-Level",
    q: "A distribution has \\(Q_1=15\\) and \\(Q_3=27\\). Using the \\(1.5\\times\\text{IQR}\\) rule, find the outlier fences and determine whether the observations \\(5\\) and \\(50\\) are outliers.",
    steps: [
      "Interquartile range: \\(\\text{IQR}=Q_3-Q_1=27-15=12\\).",
      "Lower fence: \\(Q_1-1.5\\times\\text{IQR}=15-1.5(12)=15-18=-3\\).",
      "Upper fence: \\(Q_3+1.5\\times\\text{IQR}=27+1.5(12)=27+18=45\\).",
      "Compare \\(5\\): since \\(-3\\le 5\\le 45\\), it lies inside the fences (not an outlier).",
      "Compare \\(50\\): since \\(50>45\\), it lies beyond the upper fence (an outlier).",
    ],
    answer: "Fences \\([-3,\\,45]\\); \\(5\\) is not an outlier, \\(50\\) <b>is</b> an outlier.",
  },
  {
    board: "A-Level",
    q: "Give the <b>five-number summary</b> of the data \\(12,15,11,18,20,9,14,17\\) (\\(n=8\\)), excluding the median when forming the halves.",
    steps: [
      "First sort the data: \\(9,11,12,14,15,17,18,20\\).",
      "Minimum \\(=9\\), maximum \\(=20\\).",
      "Median (mean of 4th and 5th values): \\(Q_2=\\dfrac{14+15}{2}=14.5\\).",
      "Lower half \\(9,11,12,14\\): \\(Q_1=\\dfrac{11+12}{2}=11.5\\). Upper half \\(15,17,18,20\\): \\(Q_3=\\dfrac{17+18}{2}=17.5\\).",
    ],
    answer: "Five-number summary: min \\(=9\\), \\(Q_1=11.5\\), median \\(=14.5\\), \\(Q_3=17.5\\), max \\(=20\\).",
  },
  {
    board: "A-Level",
    q: "The data set \\(2,4,4,4,5,5,7,9\\) has mean \\(5\\). Compute its population standard deviation directly from the squared deviations, then verify it using the \\(\\sum x^2\\) formula.",
    steps: [
      "Deviations from the mean \\(5\\): \\(-3,-1,-1,-1,0,0,2,4\\).",
      "Squared deviations: \\(9,1,1,1,0,0,4,16\\); sum \\(=32\\).",
      "Population variance (÷ n): \\(\\sigma^2=\\dfrac{32}{8}=4\\), so \\(\\sigma=\\sqrt 4 = 2\\).",
      "Check with \\(\\sum x^2\\): \\(\\sum x^2 = 4+16+16+16+25+25+49+81 = 232\\).",
      "\\(\\sigma^2=\\dfrac{\\sum x^2}{n}-\\bar x^2=\\dfrac{232}{8}-25=29-25=4\\), confirming \\(\\sigma=2\\).",
    ],
    answer: "\\(\\sigma^2=4\\), \\(\\sigma=2\\) (both methods agree).",
  },
  {
    board: "A-Level",
    q: "A data set has standard deviation \\(\\sigma=6\\). Each value is transformed by \\(y=4x+5\\). State the new variance and standard deviation, and explain why the \\(+5\\) has no effect on spread.",
    steps: [
      "Adding a constant shifts every value equally, so all deviations \\((y-\\bar y)\\) are unchanged; hence \\(+5\\) leaves the spread untouched.",
      "Multiplying by \\(4\\) scales every deviation by \\(4\\); standard deviation scales by \\(|a|\\): \\(\\sigma_y=|4|\\times 6=24\\).",
      "Variance is the square: \\(\\sigma_y^2=4^2\\times\\sigma_x^2=16\\times 36\\).",
      "So only the multiplicative factor affects dispersion.",
    ],
    answer: "\\(\\sigma_y=24\\) and \\(\\sigma_y^2=576\\). The additive constant does not change spread; only the factor \\(4\\) does.",
  },
  {
    board: "A-Level",
    q: "Two machines fill bottles. Machine A: mean \\(50\\) ml, SD \\(5\\) ml. Machine B: mean \\(80\\) ml, SD \\(6\\) ml. Using the coefficient of variation, decide which machine is <b>relatively</b> more consistent.",
    steps: [
      "Comparing raw SDs is misleading because the means differ; use the coefficient of variation \\(\\text{CV}=\\dfrac{\\sigma}{\\bar x}\\) (often as a percentage).",
      "Machine A: \\(\\text{CV}_A=\\dfrac{5}{50}=0.10=10\\%\\).",
      "Machine B: \\(\\text{CV}_B=\\dfrac{6}{80}=0.075=7.5\\%\\).",
      "The smaller CV indicates less relative variability.",
    ],
    answer: "\\(\\text{CV}_A=10\\%\\), \\(\\text{CV}_B=7.5\\%\\). Machine B is relatively more consistent (despite its larger absolute SD).",
  },
  {
    board: "A-Level",
    q: "Data set A has \\(n_1=5\\), mean \\(10\\), SD \\(2\\). Data set B has \\(n_2=5\\), mean \\(14\\), SD \\(4\\). Find the standard deviation of the <b>combined</b> set of 10 values.",
    steps: [
      "Combined mean: \\(\\bar x=\\dfrac{n_1\\bar x_1+n_2\\bar x_2}{n_1+n_2}=\\dfrac{5(10)+5(14)}{10}=\\dfrac{50+70}{10}=12\\).",
      "The total squared deviation of each group about the <b>combined</b> mean is \\(n_i\\big(\\sigma_i^2+(\\bar x_i-\\bar x)^2\\big)\\).",
      "Set A: \\(5\\big(2^2+(10-12)^2\\big)=5(4+4)=40\\). Set B: \\(5\\big(4^2+(14-12)^2\\big)=5(16+4)=100\\).",
      "Combined variance: \\(\\sigma^2=\\dfrac{40+100}{10}=\\dfrac{140}{10}=14\\).",
      "Combined standard deviation: \\(\\sigma=\\sqrt{14}\\approx 3.742\\).",
    ],
    answer: "Combined mean \\(=12\\), combined variance \\(=14\\), combined SD \\(=\\sqrt{14}\\approx 3.74\\).",
  },
];
