var AutoLayout = require('./index');

var autoLayout = new AutoLayout();

var fs = require('fs').promises;

(async () => {
  var diagramXML = await fs.readFile('./model.bpmn', 'utf8');
  var layoutedDiagramXML = await autoLayout.layoutProcess(diagramXML);
  await fs.writeFile('./output.bpmn', layoutedDiagramXML);
})();


