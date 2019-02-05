import { Component, EventEmitter } from '@angular/core';

export function TestComponent(props: Component): Component {

  const options: Component = {
    selector: props.selector,
    template: props.template || '',
    inputs: props.inputs,
    outputs: props.outputs || [],
    exportAs: props.exportAs || ''
  };

  class Mock {}

  options.outputs.forEach(method => {
    Mock.prototype[method] = new EventEmitter<any>();
  });

  return Component(options)(Mock as any);
}
