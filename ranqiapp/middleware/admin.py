from django.utils.deprecation import MiddlewareMixin
from django.shortcuts import redirect, HttpResponse, render
from ranqiapp import  models


class AdminMiddleWare(MiddlewareMixin):
    def process_request(self, request):
        if request.path_info not in ["/user3/"]:
            return
        info_dict = request.session.get("info")
        # user_id = request.session['info']['id']
        # user = models.User.objects.get(id=user_id)
        if info_dict.get("level") == '管理员':
            return
        return render(request, "user_error.html", {"massage": "您的权限不能访问该页面！"})

    def process_responce(self, request, response):
        return response
