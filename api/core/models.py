from django.db import models

class HelloWorld(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(null=True, blank=True, auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True, auto_now=True)

    def __str__(self):
        return self.title