from rest_framework import serializers
from cube.models import Cube

class CubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cube
        fields = ('id', 'author', 'title', 'date', 'article', 'tags')

    def create(self, validated_data):
        title = validated_data.get('title', None)
        user = self.context.get("user")
        article = validated_data.get('article', None)
        tags = validated_data.get('tags', None)
        date = validated_data.get('date', None)
        return Cube.objects.create(title=title, author=user, tags=tags, article=article, date=date)
