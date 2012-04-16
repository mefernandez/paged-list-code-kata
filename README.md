Paged List Code Kata
====================

Introduction
------------

Showing a list of elements is a common task in web programming. And when lists
grow big, the only way to handle them in an efficient way is to chop the list 
into pages, each page containing a fixed number of elements.

The number of pages depends on the size of the entire list and how many elements 
are shown in each page. The current page being shown is marked in some way.

Example List 1: 15 elements, 3 pages, 5 elements each page.

	1
	2
	3
	4
	5

	Pages: [1], 2, 3

However, when lists are too big, pages can be too many to show them all. A common 
solution to this is to skip some pages in the list adding an ellipsis (…).

Example List 2: 150 elements, 30 pages, 5 elements each page, 7 pages listed including ellipsis.

	1
	2
	3
	4
	5

	Pages: [1], 2, 3, 4, 5, …, 30

Finally, the user can jump to another page, and so the decoration of the current
pages changes. In the following example, the ellipsis try to preserve the first,
last, previous and next pages visible for easier navigation.

Example List 3: jump to page 10 in previous example

	51
	52
	53
	54
	55

	Pages: 1, …, 9, [10], 11, …, 30 


Let's go!
---------

The goal of this kata is to program a piece of code that produces a footer showing
a list of pages given a the size of the list of items.

I was just about to write the requirements, but I think it's more fun to elicit them 
from the problem description.

Anyway, for the impatient, the next section gives a more detailed description of the requirements.

Some instructions
-----------------

Write a piece of code that takes:

- list size
- elements per page
- current page
- max pages to show

and puts out a string of comma separated pages with no more than MAX_PAGES listed as elements in the output string and with the current page in brackets. Skipped pages show a "…" string.

	Sample output string: [1], 2, 3, …, 30

It is required for the first and last pages to always appear. It is desirable to be able to jump to next and previous pages from current one.

