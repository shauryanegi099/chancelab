import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "A committee of <b>5 members</b> is to be selected from <b>6 men and 4 women</b> such that the committee contains <b>at least 2 men and at least 1 woman</b>. In how many ways can this be done?",
    steps: [
      "Let the committee have \\(m\\) men and \\(5-m\\) women with \\(m\\ge2\\) and \\(5-m\\ge1\\), so \\(m\\in\\{2,3,4\\}\\) (and \\(m\\le 4\\) since only 4 women cap the other side; also \\(m\\le6\\)).",
      "<b>2 men, 3 women:</b> \\(\\binom{6}{2}\\binom{4}{3} = 15\\cdot4 = 60\\).",
      "<b>3 men, 2 women:</b> \\(\\binom{6}{3}\\binom{4}{2} = 20\\cdot6 = 120\\).",
      "<b>4 men, 1 woman:</b> \\(\\binom{6}{4}\\binom{4}{1} = 15\\cdot4 = 60\\).",
      "Add the cases: \\(60+120+60 = 240\\).",
    ],
    answer: "\\(240\\).",
  },
  {
    board: "JEE Advanced",
    q: "There are <b>10 points</b> in a plane, of which <b>4 are collinear</b> and no other three are collinear. (a) How many straight lines can be drawn? (b) How many triangles can be formed?",
    steps: [
      "(a) Any 2 of the 10 points determine a line: \\(\\binom{10}{2} = 45\\), but this overcounts the single line through the 4 collinear points.",
      "Those 4 collinear points give \\(\\binom{4}{2} = 6\\) pairs that all lie on one line; replace these 6 with 1 actual line.",
      "Distinct lines \\(= 45 - 6 + 1 = 40\\).",
      "(b) Triangles need 3 non-collinear points: \\(\\binom{10}{3} = 120\\) total triples, minus the \\(\\binom{4}{3} = 4\\) triples that are collinear (degenerate).",
      "Triangles \\(= 120 - 4 = 116\\).",
    ],
    answer: "(a) \\(40\\) lines  (b) \\(116\\) triangles.",
  },
  {
    board: "JEE Advanced",
    q: "How many <b>diagonals</b> and how many <b>triangles</b> (using only its vertices) can be formed from a convex <b>decagon</b> (10 sides)?",
    steps: [
      "Segments joining any 2 of the 10 vertices: \\(\\binom{10}{2} = 45\\).",
      "Of these, 10 are sides of the decagon; the rest are diagonals: \\(45 - 10 = 35\\).",
      "For triangles, choose any 3 vertices; since the decagon is convex, no three vertices are collinear, so every triple gives a genuine triangle.",
      "Triangles \\(= \\binom{10}{3} = 120\\).",
    ],
    answer: "Diagonals: \\(35\\); triangles: \\(120\\).",
  },
  {
    board: "JEE Advanced",
    q: "In how many ways can <b>12 identical chocolates</b> be distributed among <b>4 children</b> so that each child receives <b>at least one</b> chocolate?",
    steps: [
      "We need positive integer solutions of \\(x_1+x_2+x_3+x_4 = 12\\) with each \\(x_i\\ge1\\).",
      "Give each child one chocolate first; this uses 4 and leaves \\(12-4 = 8\\) to distribute freely (each \\(y_i = x_i-1 \\ge 0\\)).",
      "Now count non-negative solutions of \\(y_1+y_2+y_3+y_4 = 8\\) by stars and bars: \\(\\binom{8+4-1}{4-1} = \\binom{11}{3}\\).",
      "\\(\\binom{11}{3} = 165\\).",
    ],
    answer: "\\(165\\).",
  },
  {
    board: "JEE Advanced",
    q: "Find the number of <b>non-negative integer solutions</b> of \\(x_1+x_2+x_3+x_4+x_5 = 20\\) subject to \\(x_1 \\ge 3\\) and \\(x_2 \\le 4\\).",
    steps: [
      "First impose \\(x_1\\ge3\\): substitute \\(x_1 = x_1' + 3\\) with \\(x_1'\\ge0\\). The equation becomes \\(x_1'+x_2+x_3+x_4+x_5 = 17\\).",
      "Count all non-negative solutions ignoring the \\(x_2\\le4\\) cap: \\(\\binom{17+5-1}{5-1} = \\binom{21}{4} = 5985\\).",
      "Subtract the bad cases where \\(x_2\\ge5\\): substitute \\(x_2 = x_2''+5\\), giving sum \\(= 12\\), with \\(\\binom{12+5-1}{5-1} = \\binom{16}{4} = 1820\\) solutions.",
      "Valid count \\(= 5985 - 1820\\).",
      "\\(5985 - 1820 = 4165\\).",
    ],
    answer: "\\(4165\\).",
  },
  {
    board: "JEE Advanced",
    q: "From <b>5 consonants and 4 vowels</b>, how many <b>words of 3 consonants and 2 vowels</b> can be formed (the chosen 5 letters being all distinct and then arranged into a word)?",
    steps: [
      "Choose 3 consonants from 5: \\(\\binom{5}{3} = 10\\).",
      "Choose 2 vowels from 4: \\(\\binom{4}{2} = 6\\).",
      "Number of letter-sets \\(= 10\\times6 = 60\\); each set has 5 distinct letters.",
      "Arrange each set of 5 distinct letters into a word: \\(5! = 120\\) orders.",
      "Total words \\(= 60\\times120 = 7200\\).",
    ],
    answer: "\\(7200\\).",
  },
  {
    board: "JEE Advanced",
    q: "A box contains <b>5 red, 4 white, and 3 blue</b> balls. In how many ways can <b>3 balls</b> be drawn so that <b>at least one is red</b>? (Balls of the same colour are distinguishable.)",
    steps: [
      "Total ways to choose any 3 of the 12 balls: \\(\\binom{12}{3} = 220\\).",
      "Ways with <b>no</b> red ball use only the \\(4+3 = 7\\) non-red balls: \\(\\binom{7}{3} = 35\\).",
      "At least one red \\(= 220 - 35\\).",
      "\\(220 - 35 = 185\\).",
    ],
    answer: "\\(185\\).",
  },
  {
    board: "A-Level",
    q: "A student must answer <b>7 questions</b> out of 10 on an exam, where the first 3 questions are <b>compulsory</b>. In how many ways can the student choose the questions to answer?",
    steps: [
      "The 3 compulsory questions are fixed, so they must all be selected — no choice there.",
      "That leaves \\(7-3 = 4\\) more questions to pick from the remaining \\(10-3 = 7\\) optional questions.",
      "Order of selection does not matter, so the count is \\(\\binom{7}{4}\\).",
      "\\(\\binom{7}{4} = 35\\).",
    ],
    answer: "\\(35\\).",
  },
];
