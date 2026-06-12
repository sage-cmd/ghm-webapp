from django.db import models

class Worship(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to='worship/', blank=True, null=True)
    youtube_link = models.URLField(blank=True, null=True)
    facebook_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Worship'
        verbose_name_plural = 'Worship'
