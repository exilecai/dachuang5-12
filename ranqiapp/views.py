from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from ranqiapp import models
from ranqiapp.models import UserInfo, guanwang, Qp2, fangsan2
from ranqiapp.utils.form import CompensateAddForm, BuyAddForm, StoreAddForm, SellAddForm, UseAddForm,DiffuseAddForm
from ranqiapp.utils.pagination import Pagination

'''def login(request):
     if request.method=="GET":
         return render(request,"login.html")
     else:
        print(request.POST)
        username=request.POST.get("user")
        password=request.POST.get("password")
        if username =='root' and password=="123":
            return HttpResponse("登录成功")
        else:
            #return HttpResponse("登陆失败")
            return render(request,'login.html',{"error_msg":"登陆失败"})
'''


def infolist(request):
    data_list = UserInfo.objects.all()
    return render(request, "infolist.html", {"data_list": data_list})


def index(request):
    if request.method == "GET":
        return render(request, 'index.html', context={'title': '燃煤之籍'})
    # 对注册进行操作
    if request.method == "POST":
        user = request.POST.get("username")
        password = request.POST.get("password")
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        UserInfo.objects.create(name=user, password=password, email=email, phone=phone)
        return render(request, 'index.html', context={'title': '燃煤之籍'})


def afterlogin(request):
    if request.method == "POST":
        username1 = request.POST.get("username1")
        password1 = request.POST.get("password1")
        users = UserInfo.objects.filter(Q(name=username1) & Q(password=password1)).first()
        if users == None:
            return render(request, 'index.html', context={'title': '燃煤之籍|燃煤之籍'})
        else:
            if users.level == 1:
                request.session["info"] = {"username": users.name,
                                           "level": '普通用户'}
            else:
                request.session["info"] = {"username": users.name,
                                           "level": '管理员'}
            request.session.set_expiry(60 * 60 * 24 * 7)
            return render(request, 'director.html', context={'title': '燃煤之籍|导航'})


def logout(request):
    request.session.clear()
    return redirect("/index/")


def analyses_overall_1(request):
    return render(request, "analyses_overall_1.html", context={'title': '燃煤之籍|数据分析|总体概览1'})


def analyses_overall_2(request):
    return render(request, "analyses_overall_2.html", context={'title': '燃煤之籍|数据分析|总体概览2'})


def analyses_meter_1(request):
    return render(request, "analyses_meter_1.html", context={'title': '燃煤之籍|数据分析|表具计量1'})


def analyses_meter_2(request):
    return render(request, "analyses_meter_2.html", context={'title': '燃煤之籍|数据分析|表具计量2'})


@csrf_exempt
def buy(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        type1 = request.GET.get('type', '')
        unit = request.GET.get('unit', '')
        price = request.GET.get('price', '')
        amount = request.GET.get('amount', '')
        data_dict = {}
        if len(request.GET) <= 1:
            queryset = models.Buy.objects.all().order_by("date")
        else:
            if len(start) != 0 and len(end) != 0:
                date = models.Buy.objects.filter(date__range=(start, end)).order_by("date")
            elif len(start) == 0 and len(end) != 0:
                date = models.Buy.objects.filter(date__lte=end).order_by("date")
            elif len(start) != 0 and len(end) == 0:
                date = models.Buy.objects.filter(date__gte=start).order_by("date")
            else:
                date = models.Buy.objects.all().order_by("date")
            if type1 == '1':
                type_query = models.Buy.objects.all().order_by("date")
            elif type1 == '2':
                type_query = models.Buy.objects.filter(type=1).order_by("date")
            elif type1 == '3':
                type_query = models.Buy.objects.filter(type=2).order_by("date")
            else:
                type_query = models.Buy.objects.filter(type=3).order_by("date")
            if len(price) == 0:
                price_query = models.Buy.objects.all().order_by("date")
            else:
                data_dict["price__contains"] = price
                price_query = models.Buy.objects.filter(**data_dict).order_by("date")
            if len(amount) == 0:
                amount_query = models.Buy.objects.all().order_by("date")
            else:
                data_dict["amount__contains"] = amount
                amount_query = models.Buy.objects.filter(**data_dict).order_by("date")
            queryset = date & type_query & price_query & amount_query
        page_object = Pagination(request, queryset)
        form = BuyAddForm()
        context = {
            'title': '燃煤之籍|每日购气量',
            'start': start,
            'end': end,
            'amount': amount,
            'type': type1,
            'unit': unit,
            'price': price,
            "form": form,
            "queryset": page_object.page_queryset,
            "page_string": page_object.html(),
        }
        return render(request, 'buy.html', context)
    else:
        dict1 = request.POST.dict()
        if '' in list(dict1.values()):
            return JsonResponse({'status': False})
        else:
            models.Buy.objects.create(
                date=dict1.get('date'),
                amount=dict1.get('amount'),
                type=dict1.get('type'),
                unit=dict1.get('unit'),
                price=dict1.get('price'),
            )
            return JsonResponse({'status': True})


def buy_delete(request):
    uid = request.GET.get("uid")
    exists = models.Buy.objects.filter(id=uid).exists()
    if not exists:
        return JsonResponse({"status": False, "error": "删除失败，数据不存在"})
    models.Buy.objects.filter(id=uid).delete()
    return JsonResponse({"status": True})


@csrf_exempt
def store(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        type1 = request.GET.get('type', '')
        tank = request.GET.get('tank', '')
        data_dict = {}
        if len(request.GET) <= 1:
            queryset = models.Store.objects.all().order_by("date")
        else:
            if len(start) != 0 and len(end) != 0:
                date = models.Store.objects.filter(date__range=(start, end)).order_by("date")
            elif len(start) == 0 and len(end) != 0:
                date = models.Store.objects.filter(date__lte=end).order_by("date")
            elif len(start) != 0 and len(end) == 0:
                date = models.Store.objects.filter(date__gte=start).order_by("date")
            else:
                date = models.Store.objects.all().order_by("date")
            if type1 == '1':
                type_query = models.Store.objects.all().order_by("date")
            elif type1 == '2':
                type_query = models.Store.objects.filter(type=1).order_by("date")
            elif type1 == '3':
                type_query = models.Store.objects.filter(type=2).order_by("date")
            else:
                type_query = models.Store.objects.filter(type=3).order_by("date")
            if len(tank) == 0:
                tank_query = models.Store.objects.all().order_by("date")
            else:
                data_dict["tank__contains"] = tank
                tank_query = models.Store.objects.filter(**data_dict).order_by("date")
            queryset = date & type_query & tank_query
        page_object = Pagination(request, queryset)
        form = StoreAddForm()
        context = {
            'title': '燃煤之籍|每日库存量',
            'start': start,
            'end': end,
            'tank': tank,
            'type': type1,
            "form": form,
            "queryset": page_object.page_queryset,
            "page_string": page_object.html(),
        }
        return render(request, 'store.html', context)
    else:
        dict1 = request.POST.dict()
        if '' in list(dict1.values()):
            return JsonResponse({'status': False})
        else:
            models.Store.objects.create(
                date=dict1.get('date'),
                type=dict1.get('type'),
                tank=dict1.get('tank'),
                height=dict1.get('height'),
                area=dict1.get('area'),
                density=dict1.get('density'),
                factor=dict1.get('factor'),
                temperature=dict1.get('temperature'),
                pressure=dict1.get('pressure'),

            )
            return JsonResponse({'status': True})


def store_delete(request):
    uid = request.GET.get("uid")
    exists = models.Store.objects.filter(id=uid).exists()
    if not exists:
        return JsonResponse({"status": False, "error": "删除失败，数据不存在"})
    models.Store.objects.filter(id=uid).delete()
    return JsonResponse({"status": True})


@csrf_exempt
def sell(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        type1 = request.GET.get('type', '')
        area = request.GET.get('area', '')
        data_dict = {}
        if len(request.GET) <= 1:
            queryset = models.Sell.objects.all().order_by("date")
        else:
            if len(start) != 0 and len(end) != 0:
                date = models.Sell.objects.filter(date__range=(start, end)).order_by("date")
            elif len(start) == 0 and len(end) != 0:
                date = models.Sell.objects.filter(date__lte=end).order_by("date")
            elif len(start) != 0 and len(end) == 0:
                date = models.Sell.objects.filter(date__gte=start).order_by("date")
            else:
                date = models.Sell.objects.all().order_by("date")
            if type1 == '1':
                type_query = models.Sell.objects.all().order_by("date")
            elif type1 == '2':
                type_query = models.Sell.objects.filter(type=1).order_by("date")
            elif type1 == '3':
                type_query = models.Sell.objects.filter(type=2).order_by("date")
            else:
                type_query = models.Sell.objects.filter(type=3).order_by("date")
            if area == '1':
                area_query = models.Sell.objects.all().order_by("date")
            elif area == '2':
                area_query = models.Sell.objects.filter(area=1).order_by("date")
            elif area == '3':
                area_query = models.Sell.objects.filter(area=2).order_by("date")
            elif area == '4':
                area_query = models.Sell.objects.filter(area=3).order_by("date")
            else:
                area_query = models.Sell.objects.filter(area=4).order_by("date")
            queryset = date & type_query & area_query
        page_object = Pagination(request, queryset)
        form = SellAddForm()
        context = {
            'title': '燃煤之籍|每日销气量',
            'start': start,
            'end': end,
            'area': area,
            'type': type1,
            "form": form,
            "queryset": page_object.page_queryset,
            "page_string": page_object.html(),
        }
        return render(request, 'sell.html', context)
    else:
        dict1 = request.POST.dict()
        if '' in list(dict1.values()):
            return JsonResponse({'status': False})
        else:
            models.Sell.objects.create(
                date=dict1.get('date'),
                type=dict1.get('type'),
                price=dict1.get('price'),
                amount=dict1.get('amount'),
                area=dict1.get('area'),
            )
            return JsonResponse({'status': True})


def sell_delete(request):
    uid = request.GET.get("uid")
    exists = models.Sell.objects.filter(id=uid).exists()
    if not exists:
        return JsonResponse({"status": False, "error": "删除失败，数据不存在"})
    models.Sell.objects.filter(id=uid).delete()
    return JsonResponse({"status": True})


@csrf_exempt
def use(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        use = request.GET.get('use', '')
        date_dict = {}
        if len(request.GET) <= 1:
            queryset = models.Use.objects.all().order_by("date")
        else:
            if len(start) != 0 and len(end) != 0:
                date = models.Use.objects.filter(date__range=(start, end)).order_by("date")
            elif len(start) == 0 and len(end) != 0:
                date = models.Use.objects.filter(date__lte=end).order_by("date")
            elif len(start) != 0 and len(end) == 0:
                date = models.Use.objects.filter(date__gte=start).order_by("date")
            else:
                date = models.Use.objects.all().order_by("date")
            if use == '1':
                use_query = models.Use.objects.all().order_by("date")
            elif use == '2':
                use_query = models.Use.objects.filter(use=1).order_by("date")
            elif use == '3':
                use_query = models.Use.objects.filter(use=2).order_by("date")
            else:
                use_query = models.Use.objects.filter(use=3).order_by("date")
            queryset = date & use_query
        page_object = Pagination(request, queryset)
        form = UseAddForm()
        context = {
            'title': '燃煤之籍|每日自用气量',
            'start': start,
            'end': end,
            'use': use,
            "form": form,
            "queryset": page_object.page_queryset,
            "page_string": page_object.html(),
        }
        return render(request, 'use.html', context)
    else:
        dict1 = request.POST.dict()
        if '' in list(dict1.values()):
            return JsonResponse({'status': False})
        else:
            models.Use.objects.create(
                date=dict1.get('date'),
                amount=dict1.get('amount'),
                number=dict1.get('number'),
                price=dict1.get('price'),
                use=dict1.get('use'),
            )
            return JsonResponse({'status': True})


def use_delete(request):
    uid = request.GET.get("uid")
    exists = models.Use.objects.filter(id=uid).exists()
    if not exists:
        return JsonResponse({"status": False, "error": "删除失败，数据不存在"})
    models.Use.objects.filter(id=uid).delete()
    return JsonResponse({"status": True})


@csrf_exempt
def compensate(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        type1 = request.GET.get('type', '')
        area = request.GET.get('area', '')
        state = request.GET.get('state', '')
        if len(request.GET) <= 1:
            queryset = models.Compensate.objects.all().order_by("date")
        else:
            if len(start) != 0 and len(end) != 0:
                date = models.Compensate.objects.filter(date__range=(start, end)).order_by("date")
            elif len(start) == 0 and len(end) != 0:
                date = models.Compensate.objects.filter(date__lte=end).order_by("date")
            elif len(start) != 0 and len(end) == 0:
                date = models.Compensate.objects.filter(date__gte=start).order_by("date")
            else:
                date = models.Compensate.objects.all().order_by("date")
            if type1 == '1':
                type_query = models.Compensate.objects.all().order_by("date")
            elif type1 == '2':
                type_query = models.Compensate.objects.filter(type=1).order_by("date")
            else:
                type_query = models.Compensate.objects.filter(type=2).order_by("date")
            if area == '1':
                area_query = models.Compensate.objects.all().order_by("date")
            elif area == '2':
                area_query = models.Compensate.objects.filter(area=1).order_by("date")
            elif area == '3':
                area_query = models.Compensate.objects.filter(area=2).order_by("date")
            elif area == '4':
                area_query = models.Compensate.objects.filter(area=3).order_by("date")
            else:
                area_query = models.Compensate.objects.filter(area=4).order_by("date")
            if state == '1':
                state_query = models.Compensate.objects.all().order_by("date")
            elif state == '2':
                state_query = models.Compensate.objects.filter(state=2).order_by("date")
            else:
                state_query = models.Compensate.objects.filter(state=1).order_by("date")
            queryset = date & type_query & area_query & state_query
        page_object = Pagination(request, queryset)
        form = CompensateAddForm()
        context = {
            'title': '燃煤之籍|每日索赔气量',
            'start': start,
            'end': end,
            'type': type1,
            'area': area,
            'state': state,
            "form": form,
            "queryset": page_object.page_queryset,
            "page_string": page_object.html(),
        }
        return render(request, 'compensate.html', context)
    else:
        dict1 = request.POST.dict()
        if '' in list(dict1.values()):
            return JsonResponse({'status': False})
        else:
            models.Compensate.objects.create(
                date=dict1.get('date'),
                type=dict1.get('type'),
                reason=dict1.get('reason'),
                amount=dict1.get('amount'),
                area=dict1.get('area'),
                state=dict1.get('state'),
            )
            return JsonResponse({'status': True})


def compensate_delete(request):
    uid = request.GET.get("uid")
    exists = models.Compensate.objects.filter(id=uid).exists()
    if not exists:
        return JsonResponse({"status": False, "error": "删除失败，数据不存在"})
    models.Compensate.objects.filter(id=uid).delete()
    return JsonResponse({"status": True})


@csrf_exempt
def diffuse(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        type1 = request.GET.get('type', '')
        area = request.GET.get('area', '')
        reason = request.GET.get('reason', '')
        if len(request.GET) <= 1:
            queryset = models.Diffuse.objects.all().order_by("date")
        else:
            if len(start) != 0 and len(end) != 0:
                date = models.Diffuse.objects.filter(date__range=(start, end)).order_by("date")
            elif len(start) == 0 and len(end) != 0:
                date = models.Diffuse.objects.filter(date__lte=end).order_by("date")
            elif len(start) != 0 and len(end) == 0:
                date = models.Diffuse.objects.filter(date__gte=start).order_by("date")
            else:
                date = models.Diffuse.objects.all().order_by("date")
            if type1 == '1':
                type_query = models.Diffuse.objects.all().order_by("date")
            elif type1 == '2':
                type_query = models.Diffuse.objects.filter(type=1).order_by("date")
            else:
                type_query = models.Diffuse.objects.filter(type=2).order_by("date")
            if area == '1':
                area_query = models.Diffuse.objects.all().order_by("date")
            elif area == '2':
                area_query = models.Diffuse.objects.filter(area=1).order_by("date")
            elif area == '3':
                area_query = models.Diffuse.objects.filter(area=2).order_by("date")
            elif area == '4':
                area_query = models.Diffuse.objects.filter(area=3).order_by("date")
            else:
                area_query = models.Diffuse.objects.filter(area=4).order_by("date")
            if reason == '1':
                reason_query = models.Diffuse.objects.all().order_by("date")
            elif reason == '2':
                reason_query = models.Diffuse.objects.filter(reason=1).order_by("date")
            else:
                reason_query = models.Diffuse.objects.filter(reason=2).order_by("date")
            queryset = date & type_query & area_query & reason_query
        page_object = Pagination(request, queryset)
        form = DiffuseAddForm()
        context = {
            'title': '燃煤之籍|每日放散气量',
            'start': start,
            'end': end,
            'type': type1,
            'area': area,
            'reason': reason,
            "form": form,
            "queryset": page_object.page_queryset,
            "page_string": page_object.html(),
        }
        return render(request, 'diffuse.html', context)
    else:
        dict1 = request.POST.dict()
        if '' in list(dict1.values()):
            return JsonResponse({'status': False})
        else:
            models.Diffuse.objects.create(
                date=dict1.get('date'),
                type=dict1.get('type'),
                reason=dict1.get('reason'),
                amount=dict1.get('amount'),
                area=dict1.get('area'),
            )
            return JsonResponse({'status': True})


def diffuse_delete(request):
    uid = request.GET.get("uid")
    exists = models.Diffuse.objects.filter(id=uid).exists()
    if not exists:
        return JsonResponse({"status": False, "error": "删除失败，数据不存在"})
    models.Diffuse.objects.filter(id=uid).delete()
    return JsonResponse({"status": True})


def leakage(request):
    return render(request, "泄漏预测-1.html")


def leakage2(request):
    return render(request, "泄漏预测-2.html")


def supervision(request):
    return render(request, "用气监测-1.html")


def supervision2(request):
    return render(request, "用气监测-2.html")


def pipe(request):
    return render(request, "管容变化-1.html")


def pipe2(request):
    return render(request, "管容变化-2.html")


def temp(request):
    return render(request, "温压补偿-1.html")


def temp2(request):
    return render(request, "温压补偿-2.html")


def director(request):
    return render(request, 'director.html', context={'title': '燃煤之籍|导航'})


def datamanage1(request):
    return render(request, "基本数据管理管网信息.html")


def datamanage2(request):
    return render(request, "基本数据管理用户信息.html", context={'title': '燃煤之籍|用户信息管理'})


def datamanage3(request):
    return render(request, "基本数据管理数据字典.html")


def datamanage4(request):
    return render(request, "基本数据管理气源信息.html")


def back(request):
    if request.method == "GET":
        Guanwangbiao = guanwang.objects.all()
        return render(request, "用户信息管理319(1).html", {"data_list": Guanwangbiao})
    if request.method == "POST":
        guanwangname = request.POST.get("guanwangname")
        guandaolen = request.POST.get("guandaolen")
        guige = request.POST.get("guige")
        textile = request.POST.get("textile")
        weihu = request.POST.get("weihu")
        jilu = request.POST.get("jilu")
        status = request.POST.get("status")
        guanwang.objects.create(guanwangname=guanwangname, guandaolen=guandaolen, guige=guige, textile=textile,
                                weihu=weihu, jilu=jilu, status=status)
        # Guanwangbiao = guanwang.objects.all()
        # return render(request, "用户信息管理319(1).html", {"data_list": Guanwangbiao})
        return redirect("/back/")


def delete(request):
    if request.method == "POST":
        id = request.POST.get('id')
        guanwang.objects.filter(id=id).delete()
        Guanwangbiao = guanwang.objects.all()
        return render(request, "用户信息管理319(1).html", {"data_list": Guanwangbiao})


# lyyの系统
def delta(request):
    return render(request, "delta.html")


def Qc(request):
    return render(request, "参数Qc-4-2.html")


def Qd(request):
    return render(request, "参数Qd-4-2.html")


def Qf(request):
    return render(request, "参数Qf-4-2.html")


def Qi(request):
    return render(request, "参数Qi-t1-4-2.html")


def Qp(request):
    if request.method == "GET":
        qplist = Qp2.objects.all()
        return render(request, "参数Qp3-27.html", {"data_list": qplist})
    if request.method == "POST":
        indicator = request.POST.get('indicator')
        data_type = request.POST.get('type')
        search = Qp2.objects.filter(zhibiao=indicator, typeqp=data_type)
        return render(request, "参数Qp3-27.html", {"data_list": search})


def Qs(request):
    return render(request, "参数Qs-4-2.html")


def home(request):
    return render(request, "燃气购销差模型3.25.html")




def user1(request):
    return render(request, "普通用户-其他信息管理.html")


def user2(request):
    return render(request, "普通用户-气源信息管理.html")


def user3(request):
    return render(request, "普通用户-用户信息管理.html")


def user4(request):
    return render(request, "普通用户-管网信息管理.html")


def user5(request):
    return render(request, "普通用户-购销差专项工作管理.html")


def superuser1(request):
    return render(request, "管理员-其他信息管理.html")


def superuser2(request):
    return render(request, "管理员-气源信息管理.html")


def superuser3(request):
    return render(request, "管理员-用户信息管理.html")


def superuser4(request):
    return render(request, "管理员-管网信息管理.html")


def superuser5(request):
    return render(request, "管理员-账号管理.html")


def superuser6(request):
    return render(request, "管理员-购销差专项工作管理.html")
