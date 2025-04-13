import { Directive, HostBinding, Input } from '@angular/core';

export type Status = 'Concluído' | 'Processando';

@Directive({
  selector: 'div[app-tag-status]',
  standalone: true,
})
export class TagStatusDirective {
  @Input() status = 'Processando';

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
      this.status === 'Concluído'
        ? 'text-white bg-[#30D25E]'
        : 'text-[#4D4D4D] bg-[#FAE9A2]',
    ].join(' ');
  }
}
