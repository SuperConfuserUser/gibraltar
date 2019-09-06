import * as paper from 'paper';

export class ToolStack {
  private tools: any = {};

  constructor(private toolsList: any) {
    this.toolsList.forEach((tool: any) => {
      this.tools[tool.name] = tool;
    });
  }

  enable(): void {
    // build each tool and activate the default
  }

  activateTool(toolName: string) {
    this.tools[toolName]().activate();
  }

  addTools(tool: any) {
    // add single tool the list. would there be a use case for this?
  }

  disable() {
    // remove() each tool in the objects
  }
}
