# [Word Ladder Designer](https://edemaine.github.io/word-ladder/)

A [***word ladder***](https://en.wikipedia.org/wiki/Word_ladder)
is a sequence of words where consecutive words differ by one letter change.
For example: CAT → COT → DOT → DOG.

Lewis Carroll invented word ladders as a kind of puzzle game;
his 1879 *Vanity Fair* article proposed turning HEAD into TAIL with four words
in between: HEAD → HEAL → TEAL → TELL → TALL → TAIL.

## Features

This tool lets you design your own word ladders,
with a variety of different rules and constraints:

* **Dictionary**: Currently the only full dictionary available is a
  [10,000 English word list by Eric Price](https://www.mit.edu/~ecprice/wordlist.10000).
  But you can add your own **extra words**,
  or **forbid words** from the dictionary that you don't like.
  Click an × button to remove a word in the current ladder.
* **Operations**: In addition to allowing single letters replacements,
  you can optionally enable:
  * **Swapping** two adjacent letters.
  * **Inserting** a new letter (increasing the word length).
  * **Deleting** a letter (decreasing the word length).
* **Objectives**:
  * You can specify a target word to reach, or
    just search for ladders from a start word.
  * You can look for **shortest** ladders.
    With a goal, this finds the fastest way between two words.
    Without a goal, this finds a longest shortest ladder
    (the radius of the source in the graph).
  * You can search among **all** ladders.
    In this mode, you see all the options available at each step,
    and you can choose which word to go to next.
    As a starting point, the ladder starts with the shortest one.
    Each word is labeled with the number of steps to the goal
    (if there is a goal), so you can tell which choices get you closer
    vs. farther away.
    This can be helpful for designing a word ladder of a desired length.

[Try it out now!](https://edemaine.github.io/word-ladder/)

## Application to Sculpture

[![](https://erikdemaine.org/curved/Brush/thumbs/brush4_small.jpg)](https://erikdemaine.org/curved/Brush/)

This software was originally created to design word ladders
for a folded-paper and blown-glass sculpture called
[Brush With Words](https://erikdemaine.org/curved/Brush/).
For this purpose, it includes a link for rendering the current word ladder
in our [strip folding font](https://erikdemaine.org/fonts/strip/).
