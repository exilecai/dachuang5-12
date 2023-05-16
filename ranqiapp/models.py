from django.db import models


# Create your models here.
# 网页总体概览


class UserInfo(models.Model):
    name = models.CharField(max_length=32, null=True)
    password = models.CharField(max_length=64, null=True)
    phone = models.CharField(max_length=32, null=True)
    email = models.EmailField(max_length=128, null=True)
    level_choices = (
        (1, "普通用户"),
        (2, "管理员"),
    )
    level = models.SmallIntegerField(verbose_name="权限", choices=level_choices, default=1)


class Buy(models.Model):
    date = models.DateField(verbose_name='购买日期')
    amount = models.IntegerField(verbose_name='购气量')
    type_choices = ((1, 'CNG'), (2, 'LNG'), (3, '管输'))
    type = models.SmallIntegerField(verbose_name='购气类型', choices=type_choices, default=1)
    unit = models.CharField(verbose_name='购气单位', max_length=128)
    price = models.CharField(verbose_name='购气价格', max_length=128)


class Store(models.Model):
    date = models.DateField(verbose_name='储存日期')
    type_choices = ((1, 'CNG'), (2, 'LNG'), (3, '管输'))
    type = models.SmallIntegerField(verbose_name='购气类型', choices=type_choices, default=1)
    tank = models.IntegerField(verbose_name='油罐ID')
    height = models.IntegerField(verbose_name='液位高度')
    area = models.IntegerField(verbose_name='截面面积')
    density = models.IntegerField(verbose_name='液体密度')
    factor = models.IntegerField(verbose_name='压缩因子')
    temperature = models.IntegerField(verbose_name='热力学温度')
    pressure = models.IntegerField(verbose_name='压强')


class Sell(models.Model):
    date = models.DateField(verbose_name='销售日期')
    type_choices = ((1, '居民户'), (2, '工业户'), (3, '商业户'))
    type = models.SmallIntegerField(verbose_name='用户类型', choices=type_choices, default=1)
    amount = models.IntegerField(verbose_name='销售气量')
    price = models.CharField(verbose_name='销售气价', max_length=128)
    area_choices = ((1, '第一营业所'), (2, '第二营业所'), (3, '第三营业所'), (4, '浦江营业所'))
    area = models.SmallIntegerField(verbose_name='销售区域', choices=area_choices, default=1)


class Use(models.Model):
    date = models.DateField(verbose_name='自用日期')
    amount = models.IntegerField(verbose_name='自用气量')
    number = models.IntegerField(verbose_name='设备编号')
    price = models.CharField(verbose_name='单位成本', max_length=128)
    use_choices = ((1, '生产加工'), (2, '供暖'), (3, '烹饪'))
    use = models.SmallIntegerField(verbose_name='使用用途', choices=use_choices,default=1)


class Compensate(models.Model):
    date = models.DateField(verbose_name='索赔日期')
    type_choices = ((1, '非法用气索赔'), (2, '外力损坏索赔'))
    type = models.SmallIntegerField(verbose_name='索赔类型', choices=type_choices, default=1)
    reason = models.CharField(verbose_name='索赔原因', max_length=128)
    amount = models.IntegerField(verbose_name='索赔气量')
    area_choices = ((1, '第一营业所'), (2, '第二营业所'), (3, '第三营业所'), (4, '浦江营业所'))
    area = models.SmallIntegerField(verbose_name='索赔区域', choices=area_choices, default=1)
    state_choices = ((1, '待赔偿'), (2, '已赔偿'))
    state = models.SmallIntegerField(verbose_name='索赔状态', choices=state_choices, default=1)


class Diffuse(models.Model):
    date = models.DateField(verbose_name='放散日期')
    type_choices = ((1, '天然气'), (2, '液化气'))
    type = models.SmallIntegerField(verbose_name='气体类型', choices=type_choices, default=1)
    reason_choices = ((1, '维护'), (2, '泄露'))
    reason = models.SmallIntegerField(verbose_name='放散', choices=reason_choices, default=1)
    amount = models.IntegerField(verbose_name='放散气量')
    area_choices = ((1, '第一营业所'), (2, '第二营业所'), (3, '第三营业所'), (4, '浦江营业所'))
    area = models.SmallIntegerField(verbose_name='放散区域', choices=area_choices, default=1)


class zhuanxianggz(models.Model):  # 专项工作
    number = models.IntegerField()  # 数量
    yujijianshao = models.FloatField()  # 预计减少损失
    zhanbi = models.FloatField()  # 占购销差比


class yongqiyuce(models.Model):  # 用气预测
    month = models.IntegerField()  # 月份
    series = models.IntegerField()  # 系列


class changes(models.Model):  # 变化
    buyin = models.FloatField()  # 购入量
    sellout = models.FloatField()  # 销量


class gouxiaochaarea(models.Model):  # 当年购销差成分分布
    leakloss = models.FloatField()  # 泄露损失
    pipechanges = models.FloatField()  # 管容变化
    abnormalcal = models.FloatField()  # 非常计量
    overageloss = models.FloatField()  # 超龄表损失
    temperature = models.FloatField()  # 温压补偿


class dishang(models.Model):  # 地上部分漏点数量及类型
    number = models.IntegerField()  # 漏点数量
    percentage = models.FloatField()  # 损失气量占比
    undernum = models.IntegerField()  # 地下漏点数量
    cunliang = models.IntegerField()  # 存量泄漏点


class jiance(models.Model):  # 用气监测
    lossper = models.FloatField()  # 计量损失率
    bushou = models.FloatField()  # 补收量
    jiangdi = models.FloatField()  # 降低购销差量
    sunshi = models.FloatField()  # 损失气量


class biaoju(models.Model):  # 表具计量
    year = models.IntegerField()  # 年份
    jiangdiliang = models.FloatField()  # 降低购销差量
    sunshiqi = models.FloatField()  # 损失气量
    chaoling = models.IntegerField()  # 超龄表数
    name = models.CharField(max_length=64)  # 名称


class qiyuan(models.Model):  # 气源信息管理
    qiyuanname = models.CharField(max_length=64)  # 气源名称
    qiyuantype = models.CharField(max_length=64)  # 气源类型
    location = models.CharField(max_length=64)  # 所在地
    sum = models.FloatField()  # 总库存量
    available = models.FloatField()  # 可用库存量
    arranged = models.FloatField()  # 已分配库存量
    alarm = models.FloatField()  # 警戒库存
    use = models.CharField(max_length=32)  # 是否可用


class guanwang(models.Model):  # 管网信息管理
    guanwangname = models.CharField(max_length=64)  # 管网名称
    guandaolen = models.FloatField()  # 管道长度
    guige = models.CharField(max_length=32)  # 管径规格
    textile = models.CharField(max_length=32)  # 管道材质
    weihu = models.CharField(max_length=64)  # 维护计划
    jilu = models.CharField(max_length=64)  # 巡检记录
    status = models.CharField(max_length=32)  # 运行状态


class zidian(models.Model):  # 数据字典管理
    zidianname = models.CharField(max_length=64)  # 字典名称
    xiangname = models.CharField(max_length=32)  # 字典项名称
    value = models.FloatField()  # 字典项值
    discription = models.CharField(max_length=256)  # 描述


class other(models.Model):  # 其他信息管理
    sellername = models.CharField(max_length=64)  # 供货商名称
    client = models.CharField(max_length=32)  # 客户名称
    contractnum = models.CharField(max_length=32)  # 合同编号
    contracttype = models.CharField(max_length=32)  # 合同类型
    start = models.CharField(max_length=32)  # 合同起始日期
    end = models.CharField(max_length=32)  # 合同终止日期
    product = models.CharField(max_length=32)  # 产品名称
    order = models.IntegerField()  # 订单数量
    money = models.FloatField()  # 销售金额


class Qp2(models.Model):
    qpdate = models.DateField()
    zhibiao = models.IntegerField()
    typeqp = models.IntegerField()
    buyin = models.IntegerField()
    pipebuy = models.FloatField()
    CNG = models.FloatField()
    LNG = models.FloatField()


class buyin3(models.Model):  # 管输
    buyin3_date = models.DateField()
    buyin3_buyin = models.FloatField()
    buyin3_unit = models.CharField(max_length=32)
    buyin3_price = models.FloatField()


class buyin2(models.Model):  # LNG
    buyin2_date = models.DateField()
    buyin2_buyin = models.FloatField()
    buyin2_unit = models.CharField(max_length=32)
    buyin2_price = models.FloatField()


class buyin1(models.Model):  # CNG
    buyin1_date = models.DateField()
    buyin1_buyin = models.FloatField()
    buyin1_unit = models.CharField(max_length=32)
    buyin1_price = models.FloatField()


class dailypipe(models.Model):
    dailypipe_date = models.DateField()
    dailypipe_id = models.IntegerField()
    dailypipe_h = models.FloatField()
    dailypipe_s = models.FloatField()
    dailypipe_p = models.FloatField()
    dailypipe_z = models.FloatField()
    dailypipe_T = models.FloatField()
    dailypipe_Pre = models.FloatField()


class dailylng(models.Model):
    dailylng_date = models.DateField()
    dailylng_id = models.IntegerField()
    dailylng_h = models.FloatField()
    dailylng_s = models.FloatField()
    dailylng_p = models.FloatField()
    dailylng_z = models.FloatField()
    dailylng_T = models.FloatField()
    dailylng_Pre = models.FloatField()


class dailycng(models.Model):
    dailycng_date = models.DateField()
    dailycng_id = models.IntegerField()
    dailycng_h = models.FloatField()
    dailycng_s = models.FloatField()
    dailycng_p = models.FloatField()
    dailycng_z = models.FloatField()
    dailycng_T = models.FloatField()
    dailycng_Pre = models.FloatField()


class sell2(models.Model):  # 居民
    sell2_date = models.DateField()
    sell2_sell = models.FloatField()
    sell2_unit = models.CharField(max_length=32)
    sell2_price = models.FloatField()


class sell3(models.Model):  # 工业
    sell3_date = models.DateField()
    sell3_num = models.CharField(max_length=64)
    sell3_name = models.CharField(max_length=64)
    sell3_sell = models.FloatField()
    sell3_price = models.FloatField()


class sell1(models.Model):  # 商业
    sell1_date = models.DateField()
    sell1_num = models.CharField(max_length=64)
    sell1_name = models.CharField(max_length=64)
    sell1_sell = models.FloatField()
    sell1_price = models.FloatField()


class selfuse1(models.Model):
    selfuse1_date = models.DateField()
    selfuse1_num = models.FloatField()
    selfuse1_area = models.CharField(max_length=64)
    selfuse1_reason = models.CharField(max_length=64)
    selfuse1_way = models.CharField(max_length=64)


class selfuse2(models.Model):
    selfuse2_date = models.DateField()
    selfuse2_num = models.FloatField()
    selfuse2_area = models.CharField(max_length=64)
    selfuse2_reason = models.CharField(max_length=64)
    selfuse2_way = models.CharField(max_length=64)


class compensate1(models.Model):
    compensate1_date = models.DateField()
    compensate1_num = models.IntegerField()
    compensate1_area = models.CharField(max_length=64)
    compensate1_type = models.CharField(max_length=64)
    compensate1_loss = models.FloatField()
    compensate1_money = models.FloatField()
    compensate1_make = models.CharField(max_length=64)


class fangsan2(models.Model):
    fangsan2_date = models.DateField()
    fangsan2_num = models.FloatField()
    fangsan2_area = models.CharField(max_length=64)  # 放散区域
    fangsan2_reason = models.CharField(max_length=64)
    fangsan2_loss = models.FloatField()
    fangsan2_field = models.CharField(max_length=64)  # 影响范围


class fangsan1(models.Model):
    fangsan1_date = models.DateField()
    fangsan1_num = models.FloatField()
    fangsan1_area = models.CharField(max_length=64)  # 放散区域
    fangsan1_reason = models.CharField(max_length=64)
    fangsan1_loss = models.FloatField()
    fangsan1_field = models.CharField(max_length=64)  # 影响范围
