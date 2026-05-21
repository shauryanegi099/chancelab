import type { ExamQ } from "../examTypes";

export const EXAM: ExamQ[] = [
  {
    board: "JEE Advanced",
    q: "Find the number of distinct arrangements of all the letters of the word <b>MISSISSIPPI</b>.",
    steps: [
      "Count the letters: M\\(\\times1\\), I\\(\\times4\\), S\\(\\times4\\), P\\(\\times2\\) — a total of 11 letters.",
      "Arrangements of a multiset use the multinomial formula \\(\\dfrac{n!}{n_1!\\,n_2!\\,\\cdots}\\).",
      "Here \\(=\\dfrac{11!}{1!\\,4!\\,4!\\,2!}\\).",
      "Compute: \\(11! = 39{,}916{,}800\\) and \\(4!\\,4!\\,2! = 24\\cdot24\\cdot2 = 1152\\).",
      "\\(\\dfrac{39{,}916{,}800}{1152} = 34{,}650\\).",
    ],
    answer: "\\(34{,}650\\).",
  },
  {
    board: "JEE Advanced",
    q: "In how many arrangements of the letters of the word <b>MISSISSIPPI</b> do <b>no two S's</b> stand together?",
    steps: [
      "First arrange the non-S letters: M, I, I, I, I, P, P — that is 7 letters with I\\(\\times4\\) and P\\(\\times2\\).",
      "Number of such arrangements \\(= \\dfrac{7!}{4!\\,2!} = \\dfrac{5040}{48} = 105\\).",
      "These 7 letters create \\(7+1 = 8\\) gaps (including the two ends) into which the S's may go.",
      "To keep the four S's apart, place them in 4 distinct gaps: choose \\(\\binom{8}{4}\\) gaps (the S's are identical, so order among them does not matter).",
      "\\(\\binom{8}{4} = 70\\).",
      "Multiply: \\(105\\times70 = 7350\\).",
    ],
    answer: "\\(7350\\).",
  },
  {
    board: "JEE Advanced",
    q: "In how many ways can the letters of the word <b>ARRANGE</b> be arranged so that the <b>two R's are never together</b>?",
    steps: [
      "ARRANGE has 7 letters: A\\(\\times2\\), R\\(\\times2\\), and N, G, E once each.",
      "Total distinct arrangements \\(= \\dfrac{7!}{2!\\,2!} = \\dfrac{5040}{4} = 1260\\).",
      "Arrangements with both R's together: glue the R's into a single block, leaving 6 units (block, A, A, N, G, E) with A\\(\\times2\\).",
      "These number \\(\\dfrac{6!}{2!} = \\dfrac{720}{2} = 360\\) (the block has identical R's so no internal factor).",
      "R's never together \\(= 1260 - 360 = 900\\).",
    ],
    answer: "\\(900\\).",
  },
  {
    board: "JEE Advanced",
    q: "In how many ways can <b>6 boys and 6 girls</b> be seated around a circular table so that boys and girls <b>alternate</b>?",
    steps: [
      "Fix the rotational symmetry by seating the 6 boys first around the table: \\((6-1)! = 5! = 120\\) ways.",
      "Seating the boys creates 6 gaps between consecutive boys, exactly enough for the 6 girls in alternating fashion.",
      "The 6 girls fill these 6 distinct gaps in \\(6! = 720\\) ways.",
      "Multiply: \\(120\\times720\\).",
      "\\(120\\times720 = 86{,}400\\).",
    ],
    answer: "\\(86{,}400\\).",
  },
  {
    board: "JEE Advanced",
    q: "Find the <b>rank</b> of the word <b>MOTHER</b> when all permutations of its letters are arranged in dictionary (alphabetical) order.",
    steps: [
      "The letters in alphabetical order are E, H, M, O, R, T (all distinct).",
      "<b>1st letter M:</b> letters before M are E, H (2 letters). Each fixes the first letter and permutes the other 5: \\(2\\times5! = 2\\times120 = 240\\) words come first.",
      "<b>2nd letter O</b> (with M fixed): remaining pool E, H, R, T, O; letters before O are E, H (2). Words: \\(2\\times4! = 2\\times24 = 48\\).",
      "<b>3rd letter T</b> (M, O fixed): remaining E, H, R, T; letters before T are E, H, R (3). Words: \\(3\\times3! = 3\\times6 = 18\\).",
      "<b>4th letter H</b> (M, O, T fixed): remaining E, H, R; letters before H is E (1). Words: \\(1\\times2! = 2\\).",
      "<b>5th letter E</b> (M, O, T, H fixed): remaining E, R; before E none. Words: \\(0\\times1! = 0\\). The 6th letter R then completes MOTHER itself.",
      "Rank \\(= 240+48+18+2+0 + 1 = 309\\).",
    ],
    answer: "\\(309\\).",
  },
  {
    board: "JEE Advanced",
    q: "How many <b>4-letter words</b> can be formed using the letters of <b>EQUATION</b> (8 distinct letters) if each word must contain <b>at least one consonant</b>? (Vowels are E, U, A, I, O; consonants are Q, T, N.)",
    steps: [
      "EQUATION has 8 distinct letters: 5 vowels (E, U, A, I, O) and 3 consonants (Q, T, N). We form ordered 4-letter words with no repetition.",
      "Total 4-letter words from 8 distinct letters: \\(P(8,4) = 8\\times7\\times6\\times5 = 1680\\).",
      "Words with <b>no consonant</b> use only the 5 vowels: \\(P(5,4) = 5\\times4\\times3\\times2 = 120\\).",
      "At least one consonant \\(= 1680 - 120\\).",
      "\\(1680 - 120 = 1560\\).",
    ],
    answer: "\\(1560\\).",
  },
  {
    board: "JEE Advanced",
    q: "How many arrangements of the letters of <b>EQUATION</b> (8 distinct letters) have <b>all 5 vowels together</b>?",
    steps: [
      "The vowels are E, U, A, I, O (5 of them) and the consonants are Q, T, N (3 of them); all 8 letters are distinct.",
      "Treat the block of 5 vowels as a single super-letter. Then we arrange this block together with the 3 consonants: \\(4\\) units in all.",
      "These 4 units can be ordered in \\(4! = 24\\) ways.",
      "Within the block the 5 distinct vowels can be permuted in \\(5! = 120\\) ways.",
      "Multiply: \\(24\\times120 = 2880\\).",
    ],
    answer: "\\(2880\\).",
  },
  {
    board: "A-Level",
    q: "Eight people, including a particular couple, are to be seated in a <b>row of 8</b> seats. (a) In how many ways if the couple must sit <b>next to each other</b>? (b) In how many ways if they must <b>not</b> sit next to each other?",
    steps: [
      "(a) Glue the couple into one block, giving \\(7\\) units to arrange in a row: \\(7! = 5040\\) ways.",
      "The couple can sit in 2 internal orders, so multiply: \\(7!\\times2! = 5040\\times2 = 10{,}080\\).",
      "(b) Total unrestricted arrangements of 8 distinct people: \\(8! = 40{,}320\\).",
      "Not together \\(= 8! - (7!\\times2!) = 40{,}320 - 10{,}080 = 30{,}240\\).",
    ],
    answer: "(a) \\(10{,}080\\)  (b) \\(30{,}240\\).",
  },
];
