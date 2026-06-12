
"""
URL configuration for ghm-web project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
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
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from missions.views import MissionViewSet
from worship.views import WorshipViewSet
from podcasts.views import PodcastViewSet
from programs.views import ProgramViewSet
from testimonials.views import TestimonialViewSet

router = DefaultRouter()
router.register(r'missions', MissionViewSet)
router.register(r'worship', WorshipViewSet)
router.register(r'podcasts', PodcastViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'testimonials', TestimonialViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),          # ← all your ViewSet routes
    path('api/contacts/', include('contacts.urls')),  # ← contact form route
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)