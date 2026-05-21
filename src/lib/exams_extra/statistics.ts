import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "A sample of 5 reaction times (in ms) is recorded: 12, 15, 17, 20, 11. Calculate the sample mean and the <b>unbiased</b> sample variance \\(s^2\\) (dividing by \\(n-1\\)), and hence the sample standard deviation.",
    steps: [
      "Sample mean: \\(\\bar x=\\dfrac{12+15+17+20+11}{5}=\\dfrac{75}{5}=15\\) ms.",
      "Deviations from the mean: \\(-3,\\,0,\\,2,\\,5,\\,-4\\).",
      "Squared deviations: \\(9,\\,0,\\,4,\\,25,\\,16\\); their sum is \\(\\sum(x-\\bar x)^2=54\\).",
      "Divide by \\(n-1=4\\): \\(s^2=\\dfrac{54}{4}=13.5\\).",
      "Standard deviation: \\(s=\\sqrt{13.5}\\approx 3.674\\) ms.",
    ],
    answer: "\\(\\bar x=15\\) ms, \\(s^2=13.5\\), \\(s\\approx 3.67\\) ms.",
  },
  {
    board: "A-Level",
    q: "Why do we divide by \\(n-1\\) when estimating a population variance from a sample? Using the data \\(8,9,7,6,10\\), compute the <b>biased</b> estimator (÷ n) and the <b>unbiased</b> estimator (÷ n−1) and compare.",
    steps: [
      "Dividing by \\(n\\) systematically underestimates \\(\\sigma^2\\) because deviations are taken about the sample mean \\(\\bar x\\) (which is closer to the data than the true \\(\\mu\\)); dividing by \\(n-1\\) (Bessel's correction) removes this bias so that \\(E(s^2)=\\sigma^2\\).",
      "Mean: \\(\\bar x=\\dfrac{8+9+7+6+10}{5}=\\dfrac{40}{5}=8\\).",
      "Squared deviations: \\(0,1,1,4,4\\), giving \\(\\sum(x-\\bar x)^2=10\\).",
      "Biased estimator: \\(\\dfrac{10}{n}=\\dfrac{10}{5}=2\\).",
      "Unbiased estimator: \\(s^2=\\dfrac{10}{n-1}=\\dfrac{10}{4}=2.5\\); the unbiased value is larger.",
    ],
    answer: "Biased (÷ n) \\(=2\\); unbiased (÷ n−1) \\(s^2=2.5\\). The \\(n-1\\) version corrects the downward bias.",
  },
  {
    board: "A-Level",
    q: "Group A has \\(n_1=30\\) students with mean score \\(62\\); group B has \\(n_2=20\\) students with mean score \\(72\\). Find the mean score of the <b>combined</b> group of 50 students.",
    steps: [
      "The combined total is the sum of the group totals: \\(\\sum x = n_1\\bar x_1 + n_2\\bar x_2\\).",
      "Group A total: \\(30\\times 62 = 1860\\).",
      "Group B total: \\(20\\times 72 = 1440\\).",
      "Combined mean: \\(\\bar x=\\dfrac{1860+1440}{30+20}=\\dfrac{3300}{50}\\).",
    ],
    answer: "Combined mean \\(=66\\). (Note it is the weighted average, not \\(\\tfrac{62+72}{2}=67\\).)",
  },
  {
    board: "A-Level",
    q: "A set of temperatures in &deg;C has mean \\(\\bar x=50\\) and standard deviation \\(\\sigma_x=8\\). Each value is transformed by the coding \\(y=3x-10\\). State the mean and standard deviation of \\(y\\), and explain the effect of each constant.",
    steps: [
      "For a linear transformation \\(y=ax+b\\): the mean transforms fully, \\(\\bar y=a\\bar x+b\\).",
      "Mean of \\(y\\): \\(\\bar y=3(50)-10=150-10=140\\).",
      "Standard deviation scales by \\(|a|\\) and is <b>unaffected</b> by the additive constant \\(b\\): \\(\\sigma_y=|a|\\,\\sigma_x=3\\times 8\\).",
      "So \\(+(-10)\\) shifts every value (changes the mean) but leaves spread unchanged; the factor \\(3\\) stretches the spread.",
    ],
    answer: "\\(\\bar y=140\\), \\(\\sigma_y=24\\). The constant shifts the mean only; the multiplier scales the SD.",
  },
  {
    board: "A-Level",
    q: "In a survey of \\(n=400\\) voters, \\(240\\) said they support a policy. Estimate the population proportion \\(\\hat p\\) and give the standard error of this estimate.",
    steps: [
      "Point estimate: \\(\\hat p=\\dfrac{240}{400}=0.6\\).",
      "Standard error formula for a sample proportion: \\(\\text{SE}=\\sqrt{\\dfrac{\\hat p(1-\\hat p)}{n}}\\).",
      "Substitute: \\(\\text{SE}=\\sqrt{\\dfrac{0.6\\times 0.4}{400}}=\\sqrt{\\dfrac{0.24}{400}}=\\sqrt{0.0006}\\).",
      "Evaluate: \\(\\text{SE}\\approx 0.0245\\).",
    ],
    answer: "\\(\\hat p=0.6\\), \\(\\text{SE}\\approx 0.0245\\) (about 2.4 percentage points).",
  },
  {
    board: "A-Level",
    q: "A student's module marks are \\(70,80,90\\) carrying credit weights \\(2,3,5\\) respectively. Find the <b>weighted mean</b> mark.",
    steps: [
      "Weighted mean formula: \\(\\bar x_w=\\dfrac{\\sum w_i x_i}{\\sum w_i}\\).",
      "Weighted total: \\(2(70)+3(80)+5(90)=140+240+450=830\\).",
      "Sum of weights: \\(2+3+5=10\\).",
      "Divide: \\(\\bar x_w=\\dfrac{830}{10}\\).",
    ],
    answer: "Weighted mean \\(=83\\) (higher than the unweighted \\(80\\) because the top mark carries the most credit).",
  },
  {
    board: "A-Level",
    q: "For a sample of \\(n=5\\) values it is given that \\(\\sum x = 40\\) and \\(\\sum x^2 = 360\\). Using these summary statistics, find the sample mean and the unbiased sample variance \\(s^2\\).",
    steps: [
      "Mean: \\(\\bar x=\\dfrac{\\sum x}{n}=\\dfrac{40}{5}=8\\).",
      "Use the computational identity \\(\\sum(x-\\bar x)^2=\\sum x^2-\\dfrac{(\\sum x)^2}{n}\\).",
      "Compute: \\(\\sum(x-\\bar x)^2=360-\\dfrac{40^2}{5}=360-\\dfrac{1600}{5}=360-320=40\\).",
      "Unbiased variance: \\(s^2=\\dfrac{40}{n-1}=\\dfrac{40}{4}\\).",
    ],
    answer: "\\(\\bar x=8\\), \\(s^2=10\\).",
  },
  {
    board: "A-Level",
    q: "The number of goals scored per match has the frequency distribution: \\(x=0,1,2,3,4\\) with frequencies \\(f=4,8,16,8,4\\) (40 matches). Find the mean and the variance of the number of goals.",
    steps: [
      "Total frequency: \\(\\sum f = 4+8+16+8+4 = 40\\).",
      "\\(\\sum fx = 0(4)+1(8)+2(16)+3(8)+4(4)=0+8+32+24+16=80\\); so mean \\(\\bar x=\\dfrac{80}{40}=2\\).",
      "\\(\\sum fx^2 = 0(4)+1(8)+4(16)+9(8)+16(4)=0+8+64+72+64=208\\).",
      "\\(E(x^2)=\\dfrac{\\sum fx^2}{\\sum f}=\\dfrac{208}{40}=5.2\\).",
      "Variance \\(=E(x^2)-\\bar x^2=5.2-2^2=1.2\\); standard deviation \\(=\\sqrt{1.2}\\approx 1.095\\).",
    ],
    answer: "Mean \\(=2\\), variance \\(=1.2\\), SD \\(\\approx 1.10\\) goals.",
  },
];
