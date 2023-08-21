# Generated by Django 4.2.4 on 2023-08-21 17:00

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Experience",
            fields=[
                (
                    "experience",
                    models.CharField(max_length=32, primary_key=True, serialize=False),
                ),
            ],
            options={
                "ordering": ["experience"],
            },
        ),
        migrations.CreateModel(
            name="Skills",
            fields=[
                (
                    "skill",
                    models.CharField(max_length=32, primary_key=True, serialize=False),
                ),
            ],
            options={
                "ordering": ["skill"],
            },
        ),
        migrations.CreateModel(
            name="People",
            fields=[
                (
                    "name",
                    models.CharField(max_length=32, primary_key=True, serialize=False),
                ),
                ("experience", models.ManyToManyField(to="db.experience")),
                ("skills", models.ManyToManyField(to="db.skills")),
            ],
            options={
                "ordering": ["name"],
            },
        ),
    ]
