import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "For the bivariate data \\(x:1,2,3,4,5\\) and \\(y:2,4,5,4,5\\), compute the (population) covariance and Pearson's correlation coefficient \\(r\\). Use the \\(\\sum xy\\) approach.",
    steps: [
      "Summary sums (\\(n=5\\)): \\(\\sum x=15,\\ \\sum y=20,\\ \\sum xy=66,\\ \\sum x^2=55,\\ \\sum y^2=86\\).",
      "Means: \\(\\bar x=3,\\ \\bar y=4\\). Covariance: \\(\\operatorname{Cov}=\\dfrac{\\sum xy}{n}-\\bar x\\bar y=\\dfrac{66}{5}-12=13.2-12=1.2\\).",
      "Standard deviations: \\(\\sigma_x=\\sqrt{\\dfrac{55}{5}-3^2}=\\sqrt{11-9}=\\sqrt2\\); \\(\\sigma_y=\\sqrt{\\dfrac{86}{5}-4^2}=\\sqrt{17.2-16}=\\sqrt{1.2}\\).",
      "Correlation: \\(r=\\dfrac{\\operatorname{Cov}}{\\sigma_x\\sigma_y}=\\dfrac{1.2}{\\sqrt2\\,\\sqrt{1.2}}=\\dfrac{1.2}{\\sqrt{2.4}}\\).",
      "Evaluate: \\(\\sqrt{2.4}\\approx 1.549\\), so \\(r\\approx \\dfrac{1.2}{1.549}\\approx 0.775\\).",
    ],
    answer: "\\(\\operatorname{Cov}=1.2\\), \\(r\\approx 0.775\\) (strong positive linear association).",
  },
  {
    board: "A-Level",
    q: "Hours studied \\(x:2,4,6,8,10\\) and exam score \\(y:3,7,5,11,14\\). Find the least-squares regression slope \\(b=\\dfrac{\\operatorname{Cov}(x,y)}{\\operatorname{Var}(x)}\\), the intercept, and predict \\(y\\) when \\(x=7\\).",
    steps: [
      "Sums (\\(n=5\\)): \\(\\sum x=30,\\ \\sum y=40,\\ \\sum xy=292,\\ \\sum x^2=220\\). Means: \\(\\bar x=6,\\ \\bar y=8\\).",
      "Covariance: \\(\\operatorname{Cov}=\\dfrac{292}{5}-6\\times 8=58.4-48=10.4\\).",
      "Variance of \\(x\\): \\(\\operatorname{Var}(x)=\\dfrac{220}{5}-6^2=44-36=8\\).",
      "Slope: \\(b=\\dfrac{10.4}{8}=1.3\\). Intercept: \\(a=\\bar y-b\\bar x=8-1.3(6)=8-7.8=0.2\\).",
      "Prediction at \\(x=7\\): \\(\\hat y=0.2+1.3(7)=0.2+9.1=9.3\\).",
    ],
    answer: "\\(b=1.3\\), \\(a=0.2\\), regression line \\(\\hat y=0.2+1.3x\\); predicted \\(y\\approx 9.3\\) at \\(x=7\\).",
  },
  {
    board: "A-Level",
    q: "Given \\(\\operatorname{Cov}(X,Y)=-6\\), \\(\\sigma_X=3\\) and \\(\\sigma_Y=4\\), find the correlation coefficient and interpret its sign and strength.",
    steps: [
      "Use \\(r=\\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y}\\).",
      "Substitute: \\(r=\\dfrac{-6}{3\\times 4}=\\dfrac{-6}{12}\\).",
      "Simplify: \\(r=-0.5\\).",
      "Interpretation: the negative sign means as \\(X\\) increases, \\(Y\\) tends to decrease; magnitude \\(0.5\\) indicates a moderate linear relationship.",
    ],
    answer: "\\(r=-0.5\\): a moderate <b>negative</b> linear relationship.",
  },
  {
    board: "A-Level",
    q: "It is given that \\(\\operatorname{Cov}(X,Y)=8\\), with \\(\\sigma_X=2\\) and \\(\\sigma_Y=8\\). New variables are defined by the coding \\(U=2X+1\\) and \\(V=3Y-4\\). Find \\(\\operatorname{Cov}(U,V)\\) and the correlation \\(r_{UV}\\), and state which one is unaffected by the coding.",
    steps: [
      "Additive constants do not affect covariance; multiplicative factors scale it: \\(\\operatorname{Cov}(aX+b,\\,cY+d)=ac\\,\\operatorname{Cov}(X,Y)\\).",
      "Here \\(a=2,\\ c=3\\): \\(\\operatorname{Cov}(U,V)=2\\times 3\\times 8=48\\).",
      "The standard deviations also scale: \\(\\sigma_U=2\\sigma_X=4\\) and \\(\\sigma_V=3\\sigma_Y=24\\).",
      "Correlation is scale-free: \\(r_{UV}=\\dfrac{48}{4\\times 24}=\\dfrac{48}{96}=0.5\\), and \\(r_{XY}=\\dfrac{8}{2\\times 8}=0.5\\) — identical.",
    ],
    answer: "\\(\\operatorname{Cov}(U,V)=48\\); correlation \\(r_{UV}=0.5\\), unchanged by the linear coding (correlation is invariant under positive linear transformations).",
  },
  {
    board: "A-Level",
    q: "For a bivariate sample of size \\(n=10\\) the summary statistics are \\(\\sum x=40,\\ \\sum y=60,\\ \\sum xy=280,\\ \\sum x^2=200,\\ \\sum y^2=520\\). Compute Pearson's \\(r\\) using the corrected sums \\(S_{xy},S_{xx},S_{yy}\\).",
    steps: [
      "\\(S_{xy}=\\sum xy-\\dfrac{(\\sum x)(\\sum y)}{n}=280-\\dfrac{40\\times 60}{10}=280-240=40\\).",
      "\\(S_{xx}=\\sum x^2-\\dfrac{(\\sum x)^2}{n}=200-\\dfrac{40^2}{10}=200-160=40\\).",
      "\\(S_{yy}=\\sum y^2-\\dfrac{(\\sum y)^2}{n}=520-\\dfrac{60^2}{10}=520-360=160\\).",
      "Correlation: \\(r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}\\,S_{yy}}}=\\dfrac{40}{\\sqrt{40\\times 160}}=\\dfrac{40}{\\sqrt{6400}}=\\dfrac{40}{80}\\).",
    ],
    answer: "\\(r=0.5\\) (moderate positive linear correlation).",
  },
  {
    board: "A-Level",
    q: "For the data \\(x:1,3,5\\) and \\(y:8,6,4\\), compute the covariance and the correlation coefficient, and explain what the value of \\(r\\) tells you geometrically.",
    steps: [
      "Means: \\(\\bar x=\\dfrac{1+3+5}{3}=3,\\ \\bar y=\\dfrac{8+6+4}{3}=6\\).",
      "Deviation products \\((x-\\bar x)(y-\\bar y)\\): \\((-2)(2),\\ (0)(0),\\ (2)(-2)\\) \\(=-4,0,-4\\); sum \\(=-8\\).",
      "Covariance: \\(\\operatorname{Cov}=\\dfrac{-8}{3}\\approx -2.667\\).",
      "Both spreads: \\(\\sigma_x=\\sqrt{\\tfrac{4+0+4}{3}}=\\sqrt{\\tfrac83}\\), \\(\\sigma_y=\\sqrt{\\tfrac{4+0+4}{3}}=\\sqrt{\\tfrac83}\\); so \\(r=\\dfrac{-8/3}{8/3}=-1\\).",
      "Geometrically \\(r=-1\\) means the three points lie exactly on a straight line with negative slope (here \\(y=9-x\\)).",
    ],
    answer: "\\(\\operatorname{Cov}=-\\dfrac{8}{3}\\approx -2.67\\), \\(r=-1\\): perfect negative linear relationship (collinear points).",
  },
  {
    board: "A-Level",
    q: "A study finds a strong positive correlation (\\(r=0.85\\)) between the number of ice-creams sold and the number of drowning incidents across summer days. Does eating ice-cream cause drowning? Explain why <b>correlation does not imply causation</b> here.",
    steps: [
      "A high \\(r\\) only measures the strength of a <b>linear association</b> between the two recorded variables; it says nothing about a cause-and-effect mechanism.",
      "Here a plausible <b>confounding (lurking) variable</b> is hot weather / temperature: hotter days independently raise both ice-cream sales and the number of people swimming (hence drownings).",
      "Because a third variable drives both, the observed association is <b>spurious</b> — neither variable causes the other.",
      "To support causation one needs a controlled experiment (randomisation) or careful adjustment for confounders, not correlation alone.",
    ],
    answer: "No. The correlation is driven by a confounder (temperature); it is a spurious association, so a strong \\(r\\) does not establish causation.",
  },
  {
    board: "A-Level",
    q: "For the data \\(x:1,2,3,4\\) and \\(y:2,3,5,4\\): (a) find the regression slope \\(b=\\dfrac{\\operatorname{Cov}(x,y)}{\\operatorname{Var}(x)}\\) and intercept; (b) predict \\(y\\) at \\(x=5\\); (c) comment on the reliability of that prediction.",
    steps: [
      "Sums (\\(n=4\\)): \\(\\sum x=10,\\ \\sum y=14,\\ \\sum xy=39,\\ \\sum x^2=30\\); means \\(\\bar x=2.5,\\ \\bar y=3.5\\).",
      "Covariance: \\(\\operatorname{Cov}=\\dfrac{39}{4}-2.5\\times 3.5=9.75-8.75=1\\).",
      "Variance of \\(x\\): \\(\\operatorname{Var}(x)=\\dfrac{30}{4}-2.5^2=7.5-6.25=1.25\\). Slope: \\(b=\\dfrac{1}{1.25}=0.8\\).",
      "Intercept: \\(a=\\bar y-b\\bar x=3.5-0.8(2.5)=3.5-2=1.5\\); line \\(\\hat y=1.5+0.8x\\). At \\(x=5\\): \\(\\hat y=1.5+4=5.5\\).",
      "(c) \\(x=5\\) lies outside the data range \\([1,4]\\), so this is <b>extrapolation</b> and the prediction is less reliable than one made within the observed range.",
    ],
    answer: "\\(b=0.8\\), \\(a=1.5\\), \\(\\hat y=1.5+0.8x\\); predicted \\(y=5.5\\) at \\(x=5\\), but it is an extrapolation, so treat it with caution.",
  },
];
