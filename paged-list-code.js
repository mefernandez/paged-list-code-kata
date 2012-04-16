var pager = {
  items_in_each_page: 5,
  max_pages: 5,
  list: function(items, currentPage) {
    if (items === 0)
      return "[1]";
    var firstPage = 1;
    var lastPage = this.calculateLastPage(items);
    var pages = this.buildListOfNumbers(firstPage, lastPage);
    var range = this.calculateEllipsisRange(lastPage-firstPage+1);
    if (range !== null)
      pages = this.insertEllipsis(pages, range);
    pages = this.decorateCurrentPage(pages, currentPage);
    return pages;
  },
  calculateLastPage: function(items) {
    var remainder = (items-1) % this.items_in_each_page;
    var dividend = (items-1) - remainder;
    var quotient = dividend / this.items_in_each_page;
    var lastPage = quotient + 1;
    return lastPage;
  },
  buildListOfNumbers: function(first, last) {
    var list = "";
    var sep = "";
    for (var i=first; i<=last; i++) {
      list += sep + i;
      sep = ",";
    }
    return list;
  },
  decorateCurrentPage: function(pages, current) {
    return pages.replace(""+current, "["+current+"]");
  },
  calculateEllipsisRange: function(numPages) {
    if (numPages < this.max_pages)
      return null;
    var endRange = numPages - 1;
    var startRange = endRange - (numPages - this.max_pages);
    var range = {
      begin: startRange,
      end: endRange
    };
    return range;
  },
  insertEllipsis: function(pages, range) {
    var toBeReplaced = this.buildListOfNumbers(range.begin, range.end);
    var pagesWithEllipsis = pages.replace(toBeReplaced, "...");
    return pagesWithEllipsis;
  }

};