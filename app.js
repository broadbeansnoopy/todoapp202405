$("#addTodo").click(function () {
  // IDやクラスを使って特定のinput要素を指定
  const inputTodo = $("input").val();
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    // 入力フィールドをクリア
  $("input").val("");

});