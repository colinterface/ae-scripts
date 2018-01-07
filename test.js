function renderText() {
  var start = thisComp.layer("start").transform.position;
  var end = thisComp.layer("end").transform.position;
  var middle = thisComp.layer("middle").transform.position;
  var points = [start, middle, end];

  var tangentLength = 1;

  var angle = Math.atan2(
    end[1] - start[1], 
    end[0] - start[0]
  );

  var inTangent = [
    tangentLength * Math.cos(angle), 
    tangentLength * Math.sin(angle)
  ];

  // var path = thisComp.layer('bendy').content("Shape 1").content("Path 1").path
  result = '';
  result += 'angle: ';
  result += radiansToDegrees(angle) + '\n';
  result += 'in tangent: ';
  result += inTangent.join(', ');
  
  
  // result += path.inTangents()[1].join(', ') + '\n';
  // result += 'out tangent: ';
  // result += path.outTangents()[1].join(', ') + '\n';
  
  return result;
}

renderText();

