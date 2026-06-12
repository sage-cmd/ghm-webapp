from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    quote = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}'s testimonial"

    class Meta:
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'
