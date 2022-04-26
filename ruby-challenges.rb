# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSEUDO CODE:
# Create medhod called wordReturn --> (array, letter)
# Use .select on the array to filter through the elements in the array
# return(implicitly) if value includes the supplied letter using .include? and passing in letter

def wordReturn (array, letter)
    array.select{|value| value.include?(letter)}
end

p wordReturn beverages_array, letter_o
p wordReturn beverages_array, letter_t


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# PSEUDO CODE:
# Create method called "additionBot" --> (array)
# implicit return & use built-in .sum on the array 

def additionBot array
    array.sum
end

p additionBot nums_array1
p additionBot nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike
    def initialize(model, current_speed=0)
        @model = model
        @wheels = 2
        @current_speed = current_speed
        
        def bike_info
            "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
        end

        def pedal_faster speed_increase
            @current_speed += speed_increase #add given speed_increase to current speed
        end

        def brake speed_decrease
            @current_speed = @current_speed - speed_decrease # remove given speed_increase to current speed
            if @current_speed.positive?
                @current_speed 
            elsif 
                @current_speed.negative? # trap for when # goes negatove
                @current_speed = 0
            end
        end
    end
end

my_bike = Bike.new 'Trek'
p my_bike.bike_info
# 
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# My Output: "The Trek bike has 2 wheels and is going 0 mph"

my_bike = Bike.new 'Trek'
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# MY OUTPUT:
# 10
# 28
# 23
# 0