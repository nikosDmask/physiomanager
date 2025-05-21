from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PhysiotherapistViewSet

router = DefaultRouter()
router.register(r'', PhysiotherapistViewSet)

urlpatterns = [
    path('', include(router.urls)),
]