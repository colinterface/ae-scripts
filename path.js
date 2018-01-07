// function getPosition(layer) {
//   if (layer.parent) {
//     return getPosition(layer.parent);
//   } else {
//     return layer.transform.position;
//   }
// }

// var startPos = getPosition(thisComp.layer("start"));
// var endPos = getPosition(thisComp.layer("end"));
var startPos = thisComp.layer("start").transform.position;
var endPos = thisComp.layer("end").transform.position;
var jointPos = thisComp.layer("joint").transform.position;
var points = [startPos, jointPos, endPos];

var halfDistance = length(startPos, endPos) / 2;
var tangentLength = Math.min(effect("Joint Radius")("Slider"), halfDistance);

var angle = Math.atan2(
  endPos[1] - startPos[1], 
  endPos[0] - startPos[0]
);

var reverseAngle = angle - Math.PI;

var inTangent = [
  tangentLength * Math.cos(reverseAngle), 
  tangentLength * Math.sin(reverseAngle)
];

var outTangent = [
  tangentLength * Math.cos(angle), 
  tangentLength * Math.sin(angle)
];

var noTangent = [0, 0];

var inTanents = [noTangent, inTangent, noTangent];
var outTangents = [noTangent, outTangent, noTangent];
var closeShape = effect("Closed Shape")("Checkbox");

createPath(points, inTanents, outTangents, closeShape);


