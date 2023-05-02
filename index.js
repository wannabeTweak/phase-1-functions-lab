// Code your solution in this file!
//42 being the street number
const scuberHQ = 42;

//Returns a distance in blocks from scuberHQ
function distanceFromHqInBlocks(streetValue) {
    if (streetValue < scuberHQ) {
        return (scuberHQ - streetValue);
    }
    else {
        return (streetValue -scuberHQ);
    }
}

//Takes distance in blocks and multiply's it by the length of a block (264)
//Returns value of distance in feet after multiplication occurs
function distanceFromHqInFeet(streetValue) {
    return distanceFromHqInBlocks(streetValue) * 264;
}

//Takes starting and ending distance (in blocks)
//Finds the bigger value of the 2 and subtracts them to get the distance travelled in blocks
//Multiples distance travelled in blocks by block length (264)
function distanceTravelledInFeet(startValue, endValue) {
    if (startValue > endValue) {
        return ((startValue - endValue) * 264);
    }
    else if (startValue < endValue) {
        return ((endValue - startValue) * 264);
    }
}

//Calculates the prices based off the function distanceTravelledInFeet based on different scenarios
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet (start, destination);
    if (distance < 400) {
        return 0
    }
    else if (distance >= 401 && distance <=2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2001 && distance < 2499) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}
