import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "Find the <b>absolute maximum</b> and <b>absolute minimum</b> of \\(f(x)=2x^3-9x^2+12x+1\\) on the closed interval \\([0,3]\\).",
    steps: [
      "Differentiate: \\(f'(x)=6x^2-18x+12=6(x^2-3x+2)=6(x-1)(x-2)\\).",
      "Critical points where \\(f'(x)=0\\): \\(x=1\\) and \\(x=2\\); both lie in \\([0,3]\\).",
      "Evaluate at the critical points: \\(f(1)=2-9+12+1=6\\) and \\(f(2)=16-36+24+1=5\\).",
      "Evaluate at the endpoints: \\(f(0)=1\\) and \\(f(3)=54-81+36+1=10\\).",
      "Compare the candidate values \\(\\{1,6,5,10\\}\\): the largest is \\(10\\) at \\(x=3\\), the smallest is \\(1\\) at \\(x=0\\).",
    ],
    answer: "Absolute maximum \\(=10\\) at \\(x=3\\); absolute minimum \\(=1\\) at \\(x=0\\).",
  },
  {
    board: "JEE Advanced",
    q: "Differentiate \\(y=\\dfrac{x^2\\,\\sin x}{1+x}\\) with respect to \\(x\\), simplifying as far as possible.",
    steps: [
      "Write \\(y=\\dfrac{u}{v}\\) with numerator \\(u=x^2\\sin x\\) and denominator \\(v=1+x\\); use the quotient rule \\(y'=\\dfrac{u'v-uv'}{v^2}\\).",
      "Differentiate the numerator by the product rule: \\(u'=2x\\sin x + x^2\\cos x\\).",
      "Differentiate the denominator: \\(v'=1\\).",
      "Substitute: \\(y'=\\dfrac{(2x\\sin x + x^2\\cos x)(1+x) - x^2\\sin x\\cdot 1}{(1+x)^2}\\).",
      "Expand the numerator: \\((2x\\sin x + x^2\\cos x) + (2x^2\\sin x + x^3\\cos x) - x^2\\sin x = 2x\\sin x + x^2\\sin x + x^2\\cos x + x^3\\cos x\\).",
      "Factor: numerator \\(= x\\big[(2+x)\\sin x + x(1+x)\\cos x\\big]\\).",
    ],
    answer: "\\(y'=\\dfrac{x\\big[(2+x)\\sin x + x(1+x)\\cos x\\big]}{(1+x)^2}\\).",
  },
  {
    board: "JEE Advanced",
    q: "Use the chain rule to differentiate \\(y=\\sqrt{\\,3x^2+\\cos(2x)\\,}\\) and evaluate \\(y'\\) at \\(x=0\\).",
    steps: [
      "Let the inside be \\(u=3x^2+\\cos(2x)\\), so \\(y=u^{1/2}\\) and \\(\\dfrac{dy}{du}=\\dfrac{1}{2}u^{-1/2}=\\dfrac{1}{2\\sqrt{u}}\\).",
      "Differentiate the inside: \\(\\dfrac{du}{dx}=6x-2\\sin(2x)\\) (the \\(\\cos\\) term needs its own chain rule, giving \\(-\\sin(2x)\\cdot2\\)).",
      "Chain rule: \\(y'=\\dfrac{1}{2\\sqrt{3x^2+\\cos(2x)}}\\,\\big(6x-2\\sin(2x)\\big)=\\dfrac{3x-\\sin(2x)}{\\sqrt{3x^2+\\cos(2x)}}\\).",
      "At \\(x=0\\): numerator \\(=3(0)-\\sin 0=0\\); denominator \\(=\\sqrt{0+\\cos 0}=\\sqrt{1}=1\\).",
    ],
    answer: "\\(y'=\\dfrac{3x-\\sin(2x)}{\\sqrt{3x^2+\\cos(2x)}}\\), and \\(y'(0)=0\\).",
  },
  {
    board: "JEE Advanced",
    q: "Evaluate \\(\\displaystyle\\int_0^{\\pi} x^2\\cos x\\,dx\\) using integration by parts.",
    steps: [
      "Apply parts with \\(u=x^2,\\ dv=\\cos x\\,dx\\), so \\(du=2x\\,dx,\\ v=\\sin x\\): \\(\\int x^2\\cos x\\,dx = x^2\\sin x - \\int 2x\\sin x\\,dx\\).",
      "Apply parts again to \\(\\int 2x\\sin x\\,dx\\) with \\(u=2x,\\ dv=\\sin x\\,dx\\) (\\(du=2\\,dx,\\ v=-\\cos x\\)): \\(\\int 2x\\sin x\\,dx = -2x\\cos x + \\int 2\\cos x\\,dx = -2x\\cos x + 2\\sin x\\).",
      "Combine the antiderivative: \\(\\int x^2\\cos x\\,dx = x^2\\sin x + 2x\\cos x - 2\\sin x\\).",
      "Evaluate at \\(x=\\pi\\): \\(\\pi^2\\sin\\pi + 2\\pi\\cos\\pi - 2\\sin\\pi = 0 + 2\\pi(-1) - 0 = -2\\pi\\).",
      "Evaluate at \\(x=0\\): \\(0 + 0 - 0 = 0\\). Subtract: \\(-2\\pi - 0\\).",
    ],
    answer: "\\(-2\\pi\\).",
  },
  {
    board: "JEE Advanced",
    q: "Evaluate \\(\\displaystyle\\int_0^{2} \\dfrac{x}{\\sqrt{x^2+1}}\\,dx\\) by substitution.",
    steps: [
      "Let \\(t=x^2+1\\), so \\(dt=2x\\,dx\\), i.e. \\(x\\,dx=\\tfrac12\\,dt\\).",
      "Change the limits: \\(x=0\\Rightarrow t=1\\); \\(x=2\\Rightarrow t=5\\).",
      "Rewrite: \\(\\int_0^2 \\dfrac{x\\,dx}{\\sqrt{x^2+1}} = \\int_1^5 \\dfrac{1}{\\sqrt{t}}\\cdot\\tfrac12\\,dt = \\tfrac12\\int_1^5 t^{-1/2}\\,dt\\).",
      "Integrate: \\(\\tfrac12\\big[2\\sqrt{t}\\big]_1^5 = \\big[\\sqrt{t}\\big]_1^5 = \\sqrt{5}-1\\).",
    ],
    answer: "\\(\\sqrt{5}-1\\approx 1.236\\).",
  },
  {
    board: "JEE Advanced",
    q: "Find the area of the region enclosed between the curve \\(y=x^2\\) and the line \\(y=x+2\\).",
    steps: [
      "Find the intersection points: \\(x^2=x+2\\Rightarrow x^2-x-2=0\\Rightarrow (x-2)(x+1)=0\\), so \\(x=-1\\) and \\(x=2\\).",
      "Between these, test \\(x=0\\): line gives \\(2\\), parabola gives \\(0\\), so the line is on top; area \\(=\\displaystyle\\int_{-1}^{2}\\big[(x+2)-x^2\\big]\\,dx\\).",
      "Antiderivative: \\(\\dfrac{x^2}{2}+2x-\\dfrac{x^3}{3}\\).",
      "At \\(x=2\\): \\(\\dfrac{4}{2}+4-\\dfrac{8}{3}=2+4-\\dfrac{8}{3}=\\dfrac{18-8}{3}=\\dfrac{10}{3}\\).",
      "At \\(x=-1\\): \\(\\dfrac{1}{2}-2+\\dfrac{1}{3}=\\dfrac{3-12+2}{6}=-\\dfrac{7}{6}\\).",
      "Area \\(=\\dfrac{10}{3}-\\left(-\\dfrac{7}{6}\\right)=\\dfrac{20}{6}+\\dfrac{7}{6}=\\dfrac{27}{6}\\).",
    ],
    answer: "\\(\\dfrac{9}{2}=4.5\\) square units.",
  },
  {
    board: "JEE Advanced",
    q: "A continuous random variable has density \\(f(x)=c\\,x(4-x)\\) for \\(0\\le x\\le 4\\) and \\(0\\) otherwise. Find the normalising constant \\(c\\), then compute \\(P(1\\le X\\le 3)\\).",
    steps: [
      "A valid pdf must integrate to 1: \\(\\displaystyle\\int_0^4 c\\,x(4-x)\\,dx = 1\\).",
      "Expand and integrate: \\(\\int_0^4 (4x-x^2)\\,dx = \\big[2x^2-\\tfrac{x^3}{3}\\big]_0^4 = 32-\\tfrac{64}{3}=\\tfrac{96-64}{3}=\\tfrac{32}{3}\\).",
      "So \\(c\\cdot\\tfrac{32}{3}=1\\Rightarrow c=\\tfrac{3}{32}\\).",
      "Now \\(P(1\\le X\\le3)=\\tfrac{3}{32}\\displaystyle\\int_1^3 (4x-x^2)\\,dx=\\tfrac{3}{32}\\big[2x^2-\\tfrac{x^3}{3}\\big]_1^3\\).",
      "At \\(x=3\\): \\(18-9=9\\); at \\(x=1\\): \\(2-\\tfrac13=\\tfrac53\\). Difference \\(=9-\\tfrac53=\\tfrac{22}{3}\\).",
      "Multiply: \\(\\tfrac{3}{32}\\cdot\\tfrac{22}{3}=\\tfrac{22}{32}=\\tfrac{11}{16}\\).",
    ],
    answer: "\\(c=\\dfrac{3}{32}\\); \\(P(1\\le X\\le 3)=\\dfrac{11}{16}=0.6875\\).",
  },
  {
    board: "JEE Advanced",
    q: "A right circular cylinder is inscribed in a sphere of radius \\(R\\). Find the height \\(h\\) of the cylinder of <b>maximum volume</b>, and that maximum volume.",
    steps: [
      "Let the cylinder have radius \\(r\\) and height \\(h\\). The sphere relation is \\(r^2+\\left(\\tfrac{h}{2}\\right)^2=R^2\\), so \\(r^2=R^2-\\tfrac{h^2}{4}\\).",
      "Volume \\(V=\\pi r^2 h = \\pi\\left(R^2-\\tfrac{h^2}{4}\\right)h = \\pi\\left(R^2 h-\\tfrac{h^3}{4}\\right)\\).",
      "Differentiate with respect to \\(h\\): \\(\\dfrac{dV}{dh}=\\pi\\left(R^2-\\tfrac{3h^2}{4}\\right)\\); set to 0: \\(R^2=\\tfrac{3h^2}{4}\\Rightarrow h^2=\\tfrac{4R^2}{3}\\Rightarrow h=\\tfrac{2R}{\\sqrt3}\\).",
      "Second derivative \\(\\dfrac{d^2V}{dh^2}=\\pi\\left(-\\tfrac{3h}{2}\\right)<0\\), confirming a maximum.",
      "Then \\(r^2=R^2-\\tfrac{h^2}{4}=R^2-\\tfrac{R^2}{3}=\\tfrac{2R^2}{3}\\), so \\(V=\\pi\\cdot\\tfrac{2R^2}{3}\\cdot\\tfrac{2R}{\\sqrt3}=\\dfrac{4\\pi R^3}{3\\sqrt3}\\).",
    ],
    answer: "\\(h=\\dfrac{2R}{\\sqrt3}\\); maximum volume \\(=\\dfrac{4\\pi R^3}{3\\sqrt3}=\\dfrac{4\\sqrt3\\,\\pi R^3}{9}\\).",
  },
];
