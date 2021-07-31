// header.js
(function($){
// jQuery

var data = [
  {page:'브랜드 소개', link:"../../html/project_001_illycoffee_sub_brand.html"},
  {page:'모든 제품 보기', link:"../../html/project_001_illycoffee_sub_product.html"},
  {page:'btb 소개', link:"../../html/project_001_illycoffee_sub_btb.html"},
  {page:'회원 페이지', link:"../../html/project_001_illycoffee_sub_login.html"}
];

var h1 = $('h1');
var h1Link = h1.find('a');
h1Link.attr({'href':'../../html/project_001_illycoffee_main.html'});




})(jQuery);