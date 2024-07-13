"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic.base import TemplateView
from django.conf.urls import url, include
from rest_framework import routers, permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
    openapi.Info(
        title="Project API",
        default_version='v1.0',
        description="interface doc",
        terms_of_service="#",
        contact=openapi.Contact(email="dzq258@gmail.com"),
        license=openapi.License(name="xxx License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'',TemplateView.as_view(template_name='index.html')),
    url(r'^', include('restfulapi.urls')),
    # 配置drf-yasg路由
    url('^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url('swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
