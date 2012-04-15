var pager = {
  items_in_each_page: 5,
  list: function(items, currentPage) {
    if (items === 0)
      return "[1]";
    var firstPage = 1;
    var lastPage = this.calculateLastPage(items);
    var pages = this.buildListOfNumbers(firstPage, lastPage);
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
  }

};