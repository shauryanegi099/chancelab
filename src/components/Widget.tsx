"use client";
import CoinLLN from "./widgets/CoinLLN";
import BayesWaffle from "./widgets/BayesWaffle";
import ExpectationWheel from "./widgets/ExpectationWheel";
import NormalCurve from "./widgets/NormalCurve";
import CountingCalc from "./widgets/CountingCalc";
import Venn from "./widgets/Venn";
import JointTable from "./widgets/JointTable";
import DistExplorer from "./widgets/DistExplorer";
import DiceSum from "./widgets/DiceSum";
import PmfCdf from "./widgets/PmfCdf";
import ContDist from "./widgets/ContDist";
import CLT from "./widgets/CLT";
import MLE from "./widgets/MLE";
import BoxPlot from "./widgets/BoxPlot";
import Scatter from "./widgets/Scatter";

const MAP: Record<string, React.ComponentType<{ config?: string }>> = {
  "coin-lln": CoinLLN,
  "bayes": BayesWaffle,
  "expectation": ExpectationWheel,
  "normal": NormalCurve,
  "counting-calc": CountingCalc,
  "venn": Venn,
  "joint": JointTable,
  "dist-explorer": DistExplorer,
  "dice-sum": DiceSum,
  "pmf-cdf": PmfCdf,
  "cont-dist": ContDist,
  "clt": CLT,
  "mle": MLE,
  "boxplot": BoxPlot,
  "scatter": Scatter,
};

export default function Widget({ id, config }: { id: string; config?: string }) {
  const C = MAP[id];
  if (!C) return <div style={{ color: "var(--dim)", fontStyle: "italic" }}>— apparatus sealed: {id} —</div>;
  return <C config={config} />;
}
