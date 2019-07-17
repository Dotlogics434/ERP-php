// JavaScript Document


$(document).ready(function() {

  $('.verticalnav > li > a').click(function() {
    $(this).parent().toggleClass('open')
    $(this).siblings().toggle();
  });

  $('.verticalnav > li:first-child  ul').show();
  $(".navi-tabs__content").hide();
  $(".navi-tabs__content:first").show();

  $('.verticalnav li a').click(function() {
    $(".navi-tabs__content").hide();
    var activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    $('.verticalnav a').removeClass('active');
  });
});