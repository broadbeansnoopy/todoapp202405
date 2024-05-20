$("#addTodo").click(function () {
  // IDやクラスを使って特定のinput要素を指定
  const inputTodo = $("input").val();
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    // 入力フィールドをクリア
  $("input").val("");

});

$(document).on("change", "input[type=checkbox]", function(){
  if ($(this).is(":checked")) {
    $(this).parent().css("text-decoration", "line-through");
    $(this).parent().css("color", "#ccc");
    } else {
      $(this).parent().css("text-decoration", "none");
      $(this).parent().css("color", "#000");
      }
});