from .base import *

DEBUG = True
CURRENT_IP = '0.0.0.0:8000'

ALLOWED_HOSTS = ['127.0.0.1', 'localhost', CURRENT_IP]
INTERNAL_IPS = ALLOWED_HOSTS
