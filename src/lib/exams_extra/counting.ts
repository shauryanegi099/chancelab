import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "How many <b>4-digit numbers</b> can be formed using the digits \\(0,1,2,3,4,5\\) if repetition of digits is <b>not</b> allowed?",
    steps: [
      "A 4-digit number cannot start with 0, so the leading (thousands) digit must come from \\(\\{1,2,3,4,5\\}\\): that gives \\(5\\) choices.",
      "For the hundreds place we may now use 0, but not the digit already used in the thousands place. From the original 6 digits, one is gone, leaving \\(5\\) choices.",
      "For the tens place, two digits are now used, leaving \\(4\\) choices; for the units place, three are used, leaving \\(3\\) choices.",
      "By the multiplication rule the total is \\(5\\times5\\times4\\times3\\).",
      "\\(5\\times5\\times4\\times3 = 300\\).",
    ],
    answer: "\\(300\\).",
  },
  {
    board: "JEE Advanced",
    q: "Using the digits \\(0,1,2,3,4,5\\) without repetition, how many 4-digit numbers formed are <b>even</b>?",
    steps: [
      "An even number must end in \\(0,2,\\) or \\(4\\). The leading-zero restriction interacts with the units digit, so split into cases.",
      "<b>Case 1: units digit is 0.</b> The remaining three places are filled from \\(\\{1,2,3,4,5\\}\\) (no zero left), with no repetition: \\(5\\times4\\times3 = 60\\). No leading-zero issue since 0 is used at the end.",
      "<b>Case 2: units digit is 2 or 4</b> (\\(2\\) choices). The thousands digit cannot be 0 and cannot equal the units digit, so it has \\(6-2 = 4\\) choices.",
      "Then the hundreds digit: 6 digits minus the two already used \\(= 4\\) choices; the tens digit: \\(3\\) choices left.",
      "Case 2 total \\(= 2\\times4\\times4\\times3 = 96\\).",
      "Grand total \\(= 60 + 96 = 156\\).",
    ],
    answer: "\\(156\\).",
  },
  {
    board: "JEE Advanced",
    q: "How many integers from <b>1 to 1000</b> (inclusive) are <b>not</b> divisible by 2, 3, or 5?",
    steps: [
      "Use inclusion-exclusion. Let \\(A,B,C\\) be the multiples of \\(2,3,5\\) up to 1000.",
      "\\(|A|=\\lfloor 1000/2\\rfloor=500\\), \\(|B|=\\lfloor 1000/3\\rfloor=333\\), \\(|C|=\\lfloor 1000/5\\rfloor=200\\).",
      "Pairwise: \\(|A\\cap B|=\\lfloor 1000/6\\rfloor=166\\), \\(|A\\cap C|=\\lfloor 1000/10\\rfloor=100\\), \\(|B\\cap C|=\\lfloor 1000/15\\rfloor=66\\).",
      "Triple: \\(|A\\cap B\\cap C|=\\lfloor 1000/30\\rfloor=33\\).",
      "Divisible by at least one \\(=500+333+200-166-100-66+33 = 734\\).",
      "Not divisible by any \\(=1000-734\\).",
    ],
    answer: "\\(266\\).",
  },
  {
    board: "JEE Advanced",
    q: "A number lock has 3 dials, each marked with the digits \\(0\\)–\\(9\\). How many settings have <b>all three digits different</b>, and how many have <b>at least two digits equal</b>?",
    steps: [
      "Total possible settings (repetition allowed): \\(10\\times10\\times10 = 1000\\).",
      "All three different: \\(10\\) choices for the first dial, \\(9\\) for the second, \\(8\\) for the third \\(= 10\\times9\\times8 = 720\\).",
      "'At least two equal' is the complement of 'all three different'.",
      "At least two equal \\(= 1000 - 720 = 280\\).",
    ],
    answer: "All different: \\(720\\); at least two equal: \\(280\\).",
  },
  {
    board: "JEE Advanced",
    q: "How many <b>4-digit numbers</b> have digits with sum equal to a value that makes them divisible by 3, given they are formed from \\(\\{1,2,3,4,5\\}\\) with repetition allowed? Equivalently, how many 4-digit strings over \\(\\{1,2,3,4,5\\}\\) are <b>divisible by 3</b>?",
    steps: [
      "A number is divisible by 3 iff its digit sum is. Classify each digit by remainder mod 3: residue 0 from \\(\\{3\\}\\) (1 digit), residue 1 from \\(\\{1,4\\}\\) (2 digits), residue 2 from \\(\\{2,5\\}\\) (2 digits).",
      "Let the four digits contribute residues \\(r_1+r_2+r_3+r_4\\equiv 0 \\pmod 3\\). Track counts via a generating idea: per position the residue-generating count is \\(1\\cdot x^{0}+2\\cdot x^{1}+2\\cdot x^{2}\\).",
      "We need the sum of coefficients of \\(x^{0},x^{3},x^{6},\\dots\\) in \\((1+2x+2x^2)^4\\) (exponents taken mod 3).",
      "Use roots of unity filter with \\(\\omega=e^{2\\pi i/3}\\). At \\(x=1\\): \\((1+2+2)^4=5^4=625\\). At \\(x=\\omega\\): \\(1+2\\omega+2\\omega^2 = 1+2(\\omega+\\omega^2)=1+2(-1)=-1\\), so \\((-1)^4=1\\). Same at \\(x=\\omega^2\\): \\(1\\).",
      "Count divisible by 3 \\(= \\dfrac{1}{3}\\big(625 + 1 + 1\\big) = \\dfrac{627}{3}\\).",
      "\\(\\dfrac{627}{3} = 209\\).",
    ],
    answer: "\\(209\\).",
  },
  {
    board: "JEE Advanced",
    q: "From the digits \\(0,1,2,3,4,5,6\\), how many <b>4-digit numbers greater than 5000</b> can be formed if repetition is <b>not</b> allowed?",
    steps: [
      "A 4-digit number exceeds 5000 when its thousands digit is \\(5\\) or \\(6\\) (a thousands digit of 5 gives numbers \\(\\ge 5012 > 5000\\), and the smallest such, with distinct digits, is well above 5000).",
      "Thousands digit: \\(2\\) choices (\\(5\\) or \\(6\\)).",
      "Hundreds digit: any of the remaining \\(6\\) digits (0 is allowed here) \\(= 6\\) choices.",
      "Tens digit: \\(5\\) remaining choices; units digit: \\(4\\) remaining choices.",
      "Total \\(= 2\\times6\\times5\\times4 = 240\\).",
    ],
    answer: "\\(240\\).",
  },
  {
    board: "JEE Advanced",
    q: "How many <b>5-letter words</b> (strings, not necessarily meaningful) can be formed from the 26 English letters such that the word contains <b>at least one vowel</b> (a, e, i, o, u), repetition being allowed?",
    steps: [
      "Total 5-letter strings with repetition: \\(26^5\\).",
      "Strings with <b>no</b> vowel use only the 21 consonants: \\(21^5\\).",
      "At least one vowel \\(= 26^5 - 21^5\\).",
      "\\(26^5 = 11{,}881{,}376\\) and \\(21^5 = 4{,}084{,}101\\).",
      "Subtract: \\(11{,}881{,}376 - 4{,}084{,}101 = 7{,}797{,}275\\).",
    ],
    answer: "\\(7{,}797{,}275\\).",
  },
  {
    board: "A-Level",
    q: "A restaurant menu offers 4 starters, 6 main courses, and 3 desserts. A meal consists of one item from each course. (a) How many different meals are possible? (b) If a diner may also <b>skip</b> any one course (but must order at least one item), how many choices are there?",
    steps: [
      "(a) By the multiplication rule, choose one of each: \\(4\\times6\\times3 = 72\\).",
      "(b) Treat each course as having an extra 'skip' option: starters \\(4+1=5\\), mains \\(6+1=7\\), desserts \\(3+1=4\\).",
      "All combinations including 'skip all three': \\(5\\times7\\times4 = 140\\).",
      "Remove the single empty meal (skip everything): \\(140 - 1 = 139\\).",
    ],
    answer: "(a) \\(72\\)  (b) \\(139\\).",
  },
];
