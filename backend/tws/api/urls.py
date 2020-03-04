from rest_framework import routers
from .views import *
from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('workouts', WorkoutViewSet)
router.register('ratings', RatingViewSet)
router.register('dummy', DummyViewSet)
router.register('profile', ProfileViewSet)
router.register("feedposts", FeedPostViewSet)
router.register("forumposts", ForumPostViewSet)
router.register("comment", CommentViewSet)
router.register("LikePost", LikeViewSet)
router.register("friendslist", FriendsListViewSet)


urlpatterns = [
path('', include(router.urls)),
]
