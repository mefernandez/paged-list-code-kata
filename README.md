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

Kata Insight
============

I just wanted to share some things that surprised me about this kata to anyone
that would care for this kind of insight.

I picked this problem for a Kata for it is very easy to understand. That makes
the Kata easy to describe. I thought it would be easy to code too. However, some
things surprised me.

The first thing I noticed is how much code piles up with just two test cases. 
I started writing the real code from test one, and I ended up with over 20 linesto make it pass. Maybe that's just a sign I'm not that good at Javascript :*).

There's also some seemingly easy functionality that puts on a little fight. My 
brain got stuck at determining how to calculate how many pages are necessary to
hold 10 items, 5 per page. It seemed pretty easy: just divide the total number of items by how many items fit per page, right? Well, it doesn't work.

Example: 5 items per page, integer division of (N/5) + 1

	1 item -->  should fit in 1 page: (1/5)+1=1
 	2 items --> should fit in 1 page: (2/5)+1=1
 	...
	5 items --> should fit in 1 page: (5/5)+1=2 ... FAIL

I was teaching a TDD training course when I realized about this. I asked for the students opinion. Taking the Modulus and using Math.floor() where some of the options.
Later, I found out the solution was indeed really simple:

	var pages = (N-1)/5+1

But, I just couldn't find the easy way to do integer division in Javascript, so
I did it old school.

	var remainder = (items-1) % this.items_in_each_page;
	var dividend = (items-1) - remainder;
	var quotient = dividend / this.items_in_each_page;
	var lastPage = quotient + 1; 

Too wordy, but it works!

As soon as I got through this, I started needing to test the non-API methods.
It was necessary to fix dumb bugs, like calculating the number of pages
like this:

	var range = this.calculateEllipsisRange(lastPage-firstPage);

Which is not correct, since it gives one less page than expected. The right way is:

	var range = this.calculateEllipsisRange(lastPage-firstPage+1);

It's a dumb mistake, but I'm sure it would have been a problem if I didn't have tests in place.

Conclusion: write tests. It's the best way to stay clear of bugs in the code.
For you know, errare humanum est.
