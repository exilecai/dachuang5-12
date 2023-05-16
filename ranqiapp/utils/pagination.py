'''
在视图函数中：
    def prettynum_list(request):
        # 1.根据自己的情况去筛选自己的数据
        queryset=models.PrettyNum.object.all()

        # 2.实例化分页对象
        page_object=Pagination(request,queryset)
        context={
            "queryset":page_object.page_queryset, #分完页的数据
            "page_string":page_object.html()      #生成页码
        }
        return render(request,"prettynum_list.html",context)

在HTML页面中

    {% for obj in queryset %}
        {{ obj.xx }}
    {% endfor %}

    <ul class="pagination">
        {{ page_string }}
    </ul>

'''

import copy

from django.utils.safestring import mark_safe


class Pagination(object):
    def __init__(self, request, queryset, page_size=10, page_param="page", plus=5):
        query_dict = copy.deepcopy(request.GET)
        query_dict._mutable = True
        self.query_dict = query_dict
        self.page_param = page_param
        page = request.GET.get(page_param, "1")
        if page.isdecimal():
            page = int(page)
        else:
            page = 1
        self.page = page
        self.page_size = page_size
        self.start = (page - 1) * page_size
        self.end = page * page_size
        self.page_queryset = queryset[self.start:self.end]
        total_count = queryset.count()
        page_total_count, div = divmod(total_count, page_size)
        if div:
            page_total_count += 1
        self.page_total_count = page_total_count
        self.plus = plus

    def html(self):
        if self.page_total_count <= 2 * self.plus + 1:
            start_page = 1
            end_page = self.page_total_count
        else:
            if self.page <= self.plus:
                start_page = 1
                end_page = 2 * self.plus + 1
            else:
                if (self.page + self.plus) > self.page_total_count:
                    start_page = self.page_total_count - 2 * self.plus
                    end_page = self.page_total_count
                else:
                    start_page = self.page - self.plus
                    end_page = self.page + self.plus
        page_str_list = []

        page_str_list.append('<li><a href="?{}">首页</a></li>'.format(self.query_dict.urlencode()))
        if self.page > 1:
            self.query_dict.setlist(self.page_param, [self.page - 1])
            prev = '<li><a href="?{}">上一页</a></li>'.format(self.query_dict.urlencode())
        else:
            self.query_dict.setlist(self.page_param, [1])
            prev = '<li><a href="?{}">上一页</a></li>'.format(self.query_dict.urlencode())
        page_str_list.append(prev)
        for i in range(start_page, end_page + 1):
            self.query_dict.setlist(self.page_param, [i])
            if i == self.page:
                ele = '<li class="active"><a href="?p{}">{}</a></li>'.format(self.query_dict.urlencode(), i)
            else:
                ele = '<li><a href="?{}">{}</a></li>'.format(self.query_dict.urlencode(), i)
            page_str_list.append(ele)
        if self.page < self.page_total_count:
            self.query_dict.setlist(self.page_param, [self.page + 1])
            next = '<li><a href="?{}">下一页</a></li>'.format(self.query_dict.urlencode())
        else:
            self.query_dict.setlist(self.page_param, [self.page_total_count])
            next = '<li><a href="?{}">下一页</a></li>'.format(self.query_dict.urlencode())
        page_str_list.append(next)
        self.query_dict.setlist(self.page_param, [self.page_total_count])
        last = '<li><a href="?{}">尾页</a></li>'.format(self.query_dict.urlencode())
        page_str_list.append(last)
        search_string = """
            
            """
        page_str_list.append(search_string)
        page_string = mark_safe("".join(page_str_list))
        return page_string

    '''
    <li>
        <form style="float:left;margin-left: -1px" method="get">
            <input style="position: relative;float: left;display: inline-block;width: 160px;border-radius: 0;"
                           type="text" name="page" class="form-control" placeholder="输入你想跳转的页码">
            <button style="border-radius: 0" class="btn btn-default" type="submit">跳转</button>
        </form>
    </li>
    '''
