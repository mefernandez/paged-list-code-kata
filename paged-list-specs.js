describe('Kata Paged List',function(){

  it('No items',function(){
    var list_size = 0;
    expect(pager.list(list_size)).toBe('[1]');
  });
  
  it('1 item',function(){
    var list_size = 1;
    var currentPage = 1;
    expect(pager.list(list_size, currentPage)).toBe('[1]');
  });

  it('5 items, 5 each page',function(){
    var list_size = 5;
    pager.items_in_each_page = 5;
    var currentPage = 1;
    expect(pager.list(list_size, currentPage)).toBe('[1]');
  });

  it('10 items, 5 each page',function(){
    var list_size = 10;
    pager.items_in_each_page = 5;
    var currentPage = 1;
    expect(pager.list(list_size, currentPage)).toBe('[1],2');
  });
  
  it('for 1 item last page is 1', function() {
    var list_size = 1;
    pager.items_in_each_page = 5;
    expect(pager.calculateLastPage(list_size)).toBe(1);
  });

  it('for 2 items last page is 1', function() {
    var list_size = 1;
    pager.items_in_each_page = 5;
    expect(pager.calculateLastPage(list_size)).toBe(1);
  });
  
  it('for 5 items last page is 1', function() {
    var list_size = 5;
    pager.items_in_each_page = 5;
    expect(pager.calculateLastPage(list_size)).toBe(1);
  });
  
  it('for 6 items last page is 2', function() {
    var list_size = 6;
    pager.items_in_each_page = 5;
    expect(pager.calculateLastPage(list_size)).toBe(2);
  });
  
  it('for 10 items last page is 2', function() {
    var list_size = 6;
    pager.items_in_each_page = 5;
    expect(pager.calculateLastPage(list_size)).toBe(2);
  });

  it('list of numbers from 1 to 1', function() {
    expect(pager.buildListOfNumbers(1,1)).toBe("1");
  });

  it('list of numbers from 1 to 2', function() {
    expect(pager.buildListOfNumbers(1,2)).toBe("1,2");
  });

  it('decorate page 1', function() {
    expect(pager.decorateCurrentPage("1,2,3", 1)).toBe("[1],2,3");
  });

  it('decorate page 2', function() {
    expect(pager.decorateCurrentPage("1,2,3", 2)).toBe("1,[2],3");
  });

});