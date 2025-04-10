import { Directive, HostBinding, Input } from '@angular/core';

export enum Status {
  Concluded,
  Processing,
}

@Directive({
  selector: 'div[app-tag-status]',
  standalone: true,
})
export class TagStatusDirective {
  @Input() status: Status = Status.Processing;

  @HostBinding('class')
  get classes(): string {
    return [
      'mx-auto',
      'py-1',
      'px-1',
      'w-min',
      'font-medium',
      'text-sm',
      'rounded-md',
      this.status === Status.Concluded
        ? 'text-white bg-[#30D25E]'
        : 'text-[#4D4D4D] bg-[#FAE9A2]',
    ].join(' ');
  }
}
