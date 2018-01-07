

function placeJoint(start, end, segmentLength, bendDirection) {

  var midpoint = add(start, div(sub(end, start), 2));

  var legA = length(midpoint, end);
  if (legA > segmentLength) {
    return midpoint;
  }
  
  var legB = Math.sqrt(Math.pow(segmentLength, 2) - Math.pow(legA, 2));

  var angle = Math.atan2(
    end[1] - start[1], 
    end[0] - start[0]
  ) + (Math.PI / 2);
  
  return [
    legB * Math.cos(angle) * bendDirection + midpoint[0], 
    legB * Math.sin(angle) * bendDirection + midpoint[1]
  ];
}

var endPos = thisComp.layer('end').transform.position;
var startPos = thisComp.layer('start').transform.position;
var hoseLength = effect('Hose Length')('Slider') / 2;
var bendDirection = effect('Bend Direction')('Slider') / 100;
placeJoint(startPos, endPos, hoseLength, bendDirection);

