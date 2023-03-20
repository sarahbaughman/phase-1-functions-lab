// Code your solution in this file!


function distanceFromHqInBlocks(startPoint){
    if (startPoint < 42) {
    return 42 - startPoint
    } else {
    return startPoint - 42
    }
}

function distanceFromHqInFeet(startPoint) {
    return distanceFromHqInBlocks(startPoint) * 264
}

function distanceTravelledInFeet(start,destination) {
    if (start < destination) {
        return ((destination - start) * 264)
    } else if (start > destination) {
        return ((start - destination) * 264)
        }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0
        
    } else if (distanceTravelledInFeet(start,destination) > 400) {
        return distanceTravelledInFeet(start,destination)*.2
    
    } else if (distanceTravelledInFeet(start,destination) > 2000) {
        return 25

    } else if (distanceTravelledInFeet(start,destination) >= 2500) {
        return 'cannot travel that far'
    }
}
