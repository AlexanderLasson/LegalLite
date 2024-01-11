# Generated by Django 4.0.2 on 2022-03-25 20:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('HomeScreen', '0002_elementtext_alter_element_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contributions', models.FloatField(default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='tos',
            name='category',
            field=models.CharField(choices=[('Social Media', 'Social Media'), ('Streaming', 'Streaming'), ('News', 'News'), ('Shopping', 'Shopping'), ('Finance', 'Finance'), ('Misc', 'Misc')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='tos',
            name='communityRating',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='tos',
            name='date',
            field=models.DateTimeField(null=True, verbose_name='Date of Last Update'),
        ),
        migrations.AddField(
            model_name='tos',
            name='status',
            field=models.CharField(choices=[('Approved', 'Approved'), ('Pending', 'Pending'), ('Rejected', 'Rejected')], default='Pending', max_length=20),
        ),
        migrations.AddField(
            model_name='tos',
            name='weightRating',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='edit',
            name='author',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='tos',
            name='fullText',
            field=models.TextField(null=True, verbose_name='Text'),
        ),
        migrations.AlterField(
            model_name='tos',
            name='name',
            field=models.CharField(max_length=50, unique=True, verbose_name='Name of Service'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]