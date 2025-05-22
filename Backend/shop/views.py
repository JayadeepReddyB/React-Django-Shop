from .models import Product
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductSerializer 

# Create your views here.

class ProductListView(APIView):
    def get(self,request):
        products = Product.objects.all()
        context = {
            'request' : request
        }
        serializer = ProductSerializer(products, many = True, context = context)
        return Response(serializer.data)

