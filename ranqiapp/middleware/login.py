from django.shortcuts import redirect
from django.utils.deprecation import MiddlewareMixin


class LoginMiddleWare(MiddlewareMixin):
    def process_request(self, request):
        if request.path_info == '/':
            return redirect('/index/')
        if request.path_info in ["/login/", "/image/code/", "/index/", "/register/", "/afterlogin/"]:
            return
        info_dict = request.session.get("info")
        if info_dict:
            return
        return redirect("/index/")

    def process_response(self, request, response):
        return response
