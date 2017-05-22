from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAuthenticated
import requests


class GetDevicesView(APIView):
    permission_classes = (IsAuthenticated, )
    authentication_classes = (JSONWebTokenAuthentication, )

    def get(self, request, *args, **kwargs):
        devices = requests.get("http://localhost:4555/devices")
        return Response(devices.text)


class ChangeDeviceStateView(APIView):
    permission_classes = (IsAuthenticated, )
    authentication_classes = (JSONWebTokenAuthentication, )

    def post(self, request, *args, **kwargs):
        device = requests.post("http://localhost:4555/device/update")
        return Response(device.text)
