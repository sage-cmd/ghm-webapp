from django.db import models

class Podcast(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    audio_file = models.FileField(upload_to='podcasts/', blank=True, null=True)
    audio_url = models.URLField(blank=True, null=True)
    speaker = models.CharField(max_length=100, default='Pastor Bilson')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Podcast'
        verbose_name_plural = 'Podcasts'
