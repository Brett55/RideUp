from rest_framework import serializers
import models


LEVEL_CHOICE = (
    ('GREEN', "Green"),
    ('BLUE', "Blue"),
    ('BLACK', "Black"),
    ('DBL_BLACK', "Double Black")
)

MOUNTAIN_CHOICE = (
    ('Cross Country', "Cross Country"),
    ('Down Hill', "Down Hill"),
    ('Free Ride', "Free Ride"),
    ('Dirt Jump', "Dirt Jump")
)

EVENT_TYPE = (
    ('BLANK', "Select Type"),
    ('RACE', "Race"),
    ('GROUP_RIDE', "Group Ride"),
    ('SPECIAL_EVENT', "Special Event"),
    ('TRAIL_WORK_DAY', "Trail Work"),
    ('CONFERENCE', "Conference"),
    ('BIKE_SWAP', "Bike Swap")
)

ROAD_CHOICE = (
    ("Group A", "Group A"),
    ("Group B", "Group B"),
    ("Group C", "Group C"),
    ("Group D", "Group D")
)

SURFACE_CHOICE = (
    ('TRAIL', 'Trail'),
    ('ROAD', 'Road')
)

FREQUENCY = (
    ('Weekly', 'Weekly'),
    ('Bi-Weekly', 'Bi-Weekly'),
    ('One Time for Now', 'One Time for Now')
)


class KickOff(serializers.Serializer):
    # RideLocation Class params
    coordinates = forms.CharField(max_length=200, widget=forms.TextInput(attrs={'type': "hidden"}), required=True)
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'style': 'height:30px'}), required=True)

    editable = forms.CharField(max_length=3)
    event_Frequency = forms.CharField(label='Event Frequency', max_length=100, required=True)
    rideType = forms.ChoiceField(label='Type of Event', choices=EVENT_TYPE, required=True, initial='BLANK')
    roadOrDirt = forms.ChoiceField(label='Trail or Road', choices=SURFACE_CHOICE, required=True)


class JoinRide(serializers.Serializer):
    first_name = forms.CharField(label='Your Name', max_length=100, widget=forms.TextInput(), required=True)
    username = forms.CharField(label='Username', max_length=100, widget=forms.TextInput(), required=True)
    password = forms.CharField(label='Password', max_length=100, widget=forms.TextInput(), required=True)


class JoinRideNonMember(serializers.Serializer):
    first_name = forms.CharField(label='Your Name', max_length=100, widget=forms.TextInput(), required=True)


class AddRideSpotTrail(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    rideTypeMTB = forms.ChoiceField(label='Discipline', choices=MOUNTAIN_CHOICE, required=True)
    rideLevelTrail = forms.ChoiceField(label='Skill Level', choices=LEVEL_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class AddRideSpotRoad(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    rideLevelRoad = forms.ChoiceField(label='Average Pace', choices=ROAD_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RideSpecialEvent(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)


class TrailRace(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    rideTypeMTB = forms.ChoiceField(label='Discipline', choices=MOUNTAIN_CHOICE, required=True)
    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RoadRace(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class TrailWorkDay(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)

    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)

    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class BikeSwap(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)


class Conference(serializers.Serializer):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time', required=True)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)


class SnippetSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    code = serializers.CharField(style={'base_template': 'textarea.html'})
    linenos = serializers.BooleanField(required=False)
    language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
    style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Snippet.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.code = validated_data.get('code', instance.code)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance