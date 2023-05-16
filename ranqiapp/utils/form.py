from ranqiapp import models
from ranqiapp.utils.bootstrap import BootStrapModelForm


class CompensateAddForm(BootStrapModelForm):
    class Meta:
        model = models.Compensate
        exclude = ['date']


class BuyAddForm(BootStrapModelForm):
    class Meta:
        model = models.Buy
        exclude = ['date']


class StoreAddForm(BootStrapModelForm):
    class Meta:
        model = models.Store
        exclude = ['date']


class SellAddForm(BootStrapModelForm):
    class Meta:
        model = models.Sell
        exclude = ['date']


class UseAddForm(BootStrapModelForm):
    class Meta:
        model = models.Use
        exclude = ['date']


class DiffuseAddForm(BootStrapModelForm):
    class Meta:
        model = models.Diffuse
        exclude = ['date']