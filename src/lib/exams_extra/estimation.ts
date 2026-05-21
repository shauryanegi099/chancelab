import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "A-Level",
    q: "Let \\(X_1,\\dots,X_n\\) be a random sample from a population with mean \\(\\mu\\) and variance \\(\\sigma^2\\). Show that the sample mean \\(\\bar{X}=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i\\) is an <b>unbiased</b> estimator of \\(\\mu\\), and state its variance.",
    steps: [
      "An estimator \\(\\hat\\theta\\) is unbiased for \\(\\theta\\) if \\(E[\\hat\\theta]=\\theta\\).",
      "By linearity of expectation, \\(E[\\bar{X}]=\\dfrac{1}{n}\\sum_{i=1}^{n}E[X_i]=\\dfrac{1}{n}\\,(n\\mu)=\\mu\\), so the bias is \\(E[\\bar{X}]-\\mu=0\\).",
      "Hence \\(\\bar{X}\\) is unbiased for \\(\\mu\\) for every sample size \\(n\\).",
      "Since the \\(X_i\\) are independent, \\(\\operatorname{Var}(\\bar{X})=\\dfrac{1}{n^2}\\sum_{i=1}^{n}\\operatorname{Var}(X_i)=\\dfrac{n\\sigma^2}{n^2}=\\dfrac{\\sigma^2}{n}\\).",
    ],
    answer: "\\(E[\\bar{X}]=\\mu\\) (unbiased), and \\(\\operatorname{Var}(\\bar{X})=\\dfrac{\\sigma^2}{n}\\).",
  },
  {
    board: "A-Level",
    q: "Explain why the estimator \\(\\hat\\sigma^2=\\dfrac{1}{n}\\sum_{i=1}^{n}(X_i-\\bar{X})^2\\) is a <b>biased</b> estimator of the population variance \\(\\sigma^2\\), and state the unbiased version.",
    steps: [
      "A key identity is \\(E\\!\\left[\\sum_{i=1}^{n}(X_i-\\bar{X})^2\\right]=(n-1)\\sigma^2\\); dividing by \\(\\bar{X}\\) (rather than \\(\\mu\\)) removes one degree of freedom.",
      "Therefore \\(E[\\hat\\sigma^2]=\\dfrac{1}{n}\\,(n-1)\\sigma^2=\\dfrac{n-1}{n}\\,\\sigma^2\\), which is less than \\(\\sigma^2\\): the estimator <b>systematically underestimates</b>.",
      "The bias is \\(E[\\hat\\sigma^2]-\\sigma^2=-\\dfrac{\\sigma^2}{n}\\); it shrinks as \\(n\\to\\infty\\) but is nonzero for finite \\(n\\).",
      "To correct it, divide by \\(n-1\\): the sample variance \\(S^2=\\dfrac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar{X})^2\\) satisfies \\(E[S^2]=\\sigma^2\\) and is unbiased.",
    ],
    answer: "\\(E[\\hat\\sigma^2]=\\dfrac{n-1}{n}\\sigma^2<\\sigma^2\\) (bias \\(-\\sigma^2/n\\)); the unbiased estimator is \\(S^2=\\dfrac{1}{n-1}\\sum(X_i-\\bar{X})^2\\).",
  },
  {
    board: "A-Level",
    q: "From \\(n\\) independent Bernoulli\\((p)\\) trials with \\(\\sum_{i=1}^{n}x_i=k\\) successes, derive the maximum-likelihood estimator \\(\\hat{p}\\), and evaluate it for \\(k=18\\) successes in \\(n=30\\) trials.",
    steps: [
      "Each observation has \\(P(X=x)=p^{x}(1-p)^{1-x}\\), so the likelihood is \\(L(p)=\\prod_{i=1}^{n}p^{x_i}(1-p)^{1-x_i}=p^{k}(1-p)^{\\,n-k}\\).",
      "Take logs: \\(\\ell(p)=k\\ln p+(n-k)\\ln(1-p)\\).",
      "Differentiate and set to zero: \\(\\ell'(p)=\\dfrac{k}{p}-\\dfrac{n-k}{1-p}=0\\Rightarrow k(1-p)=(n-k)p\\Rightarrow k=np\\), so \\(\\hat{p}=\\dfrac{k}{n}\\).",
      "The second derivative \\(\\ell''(p)=-\\dfrac{k}{p^2}-\\dfrac{n-k}{(1-p)^2}<0\\) confirms a maximum. For \\(k=18,\\ n=30\\): \\(\\hat{p}=\\dfrac{18}{30}=0.6\\).",
    ],
    answer: "\\(\\hat{p}_{\\text{MLE}}=\\dfrac{k}{n}=\\dfrac{18}{30}=0.6\\).",
  },
  {
    board: "A-Level",
    q: "Let \\(X_1,\\dots,X_n\\) be a random sample from a Poisson\\((\\lambda)\\) distribution. Derive the maximum-likelihood estimator of \\(\\lambda\\), and compute it for the data \\(2,3,1,4,0\\).",
    steps: [
      "The Poisson pmf is \\(P(X=x)=\\dfrac{e^{-\\lambda}\\lambda^{x}}{x!}\\), so \\(L(\\lambda)=\\prod_{i=1}^{n}\\dfrac{e^{-\\lambda}\\lambda^{x_i}}{x_i!}=\\dfrac{e^{-n\\lambda}\\,\\lambda^{\\sum x_i}}{\\prod x_i!}\\).",
      "Log-likelihood: \\(\\ell(\\lambda)=-n\\lambda+\\left(\\sum_{i=1}^{n}x_i\\right)\\ln\\lambda-\\ln\\!\\left(\\prod x_i!\\right)\\).",
      "Differentiate: \\(\\ell'(\\lambda)=-n+\\dfrac{\\sum x_i}{\\lambda}=0\\Rightarrow \\hat\\lambda=\\dfrac{1}{n}\\sum_{i=1}^{n}x_i=\\bar{x}\\). (Here \\(\\ell''(\\lambda)=-\\dfrac{\\sum x_i}{\\lambda^2}<0\\), a maximum.)",
      "For \\(2,3,1,4,0\\): \\(\\sum x_i=10\\), \\(n=5\\), so \\(\\hat\\lambda=\\dfrac{10}{5}=2\\).",
    ],
    answer: "\\(\\hat\\lambda_{\\text{MLE}}=\\bar{x}=\\dfrac{10}{5}=2\\).",
  },
  {
    board: "A-Level",
    q: "Let \\(X_1,\\dots,X_n\\) be a random sample from \\(N(\\mu,\\sigma^2)\\) with \\(\\sigma^2\\) known. Derive the maximum-likelihood estimator of \\(\\mu\\), and compute it for the data \\(8,11,7,10,9\\).",
    steps: [
      "The normal density gives likelihood \\(L(\\mu)=\\prod_{i=1}^{n}\\dfrac{1}{\\sqrt{2\\pi\\sigma^2}}\\exp\\!\\left(-\\dfrac{(x_i-\\mu)^2}{2\\sigma^2}\\right)\\).",
      "Log-likelihood (constants in \\(\\mu\\) dropped): \\(\\ell(\\mu)=-\\dfrac{1}{2\\sigma^2}\\sum_{i=1}^{n}(x_i-\\mu)^2+\\text{const}\\).",
      "Differentiate: \\(\\ell'(\\mu)=\\dfrac{1}{\\sigma^2}\\sum_{i=1}^{n}(x_i-\\mu)=0\\Rightarrow \\sum x_i-n\\mu=0\\), so \\(\\hat\\mu=\\dfrac{1}{n}\\sum_{i=1}^{n}x_i=\\bar{x}\\). Maximising \\(\\ell\\) is the same as minimising \\(\\sum(x_i-\\mu)^2\\).",
      "For \\(8,11,7,10,9\\): \\(\\sum x_i=45\\), \\(n=5\\), so \\(\\hat\\mu=\\dfrac{45}{5}=9\\).",
    ],
    answer: "\\(\\hat\\mu_{\\text{MLE}}=\\bar{x}=\\dfrac{45}{5}=9\\).",
  },
  {
    board: "A-Level",
    q: "A random sample \\(X_1,\\dots,X_n\\) is taken from a continuous Uniform distribution on \\([0,\\theta]\\). Use the <b>method of moments</b> to derive an estimator of \\(\\theta\\), and evaluate it for the sample \\(2,5,3,6\\).",
    steps: [
      "The population (first) moment of a Uniform on \\([0,\\theta]\\) is \\(E[X]=\\dfrac{\\theta}{2}\\).",
      "Method of moments equates the population moment to the sample moment: \\(\\dfrac{\\theta}{2}=\\bar{X}\\).",
      "Solve for \\(\\theta\\): \\(\\hat\\theta=2\\bar{X}\\).",
      "For \\(2,5,3,6\\): \\(\\bar{x}=\\dfrac{2+5+3+6}{4}=\\dfrac{16}{4}=4\\), so \\(\\hat\\theta=2\\cdot4=8\\).",
    ],
    answer: "\\(\\hat\\theta=2\\bar{X}=2\\cdot4=8\\).",
  },
  {
    board: "A-Level",
    q: "A random sample \\(X_1,\\dots,X_n\\) is taken from an Exponential distribution with rate \\(\\lambda\\) (so \\(E[X]=1/\\lambda\\)). Find the method-of-moments estimator of \\(\\lambda\\), and evaluate it for a sample of \\(n=5\\) values whose total is 20.",
    steps: [
      "The first population moment is \\(E[X]=\\dfrac{1}{\\lambda}\\).",
      "Equate to the sample mean: \\(\\dfrac{1}{\\lambda}=\\bar{X}\\).",
      "Invert to obtain \\(\\hat\\lambda=\\dfrac{1}{\\bar{X}}\\).",
      "Here \\(\\bar{x}=\\dfrac{20}{5}=4\\), so \\(\\hat\\lambda=\\dfrac{1}{4}=0.25\\). (This coincides with the exponential MLE.)",
    ],
    answer: "\\(\\hat\\lambda=\\dfrac{1}{\\bar{X}}=\\dfrac{1}{4}=0.25\\).",
  },
  {
    board: "A-Level",
    q: "Two estimators of a population mean \\(\\mu\\) are proposed from a sample \\(X_1,X_2,X_3\\): \\(\\hat\\mu_1=\\dfrac{X_1+X_2+X_3}{3}\\) and \\(\\hat\\mu_2=\\dfrac{X_1+2X_2+X_3}{4}\\). Each \\(X_i\\) has mean \\(\\mu\\) and variance \\(\\sigma^2\\). Show both are unbiased and decide which is <b>more efficient</b>.",
    steps: [
      "Unbiasedness of \\(\\hat\\mu_1\\): \\(E[\\hat\\mu_1]=\\dfrac{\\mu+\\mu+\\mu}{3}=\\mu\\). Unbiasedness of \\(\\hat\\mu_2\\): \\(E[\\hat\\mu_2]=\\dfrac{\\mu+2\\mu+\\mu}{4}=\\dfrac{4\\mu}{4}=\\mu\\). Both are unbiased.",
      "Variance of \\(\\hat\\mu_1\\) (independence): \\(\\operatorname{Var}(\\hat\\mu_1)=\\dfrac{\\sigma^2+\\sigma^2+\\sigma^2}{9}=\\dfrac{3\\sigma^2}{9}=\\dfrac{\\sigma^2}{3}\\).",
      "Variance of \\(\\hat\\mu_2\\): \\(\\operatorname{Var}(\\hat\\mu_2)=\\dfrac{1^2\\sigma^2+2^2\\sigma^2+1^2\\sigma^2}{4^2}=\\dfrac{6\\sigma^2}{16}=\\dfrac{3\\sigma^2}{8}\\).",
      "Compare: \\(\\dfrac{\\sigma^2}{3}\\approx0.333\\sigma^2\\) versus \\(\\dfrac{3\\sigma^2}{8}=0.375\\sigma^2\\). Since \\(\\hat\\mu_1\\) has the smaller variance, it is more efficient.",
    ],
    answer: "Both are unbiased. \\(\\operatorname{Var}(\\hat\\mu_1)=\\dfrac{\\sigma^2}{3}<\\dfrac{3\\sigma^2}{8}=\\operatorname{Var}(\\hat\\mu_2)\\), so \\(\\hat\\mu_1\\) (the sample mean) is more efficient.",
  },
];
