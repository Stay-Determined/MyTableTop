// fonction de debug assez pratique , mais rien de fou.
export function debug(block,index) {
    console.log(`Block ${index + 1}:`);
    console.log(`  Type: ${block.type}`);
    console.log(`  ID: ${block.id}`);
    console.log(`  Position: (${block.x}, ${block.y})`);
    if (block.fields) {
      console.log("  Fields:");
      Object.keys(block.fields).forEach(field => {
        console.log(`    ${field}: ${block.fields[field]}`);
      });
    }
    if (block.inputs) {
      console.log("  Inputs:");
      Object.keys(block.inputs).forEach(input => {
        console.log(`    ${input}:`, block.inputs[input]);
      });
    }
}