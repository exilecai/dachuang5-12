function deleteR(button) {
    var id = button.id;
    var r = confirm("确定要删除这一行数据吗？");
    if (r == true) {
    $.ajax({
        url: '/delete/',
        type: 'POST',
        headers: { "X-CSRFToken": csrf_token },
        data: {
            'id': id
        },
    });
    }
    else{}
}
