from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def gglogin(request):
    result = {'username': request.user.username}
    return Response(result)

