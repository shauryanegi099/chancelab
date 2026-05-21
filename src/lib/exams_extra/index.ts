import type { ExamQ } from "../examTypes";
import { EXAM as counting } from "./counting";
import { EXAM as permutations } from "./permutations";
import { EXAM as combinations } from "./combinations";
import { EXAM as probability } from "./probability";
import { EXAM as conditional } from "./conditional";
import { EXAM as bayes } from "./bayes";
import { EXAM as randomvars } from "./randomvars";
import { EXAM as expectation } from "./expectation";
import { EXAM as discrete } from "./discrete";
import { EXAM as binomial } from "./binomial";
import { EXAM as poisson } from "./poisson";
import { EXAM as jointrv } from "./jointrv";
import { EXAM as calculus } from "./calculus";
import { EXAM as continuous } from "./continuous";
import { EXAM as exponential } from "./exponential";
import { EXAM as normal } from "./normal";
import { EXAM as statistics } from "./statistics";
import { EXAM as dispersion } from "./dispersion";
import { EXAM as covariance } from "./covariance";
import { EXAM as lln } from "./lln";
import { EXAM as clt } from "./clt";
import { EXAM as estimation } from "./estimation";

export const EXTRA: Record<string, ExamQ[]> = {
  counting, permutations, combinations, probability, conditional, bayes,
  randomvars, expectation, discrete, binomial, poisson, jointrv,
  calculus, continuous, exponential, normal, statistics, dispersion,
  covariance, lln, clt, estimation,
};
