from django.db import models
import os
import uuid

# Function to generate dynamic upload path for images
def image_upload_path(instance, filename):
    ext = filename.split('.')[-1]  
    filename = f"{uuid.uuid4()}.{ext}"  
    return os.path.join('uploads/', filename) 

class BannerTitle(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(null=True, blank=True, auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True, auto_now=True)

    def __str__(self):
        return self.title if self.title else "No Title"

class Bannerimages(models.Model):
    image = models.ImageField(upload_to=image_upload_path)  # Use the upload path function
    created_at = models.DateTimeField(null=True, blank=True, auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True, auto_now=True)

    def __str__(self):
        return self.image.name  # Returns the filename
